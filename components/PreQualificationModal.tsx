'use client'

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
  type ReactNode,
} from 'react'
import { X, ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { buildWhatsAppUrl, type FormAnswers } from '@/lib/whatsapp'
import { fireLeadEvent } from '@/lib/metaPixel'

// ── Context ────────────────────────────────────────────────────────────────

type PreQualCtx = { openModal: () => void }
const PreQualContext = createContext<PreQualCtx>({ openModal: () => {} })

export function usePreQualification() {
  return useContext(PreQualContext)
}

// ── Steps ──────────────────────────────────────────────────────────────────

type StepChoice = {
  id: keyof FormAnswers
  question: string
  type: 'choice'
  options: string[]
}
type StepText = {
  id: keyof FormAnswers
  question: string
  type: 'text'
  placeholder: string
  inputType?: 'text' | 'tel'
}
type Step = StepChoice | StepText

const STEPS: Step[] = [
  {
    id: 'empresa',
    question: 'Você já tem uma empresa ou presta serviço?',
    type: 'choice',
    options: ['Sim', 'Ainda não', 'Estou começando'],
  },
  {
    id: 'segmento',
    question: 'Qual é o segmento do seu negócio?',
    type: 'text',
    placeholder: 'Ex: clínica estética, oficina, ótica, restaurante, pintura, reforma…',
  },
  {
    id: 'whatsapp',
    question: 'Qual é o seu WhatsApp para contato?',
    type: 'text',
    inputType: 'tel',
    placeholder: '(48) 9 9000-0000',
  },
  {
    id: 'prazo',
    question: 'Você busca um site para quando?',
    type: 'choice',
    options: ['Hoje', 'Esta semana', 'Este mês', 'Só pesquisando'],
  },
  {
    id: 'ciente',
    question: 'Você está ciente que o plano Site em 1 Dia custa R$497?',
    type: 'choice',
    options: ['Sim, quero contratar', 'Quero entender melhor', 'Ainda não posso investir'],
  },
  {
    id: 'briefing',
    question: 'Você consegue preencher o briefing e enviar os materiais para iniciar?',
    type: 'choice',
    options: ['Sim', 'Preciso organizar', 'Não tenho materiais'],
  },
]

const TOTAL = STEPS.length

// ── Provider ───────────────────────────────────────────────────────────────

export function PreQualificationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = useCallback(() => setIsOpen(true), [])

  return (
    <PreQualContext.Provider value={{ openModal }}>
      {children}
      {isOpen && <ModalInner onClose={() => setIsOpen(false)} />}
    </PreQualContext.Provider>
  )
}

// ── Modal inner ────────────────────────────────────────────────────────────

