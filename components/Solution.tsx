import { TrendingUp, Smartphone, MessageCircle } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection'

const PILLARS = [
  {
    icon: TrendingUp,
    title: 'Saia do improviso',
    description:
      'Pare de depender de bios de Instagram e links de WhatsApp como endereço na internet. Tenha um espaço profissional que representa sua empresa de verdade.',
  },
  {
    icon: Smartphone,
    title: 'Passe credibilidade',
    description:
      'Clientes pesquisam antes de contratar. Um site próprio muda a percepção de valor da sua empresa e diferencia você de quem não tem presença digital.',
  },
  {
    icon: MessageCircle,
    title: 'Receba contatos pelo WhatsApp',
    description:
      'Seu site apresenta sua empresa e já direciona o visitante para o WhatsApp com um clique. Simples, direto e eficiente para fechar negócios.',
  },
]

export function Solution() {
  return (
    <section className="py-16 sm:py-24 bg-[#F7F7F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="section-tag-light mb-4 inline-flex">A solução</span>
          <h2 className="section-heading-light mb-4">
            Presença digital que{' '}
            <span className="text-[#FF6B00]">funciona de verdade</span>
          </h2>
          <p className="section-subheading-light mx-auto text-center">
            Um site profissional bem feito trabalha por você — apresenta sua empresa, gera confiança
            e transforma visitantes em contatos no WhatsApp.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
          {PILLARS.map(({ icon: Icon, title, description }) => (
            <StaggerItem key={title}>
              <div className="card-light card-light-hover p-7 h-full group">
                <div className="icon-box-orange mb-5 group-hover:bg-[#FF6B00]/15 group-hover:border-[#FF6B00]/30 transition-colors">
                  <Icon className="w-5 h-5 text-[#FF6B00]" />
                </div>
                <h3 className="font-display text-base font-bold text-[#09090B] mb-3">{title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-4">{description}</p>
                <span className="text-xs font-bold text-[#FF6B00]">Saiba mais →</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
