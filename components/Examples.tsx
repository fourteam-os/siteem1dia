import { ArrowRight } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection'
import { PreQualificationTrigger } from './PreQualificationTrigger'

const EXAMPLES = [
  { emoji: '🏥', niche: 'Clínica Estética', headline: 'Realce sua beleza com quem entende do assunto', color: 'border-pink-500/20 hover:border-pink-500/40' },
  { emoji: '🔧', niche: 'Oficina Mecânica', headline: 'Seu carro em boas mãos — diagnóstico em 1h', color: 'border-blue-500/20 hover:border-blue-500/40' },
  { emoji: '👓', niche: 'Ótica', headline: 'Enxergue o mundo com estilo e qualidade', color: 'border-cyan-500/20 hover:border-cyan-500/40' },
  { emoji: '🍕', niche: 'Restaurante', headline: 'Sabor de verdade para a sua família toda', color: 'border-[#FF6B00]/20 hover:border-[#FF6B00]/50' },
  { emoji: '🎨', niche: 'Pintor / Reforma', headline: 'Transforme seu espaço com resultado garantido', color: 'border-yellow-500/20 hover:border-yellow-500/40' },
  { emoji: '⚡', niche: 'Prestador de Serviço', headline: 'Serviço rápido, confiável e com garantia', color: 'border-green-500/20 hover:border-green-500/40' },
]

export function Examples() {
  return (
    <section id="exemplos" className="py-16 sm:py-24 bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="section-tag mb-4 inline-flex">Exemplos por nicho</span>
          <h2 className="section-heading-dark mb-4">
            Exemplos de páginas para{' '}
            <span className="text-[#FF6B00]">diferentes tipos de negócio</span>
          </h2>
          <p className="section-subheading-dark mx-auto text-center">
            Cada página é criada especificamente para o seu segmento. Veja como poderia ficar o seu.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.07}>
          {EXAMPLES.map((example) => (
            <StaggerItem key={example.niche}>
              <div className={`group relative bg-[#111113] rounded-2xl border ${example.color} p-6 cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)]`}>
                {/* Mock browser preview */}
                <div className="bg-[#09090B] rounded-xl border border-white/8 overflow-hidden mb-5 shadow-card-dark">
                  <div className="bg-[#1A1A1C] px-3 py-2 flex items-center gap-2 border-b border-white/8">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-[#374151]" />
                      <div className="w-2 h-2 rounded-full bg-[#374151]" />
                      <div className="w-2 h-2 rounded-full bg-[#374151]" />
                    </div>
                    <div className="flex-1 bg-[#09090B]/60 rounded px-2 py-0.5 text-[9px] text-[#6B7280] font-mono">
                      seunegocio.com.br
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="text-2xl mb-2">{example.emoji}</div>
                    <div className="h-2.5 w-5/6 bg-white/20 rounded mb-1.5" />
                    <div className="h-2 w-3/4 bg-white/10 rounded mb-3" />
                    <div className="h-6 w-24 bg-[#FF6B00]/60 rounded-lg" />
                  </div>
                </div>

                {/* Info */}
                <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest">{example.niche}</span>
                <h3 className="text-sm font-semibold text-[#F7F7F5] mt-1">{example.headline}</h3>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="mt-12 text-center" delay={0.2}>
          <PreQualificationTrigger className="btn-primary">
            Ver exemplos pelo WhatsApp
            <ArrowRight className="w-4 h-4" />
          </PreQualificationTrigger>
          <p className="text-xs text-[#6B7280] mt-3">
            Mostre seu negócio e veja como o seu site poderia ficar.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
