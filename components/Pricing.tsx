import { Check, Clock, ArrowRight } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'
import { WHATSAPP_URL } from '@/lib/constants'

const ITEMS = [
  'Site one page profissional e exclusivo',
  'Copy base organizada (seu conteúdo estruturado)',
  'Design responsivo — perfeito no celular',
  'Botão direto para WhatsApp com mensagem automática',
  'Seções essenciais: serviços, sobre, contato',
  '1 ajuste simples de conteúdo ou layout incluso',
  'Orientação sobre como publicar no seu domínio',
]

export function Pricing() {
  return (
    <section className="py-16 sm:py-24 bg-[#F7F7F5]">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <span className="section-tag-light mb-4 inline-flex">Investimento</span>
          <h2 className="section-heading-light mb-4">
            Um preço justo para{' '}
            <span className="text-[#FF6B00]">um resultado profissional</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          {/* Card premium */}
          <div className="relative rounded-3xl overflow-hidden shadow-[0_16px_64px_rgba(255,107,0,0.2)]">
            {/* Top orange bar */}
            <div className="h-1.5 bg-[#FF6B00] w-full" />

            <div className="bg-[#09090B] px-5 sm:px-8 md:px-10 py-7 sm:py-8 relative">
              {/* Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-40 bg-[#FF6B00]/8 rounded-full blur-3xl pointer-events-none" />

              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
                      Plano Site em 1 Dia
                    </span>
                    <div className="mt-3 flex items-end gap-2">
                      <span className="font-display text-[2.8rem] sm:text-5xl md:text-6xl font-bold text-[#FF6B00]">R$497</span>
                      <span className="text-[#6B7280] text-sm mb-2">pagamento único</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                    Até 24h
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#6B7280] text-sm leading-relaxed mb-6 border-b border-white/8 pb-6">
                  Site one page profissional entregue em até 24h após pagamento confirmado e briefing
                  completo enviado.
                </p>

                {/* Checklist */}
                <ul className="flex flex-col gap-3 mb-8">
                  {ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#FF6B00]" />
                      </div>
                      <span className="text-sm text-[#F7F7F5]">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full bg-[#FF6B00] hover:bg-[#FF8C33] text-white font-bold text-base py-4 px-6 rounded-2xl transition-all duration-200 shadow-[0_4px_24px_rgba(255,107,0,0.4)] hover:shadow-[0_4px_32px_rgba(255,107,0,0.6)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  Quero meu site agora
                  <ArrowRight className="w-5 h-5" />
                </a>

                <p className="text-center text-xs text-[#6B7280] mt-3">
                  Vagas limitadas por dia para manter o prazo de 24h de entrega.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-6 text-center" delay={0.2}>
          <p className="text-xs text-[#6B7280] leading-relaxed">
            Pagamento único de criação da página. Domínio (ex: seusite.com.br) e hospedagem não estão
            inclusos — podem ser contratados separadamente. Manutenção futura sob consulta.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
