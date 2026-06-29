import { Search, Instagram, AlertTriangle, ArrowRight } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection'
import { PreQualificationTrigger } from './PreQualificationTrigger'

const PROBLEMS = [
  {
    icon: Search,
    title: 'O cliente pesquisa antes de chamar',
    description:
      'Mais de 70% das pessoas pesquisam na internet antes de contratar qualquer serviço. Sem um site profissional, você perde para quem aparece primeiro.',
  },
  {
    icon: Instagram,
    title: 'Instagram e WhatsApp não substituem um site',
    description:
      'As redes sociais são ótimas para relacionamento, mas não passam a mesma credibilidade de um site próprio. O cliente escolhe quem parece mais estabelecido.',
  },
  {
    icon: AlertTriangle,
    title: 'Parece improvisado — e isso afasta cliente',
    description:
      'Empresas sem site próprio transmitem a sensação de algo temporário. Isso impacta diretamente a decisão de compra, especialmente em serviços de maior valor.',
  },
]

export function Problem() {
  return (
    <section className="py-16 sm:py-24 bg-[#09090B] relative overflow-hidden">
      {/* Orange tint */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF6B00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="section-tag mb-4 inline-flex">
            <AlertTriangle className="w-3.5 h-3.5" /> O problema
          </span>
          <h2 className="section-heading-dark mb-4">
            Seu cliente pesquisa antes de chamar.{' '}
            <span className="text-[#FF6B00]">O que ele encontra hoje?</span>
          </h2>
          <p className="section-subheading-dark mx-auto text-center">
            Depender só de Instagram e WhatsApp em 2026 é jogar clientes fora. A falta de presença
            digital custa mais caro do que você imagina.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
          {PROBLEMS.map(({ icon: Icon, title, description }) => (
            <StaggerItem key={title}>
              <div className="bg-[#111113] border border-white/8 hover:border-[#FF6B00]/20 rounded-2xl p-7 h-full transition-all duration-300 group">
                <div className="icon-box-orange-dark mb-5 group-hover:bg-[#FF6B00]/20 group-hover:border-[#FF6B00]/40 transition-colors">
                  <Icon className="w-5 h-5 text-[#FF6B00]" />
                </div>
                <h3 className="font-display text-base font-bold text-[#F7F7F5] mb-3">{title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="mt-14 text-center" delay={0.2}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <p className="text-[#6B7280] text-sm">
              A boa notícia: resolver isso é mais rápido e barato do que você imagina.
            </p>
            <PreQualificationTrigger className="inline-flex items-center gap-2 text-sm font-bold text-[#FF6B00] hover:text-[#FF8C33] transition-colors">
              Ver como funciona <ArrowRight className="w-4 h-4" />
            </PreQualificationTrigger>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
