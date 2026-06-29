import { Fragment } from 'react'
import { Check, X, Minus } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'
import { PreQualificationTrigger } from './PreQualificationTrigger'

const CRITERIA = [
  { label: 'Tempo para ficar pronto' },
  { label: 'Custo inicial' },
  { label: 'Precisa saber programar' },
  { label: 'Aparência profissional' },
  { label: 'Funciona bem no celular' },
  { label: 'Botão de WhatsApp' },
  { label: 'Suporte incluso' },
  { label: 'Ideal para começar rápido' },
]

const COLUMNS = [
  {
    name: 'Agência tradicional',
    values: [
      { text: '30 a 90 dias', type: 'neutral' },
      { text: 'R$3.000 a R$15.000+', type: 'bad' },
      { text: 'Não', type: 'good' },
      { text: 'Alta', type: 'good' },
      { text: 'Depende', type: 'neutral' },
      { text: 'Nem sempre', type: 'neutral' },
      { text: 'Plano à parte', type: 'bad' },
      { text: 'Não', type: 'bad' },
    ],
    highlight: false,
    tag: '',
  },
  {
    name: 'Site em 1 Dia',
    values: [
      { text: 'Até 24h', type: 'good' },
      { text: 'R$497', type: 'good' },
      { text: 'Não', type: 'good' },
      { text: 'Alta', type: 'good' },
      { text: 'Sim', type: 'good' },
      { text: 'Sim', type: 'good' },
      { text: '1 ajuste incluso', type: 'good' },
      { text: 'Sim', type: 'good' },
    ],
    highlight: true,
    tag: 'Melhor escolha',
  },
  {
    name: 'Fazer sozinho',
    values: [
      { text: 'Dias a semanas', type: 'bad' },
      { text: 'Mensalidade de plataforma', type: 'neutral' },
      { text: 'Aprender', type: 'bad' },
      { text: 'Baixa/Média', type: 'bad' },
      { text: 'Depende', type: 'neutral' },
      { text: 'Manual', type: 'neutral' },
      { text: 'Nenhum', type: 'bad' },
      { text: 'Trabalhoso', type: 'bad' },
    ],
    highlight: false,
    tag: '',
  },
]

function ValueCell({ type, text, highlight }: { type: string; text: string; highlight: boolean }) {
  if (type === 'good') {
    return (
      <div className="flex items-center gap-1.5">
        <Check className={`w-4 h-4 flex-shrink-0 ${highlight ? 'text-white' : 'text-[#22C55E]'}`} />
        <span className={`text-sm ${highlight ? 'text-white font-medium' : 'text-[#F7F7F5]'}`}>{text}</span>
      </div>
    )
  }
  if (type === 'bad') {
    return (
      <div className="flex items-center gap-1.5">
        <X className="w-4 h-4 text-red-400 flex-shrink-0" />
        <span className="text-sm text-[#6B7280]">{text}</span>
      </div>
    )
  }
  return (
    <div className="flex items-center gap-1.5">
      <Minus className="w-4 h-4 text-[#374151] flex-shrink-0" />
      <span className="text-sm text-[#6B7280]">{text}</span>
    </div>
  )
}

export function Comparison() {
  return (
    <section className="py-16 sm:py-24 bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="section-tag mb-4 inline-flex">Comparativo</span>
          <h2 className="section-heading-dark mb-4">
            Por que o Site em 1 Dia é a{' '}
            <span className="text-[#FF6B00]">melhor escolha para você</span>
          </h2>
          <p className="section-subheading-dark mx-auto text-center">
            Cada opção tem seu momento. Para quem quer começar rápido, com qualidade e sem gastar
            muito, a escolha é clara.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          {/* Desktop table */}
          <div className="hidden md:grid grid-cols-4 gap-0 rounded-2xl overflow-hidden border border-white/8">
            <div className="bg-[#0D0D0F] p-4 border-b border-r border-white/8">
              <span className="text-xs text-[#6B7280] font-medium uppercase tracking-wider">Critério</span>
            </div>
            {COLUMNS.map((col) => (
              <div
                key={col.name}
                className={`p-4 border-b border-r last:border-r-0 border-white/8 ${
                  col.highlight ? 'bg-[#FF6B00]' : 'bg-[#0D0D0F]'
                }`}
              >
                <div className="flex flex-col items-start gap-2">
                  {col.tag && (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF6B00] bg-white px-2 py-0.5 rounded-full">
                      {col.tag}
                    </span>
                  )}
                  <span className={`text-sm font-bold font-display ${col.highlight ? 'text-white' : 'text-[#F7F7F5]'}`}>
                    {col.name}
                  </span>
                </div>
              </div>
            ))}

            {CRITERIA.map((criterion, rowIndex) => (
              <Fragment key={rowIndex}>
                <div className="bg-[#09090B] p-4 border-b border-r border-white/8 last-of-type:border-b-0 flex items-center">
                  <span className="text-sm text-[#6B7280] font-medium">{criterion.label}</span>
                </div>
                {COLUMNS.map((col) => (
                  <div
                    key={`${col.name}-${rowIndex}`}
                    className={`p-4 border-b border-r last:border-r-0 border-white/8 flex items-center ${
                      col.highlight ? 'bg-[#FF6B00]/90' : 'bg-[#09090B]/80'
                    }`}
                  >
                    <ValueCell
                      type={col.values[rowIndex].type}
                      text={col.values[rowIndex].text}
                      highlight={col.highlight}
                    />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>

          {/* Mobile stacked cards — Site em 1 Dia first */}
          <div className="md:hidden flex flex-col gap-4">
            {[COLUMNS[1], COLUMNS[0], COLUMNS[2]].map((col) => (
              <div
                key={col.name}
                className={`rounded-2xl border p-5 ${
                  col.highlight
                    ? 'border-[#FF6B00] bg-[#FF6B00]'
                    : 'border-white/8 bg-[#111113]'
                }`}
              >
                <div className="mb-4">
                  {col.tag && (
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF6B00] bg-white px-2 py-0.5 rounded-full mb-2 inline-block">
                      {col.tag}
                    </span>
                  )}
                  <h3 className={`font-display text-base font-bold ${col.highlight ? 'text-white' : 'text-[#F7F7F5]'}`}>
                    {col.name}
                  </h3>
                </div>
                <div className="flex flex-col gap-3">
                  {CRITERIA.map((criterion, i) => (
                    <div key={i} className={`border-b pb-3 last:border-0 last:pb-0 ${col.highlight ? 'border-white/20' : 'border-white/8'}`}>
                      <div className={`text-xs mb-1 ${col.highlight ? 'text-white/70' : 'text-[#6B7280]'}`}>{criterion.label}</div>
                      <ValueCell type={col.values[i].type} text={col.values[i].text} highlight={col.highlight} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-10 text-center" delay={0.2}>
          <PreQualificationTrigger className="btn-primary">
            Quero o Site em 1 Dia →
          </PreQualificationTrigger>
        </AnimatedSection>
      </div>
    </section>
  )
}