function ModalInner({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Partial<FormAnswers>>({})
  const [error, setError] = useState('')
  const sentRef = useRef(false)

  const isFinal = step >= TOTAL
  const current = STEPS[step] as Step | undefined

  function sendToSheets(data: Partial<FormAnswers>, origem: string) {
    if (sentRef.current) return
    const hasData = Object.values(data).some((v) => v && v.trim().length > 0)
    if (!hasData) return
    sentRef.current = true
    fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, origem }),
    }).catch(() => {/* fail silently */})
  }

  function handleClose() {
    sendToSheets(answers, isFinal ? 'fechou-tela-final' : `abandonou-etapa-${step + 1}`)
    onClose()
  }

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answers, step, isFinal])

  function validate(): boolean {
    if (!current) return true
    const val = answers[current.id] ?? ''
    if (current.type === 'text') {
      if (current.id === 'whatsapp') {
        const digits = val.replace(/\D/g, '')
        if (digits.length < 10) {
          setError('Informe um número de WhatsApp válido (mínimo 10 dígitos).')
          return false
        }
      } else if (val.trim().length < 2) {
        setError('Descreva o segmento com pelo menos 2 caracteres.')
        return false
      }
    } else {
      if (!val) {
        setError('Selecione uma opção para continuar.')
        return false
      }
    }
    setError('')
    return true
  }

  function handleNext() {
    if (!validate()) return
    setStep((s) => s + 1)
  }

  function handleBack() {
    setError('')
    setStep((s) => s - 1)
  }

  function handleSelect(option: string) {
    if (!current) return
    setError('')
    setAnswers((prev) => ({ ...prev, [current.id]: option }))
  }

  function handleText(value: string) {
    if (!current) return
    setError('')
    setAnswers((prev) => ({ ...prev, [current.id]: value }))
  }

  function handleContinueToWhatsApp() {
    const final: FormAnswers = {
      empresa: answers.empresa ?? '',
      segmento: answers.segmento ?? '',
      whatsapp: answers.whatsapp ?? '',
      prazo: answers.prazo ?? '',
      ciente: answers.ciente ?? '',
      briefing: answers.briefing ?? '',
    }

    fireLeadEvent(final)
    sendToSheets(final, 'whatsapp')

    const url = buildWhatsAppUrl(final)
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer')
      onClose()
    }, 300)
  }

  const progress = isFinal ? 100 : (step / TOTAL) * 100

  return (
    <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <div
        className="relative w-full sm:max-w-lg bg-[#09090B] border border-white/10 rounded-t-3xl sm:rounded-3xl shadow-[0_32px_80px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
        style={{ maxHeight: 'calc(100dvh - 1rem)' }}
        role="dialog"
        aria-modal="true"
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/8 hover:bg-white/15 flex items-center justify-center transition-colors"
          aria-label="Fechar"
        >
          <X className="w-4 h-4 text-[#6B7280]" />
        </button>

        {!isFinal ? (
          <div className="overflow-y-auto flex-1">
            {/* Header */}
            <div className="px-6 pt-7 pb-4">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF6B00] mb-1">
                Etapa {step + 1} de {TOTAL}
              </p>
              <h2 className="font-display text-xl font-bold text-[#F7F7F5] leading-snug">
                Veja se seu negócio se encaixa
              </h2>
              <p className="text-sm text-[#6B7280] mt-1">
                Responda algumas perguntas rápidas antes de falar com nosso time.
              </p>
            </div>

            {/* Progress bar */}
            <div className="mx-6 h-1 bg-white/8 rounded-full mb-6 overflow-hidden">
              <div
                className="h-full bg-[#FF6B00] rounded-full transition-all duration-400 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Question */}
            <div className="px-6 pb-4">
              <h3 className="font-display text-base sm:text-lg font-bold text-[#F7F7F5] mb-5 leading-snug">
                {current?.question}
              </h3>

              {current?.type === 'choice' ? (
                <div className="flex flex-col gap-2.5">
                  {current.options.map((option) => {
                    const selected = answers[current.id] === option
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleSelect(option)}
                        className={`w-full text-left px-4 py-4 rounded-2xl border text-sm font-medium transition-all duration-150 flex items-center justify-between gap-3 active:scale-[0.98] ${
                          selected
                            ? 'bg-[#FF6B00]/12 border-[#FF6B00] text-[#F7F7F5]'
                            : 'bg-white/4 border-white/10 text-[#9CA3AF] hover:border-white/25 hover:text-[#F7F7F5] hover:bg-white/6'
                        }`}
                      >
                        <span>{option}</span>
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                            selected
                              ? 'bg-[#FF6B00] border-[#FF6B00]'
                              : 'border-white/20'
                          }`}
                        >
                          {selected && <Check className="w-3 h-3 text-white" />}
                        </div>
                      </button>
                    )
                  })}
                </div>
              ) : current ? (
                <input
                  type={(current as StepText).inputType ?? 'text'}
                  inputMode={(current as StepText).inputType === 'tel' ? 'tel' : 'text'}
                  value={answers[current.id] ?? ''}
                  onChange={(e) => handleText(e.target.value)}
                  placeholder={(current as StepText).placeholder}
                  className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-4 text-base text-[#F7F7F5] placeholder:text-[#4B5563] focus:outline-none focus:border-[#FF6B00] transition-colors"
                  autoFocus
                />
              ) : null}

              {error && (
                <p className="mt-3 text-xs text-red-400">{error}</p>
              )}
            </div>

            {/* Actions */}
            <div
              className="px-6 pb-6 flex items-center gap-2 mt-2"
              style={{ paddingBottom: 'max(24px, env(safe-area-inset-bottom))' }}
            >
              {step > 0 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex items-center gap-1 text-sm text-[#6B7280] hover:text-[#F7F7F5] transition-colors px-3 py-3.5 rounded-xl hover:bg-white/5 flex-shrink-0"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Voltar
                </button>
              )}
              <button
                type="button"
                onClick={handleNext}
                className="flex-1 flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#FF8C33] active:bg-[#E55A00] text-white font-bold py-4 rounded-2xl transition-all duration-150 text-sm shadow-[0_4px_20px_rgba(255,107,0,0.35)] active:scale-[0.98]"
              >
                Continuar
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Final screen */
          <div
            className="px-6 py-10 text-center"
            style={{ paddingBottom: 'max(40px, env(safe-area-inset-bottom))' }}
          >
            <div className="w-14 h-14 rounded-full bg-[#22C55E]/12 border border-[#22C55E]/30 flex items-center justify-center mx-auto mb-5">
              <Check className="w-7 h-7 text-[#22C55E]" />
            </div>
            <h2 className="font-display text-2xl font-bold text-[#F7F7F5] mb-3">
              Tudo certo!
            </h2>
            <p className="text-[#6B7280] text-sm leading-relaxed mb-8 max-w-xs mx-auto">
              Agora vamos te direcionar para o WhatsApp com uma mensagem pronta para nosso time
              continuar o atendimento.
            </p>
            <button
              type="button"
              onClick={handleContinueToWhatsApp}
              className="w-full flex items-center justify-center gap-2.5 bg-[#22C55E] hover:bg-[#16A34A] active:bg-[#15803D] text-white font-bold py-4 rounded-2xl transition-colors text-sm shadow-[0_4px_20px_rgba(34,197,94,0.3)]"
            >
              <WhatsAppIcon />
              Continuar para o WhatsApp
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="mt-4 text-xs text-[#4B5563] hover:text-[#6B7280] transition-colors"
            >
              Fechar
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
