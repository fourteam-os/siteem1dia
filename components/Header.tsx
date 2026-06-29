'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { WHATSAPP_URL } from '@/lib/constants'

const NAV_LINKS = [
  { label: 'Soluções', href: '#incluso' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Exemplos', href: '#exemplos' },
  { label: 'FAQ', href: '#faq' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090B]/95 backdrop-blur-md border-b border-white/8 shadow-[0_1px_20px_rgba(0,0,0,0.6)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" onClick={closeMenu} className="flex-shrink-0">
            <Logo variant="light" size="sm" />
          </a>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#6B7280] hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden md:block">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#FF8C33] text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(255,107,0,0.35)] hover:shadow-[0_0_28px_rgba(255,107,0,0.55)] hover:-translate-y-px"
            >
              Quero meu site
              <span className="text-white/80">→</span>
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-[#6B7280] hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 border-t border-white/8 bg-[#09090B]/98 backdrop-blur-md ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-[#6B7280] hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 pt-3 border-t border-white/8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-[#FF8C33] text-white font-bold py-3.5 rounded-xl transition-colors"
            >
              Quero meu site agora →
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
