import { MessageCircle, ClipboardList, CreditCard, Eye, CheckCircle } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection'
import { PreQualificationTrigger } from './PreQualificationTrigger'

const STEPS = [
  {
    number: '1',
    icon: MessageCircle,
    title: 'Você nos conta sobre o seu negócio',
    description: 'Chame no WhatsApp. Briefing rápido e objetivos claros.',
  },
  {
    number: '2',
    icon: ClipboardList,
    title: 'Criamos seu site em até 24 horas',
    description: 'Design moderno, responsivo e otimizado.',
  },
  {
    number: '3',
    icon: Eye,
    title: 'Seu site fica pronto no ar',
    description: 'Publicamos e testamos tudo para você.',
  },
  {
    number: '4',
    icon: CheckCircle,
    title: 'Você recebe e começa a vender',
    description: 'Mais presença, mais confiança, mais resultados.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-[#F7F7F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#09090B] leading-tight mb-2">
            Como funciona{' '}
            <span className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B00] inline-block" />
            </span>
          </h2>
          <p className="text-[#6B7280] text-lg mt-4 max-w-xl mx-auto">
            Do primeiro contato ao site no ar em até 24h. Simples e sem burocracia.
          </p>
        </AnimatedSection>

        {/* Desktop horizontal steps */}
        <StaggerContainer
          className="hidden md:grid grid-cols-4 gap-0 relative"
          staggerDelay={0.1}
        >
          {/* Connecting line */}
          <div className="absolute top-[28px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#FF6B00]/30 to-transparent" />

          {STEPS.map((step, index) => {
            const Icon = step.icon
            return (
              <StaggerItem key={step.number}>
                <div className="flex flex-col items-center text-center px-4 group">
                  {/* Number circle */}
                  <div className="relative mb-6 z-10">
                    <div className="w-14 h-14 rounded-full bg-[#F7F7F5] border-2 border-[#FF6B00] flex items-center justify-center group-hover:bg-[#FF6B00] transition-all duration-300 shadow-[0_0_0_6px_#F7F7F5]">
                      <span className="font-display text-lg font-bold text-[#FF6B00] group-hover:text-white transition-colors">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <Icon className="w-5 h-5 text-[#FF6B00] mb-3 opacity-60" />
                  <h3 className="font-display text-sm font-bold text-[#09090B] mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{step.description}</p>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* Arrows between steps (desktop) */}
        <div className="hidden md:flex justify-around mt-0 -mt-[140px] pointer-events-none">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex-1 flex justify-end items-start pt-7">
              <span className="text-[#FF6B00]/40 text-xl font-bold">→</span>
            </div>
          ))}
          <div className="flex-1" />
        </div>

        {/* Mobile vertical steps */}
        <div className="md:hidden flex flex-col gap-0">
          {STEPS.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="flex gap-5">
                {/* Left: circle + line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-[#FF6B00] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="font-display text-base font-bold text-[#FF6B00]">{step.number}</span>
                  </div>
                  {index < STEPS.length - 1 && (
                    <div className="w-px flex-1 bg-[#FF6B00]/20 my-2 min-h-[32px]" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-8 pt-2 flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon className="w-4 h-4 text-[#FF6B00]" />
                    <h3 className="font-display text-[15px] font-bold text-[#09090B]">{step.title}</h3>
                  </div>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* 24h disclaimer — mobile */}
        <div className="md:hidden mt-6 p-4 rounded-xl bg-[#FF6B00]/[0.08] border border-[#FF6B00]/20">
          <p className="text-xs text-[#6B7280] leading-relaxed">
            <span className="font-semibold text-[#FF6B00]">Importante:</span>{' '}
            O prazo de 24h começa após pagamento confirmado e briefing completo enviado.
          </p>
        </div>

        <AnimatedSection className="mt-10 sm:mt-12 text-center" delay={0.3}>
          <PreQualificationTrigger className="btn-primary">
            Começar meu site agora — R$497 →
          </PreQualificationTrigger>
        </AnimatedSection>
      </div>
    </section>
  )
}
