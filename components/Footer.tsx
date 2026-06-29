import { Logo } from './Logo'
import { WHATSAPP_URL } from '@/lib/constants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#09090B] border-t border-white/8">
      {/* Mobile sticky CTA padding — accounts for fixed WhatsApp bar + safe area */}
      <div className="md:hidden h-24" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Logo variant="light" size="md" />
            <p className="text-sm text-[#6B7280] text-center md:text-left">
              Seu negócio online antes de amanhã.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              { label: 'Soluções', href: '#incluso' },
              { label: 'Como funciona', href: '#como-funciona' },
              { label: 'Exemplos', href: '#exemplos' },
              { label: 'FAQ', href: '#faq' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#6B7280] hover:text-[#F7F7F5] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#FF8C33] text-white font-bold text-sm px-5 py-3 rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(255,107,0,0.3)]"
            >
              Quero meu site agora →
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#6B7280] hover:text-[#22C55E] transition-colors"
            >
              ou falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#374151]">
            &copy; {year} Site em 1 Dia. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 text-xs text-[#374151]">
            <span>Rápida · Confiável · Moderna · Objetiva · Profissional</span>
          </div>
          <p className="text-xs text-[#374151]">
            Pagamento único pela criação. Domínio e hospedagem à parte.
          </p>
        </div>
      </div>
    </footer>
  )
}
