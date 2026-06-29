import { LayoutTemplate, FileText, Smartphone, MessageCircle, Layers, RefreshCw, Zap } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection'
import { WHATSAPP_URL } from '@/lib/constants'

const ITEMS = [
  {
    icon: LayoutTemplate,
    title: 'Site one page profissional',
    description: 'Design moderno, exclusivo e pensado para o seu segmento. Sem templates genéricos.',
    highlight: false,
  },
  {
    icon: FileText,
    title: 'Copy organizada',
    description: 'Textos claros e persuasivos com base no seu briefing. Você não precisa saber escrever.',
    highlight: false,
  },
  {
    icon: Smartphone,
    title: 'Design responsivo',
    description: 'Perfeito em celular, tablet e computador. A maioria dos seus clientes acessa pelo celular.',
    highlight: false,
  },
  {
    icon: MessageCircle,
    title: 'Botão direto para WhatsApp',
    description: 'Cada seção conduz o visitante a entrar em contato pelo WhatsApp com um clique.',
    highlight: true,
  },
  {
    icon: Layers,
    title: 'Seções essenciais',
    description: 'Hero, serviços, sobre, depoimentos (se tiver), localização e contato — tudo estruturado.',
    highlight: false,
  },
  {
    icon: RefreshCw,
    title: '1 ajuste simples incluso',
    description: 'Depois de receber o site, você tem direito a 1 rodada de ajustes no conteúdo ou layout.',
    highlight: false,
  },
  {
    icon: Zap,
    title: 'Entrega em até 24h',
    description: 'O prazo começa após confirmação do pagamento e envio completo do briefing com materiais.',
    highlight: true,
  },
]

export function Included() {
  return (
    <section id="incluso" className="py-16 sm:py-24 bg-[#F7F7F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="section-tag-light mb-4 inline-flex">Tudo que você recebe</span>
          <h2 className="section-heading-light mb-4">
            O que está incluso no{' '}
            <span className="text-[#FF6B00]">plano R$497</span>
          </h2>
          <p className="section-subheading-light mx-auto text-center">
            Tudo o que você precisa para ter uma presença profissional funcionando no mesmo dia.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.07}>
          {ITEMS.map(({ icon: Icon, title, description, highlight }) => (
            <StaggerItem key={title}>
              <div
                className={`relative h-full rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-0.5 ${
                  highlight
                    ? 'bg-[#FF6B00] border-[#FF6B00] shadow-[0_8px_32px_rgba(255,107,0,0.3)]'
                    : 'card-light card-light-hover'
                }`}
              >
                {highlight && (
                  <div className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-white bg-white/20 px-2 py-0.5 rounded-full">
                    destaque
                  </div>
                )}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                    highlight
                      ? 'bg-white/20'
                      : 'bg-[#FF6B00]/10 border border-[#FF6B00]/20'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${highlight ? 'text-white' : 'text-[#FF6B00]'}`} />
                </div>
                <h3 className={`font-display text-sm font-bold mb-2 ${highlight ? 'text-white' : 'text-[#09090B]'}`}>
                  {title}
                </h3>
                <p className={`text-xs leading-relaxed ${highlight ? 'text-white/80' : 'text-[#6B7280]'}`}>
                  {description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="mt-10 text-center" delay={0.2}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Quero tudo isso por R$497 →
          </a>
          <p className="text-xs text-[#6B7280] mt-3">
            Domínio, hospedagem e manutenção são contratados separadamente conforme sua necessidade.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
