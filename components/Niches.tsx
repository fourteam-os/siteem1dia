import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection'

const NICHES = [
  { emoji: '🏥', label: 'Clínicas e consultórios' },
  { emoji: '👓', label: 'Óticas' },
  { emoji: '💅', label: 'Estéticas e salões' },
  { emoji: '🔧', label: 'Oficinas mecânicas' },
  { emoji: '🍕', label: 'Restaurantes e lanchonetes' },
  { emoji: '🎨', label: 'Pintores e reformas' },
  { emoji: '🏗️', label: 'Construtoras e pedreiros' },
  { emoji: '⚡', label: 'Eletricistas e encanadores' },
  { emoji: '🏪', label: 'Lojas locais' },
  { emoji: '💻', label: 'Profissionais autônomos' },
  { emoji: '🐾', label: 'Pet shops e veterinários' },
  { emoji: '📸', label: 'Fotógrafos e designers' },
]

export function Niches() {
  return (
    <section className="py-14 sm:py-20 bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <span className="section-tag mb-4 inline-flex">Para quem é</span>
          <h2 className="section-heading-dark mb-4">
            Feito para quem quer{' '}
            <span className="text-[#FF6B00]">começar do jeito certo</span>
          </h2>
          <p className="section-subheading-dark mx-auto text-center">
            Se você tem um negócio local, presta serviços ou quer ter uma presença profissional na
            internet, o Site em 1 Dia é para você.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
          staggerDelay={0.04}
        >
          {NICHES.map(({ emoji, label }) => (
            <StaggerItem key={label}>
              <div className="flex items-center gap-3 bg-[#111113] hover:bg-[#1A1A1C] border border-white/8 hover:border-[#FF6B00]/25 rounded-xl px-4 py-3.5 transition-all duration-200 group cursor-default">
                <span className="text-xl">{emoji}</span>
                <span className="text-xs sm:text-sm text-[#6B7280] group-hover:text-[#F7F7F5] font-medium transition-colors leading-snug">
                  {label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
