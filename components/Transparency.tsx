import { ShieldCheck, Clock, FileCheck, AlertCircle } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection'

const ITEMS = [
  {
    icon: Clock,
    title: 'O prazo de 24h é real, mas tem condições',
    description:
      'O prazo começa após confirmação do pagamento E o envio completo do briefing com todos os materiais (logo, fotos, textos base). Sem o briefing completo, o prazo não começa.',
  },
  {
    icon: FileCheck,
    title: '1 rodada de ajustes, sem abusos',
    description:
      'O ajuste incluso é para correções simples de conteúdo ou pequenas mudanças de layout. Reprojetar ou adicionar funcionalidades extras não está incluso — pode ser orçado à parte.',
  },
  {
    icon: AlertCircle,
    title: 'O que não está incluso',
    description:
      'Loja virtual, sistema de agendamento, área de membros, integração com CRM, blog e múltiplas páginas não fazem parte deste plano. Para projetos assim, entre em contato.',
  },
  {
    icon: ShieldCheck,
    title: 'Sem promessa exagerada',
    description:
      'Não garantimos posicionamento no Google, vendas imediatas ou resultado de anúncios. Entregamos um site profissional, bonito e funcional — o resto depende da sua estratégia.',
  },
]

export function Transparency() {
  return (
    <section className="py-16 sm:py-24 bg-[#09090B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="section-tag mb-4 inline-flex">
            <ShieldCheck className="w-3.5 h-3.5" /> Transparência total
          </span>
          <h2 className="section-heading-dark mb-4">
            Sem promessa exagerada.{' '}
            <span className="text-[#FF6B00]">Sem letras miúdas.</span>
          </h2>
          <p className="section-subheading-dark mx-auto text-center">
            Você sabe exatamente o que está comprando. Honestidade é o melhor negócio — para os dois lados.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-5" staggerDelay={0.1}>
          {ITEMS.map(({ icon: Icon, title, description }) => (
            <StaggerItem key={title}>
              <div className="bg-[#111113] border border-white/8 hover:border-[#FF6B00]/20 rounded-2xl p-6 h-full flex gap-4 transition-all duration-200">
                <div className="icon-box-orange-dark flex-shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-[#FF6B00]" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-[#F7F7F5] mb-2">{title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
