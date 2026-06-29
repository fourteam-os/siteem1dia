'use client'

import { motion } from 'framer-motion'
import { Zap, CreditCard, Headphones } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/constants'

const SEALS = [
  { icon: Zap, text: 'Entrega em até 24h' },
  { icon: CreditCard, text: 'Pagamento único' },
  { icon: Headphones, text: 'Suporte humanizado' },
]

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center pt-20 pb-12 sm:pb-16 bg-[#09090B] overflow-hidden">
      {/* Circuit background */}
      <div className="absolute inset-0 bg-circuit-pattern bg-circuit pointer-events-none opacity-100" />

      {/* Orange radial glow — top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#FF6B00]/8 rounded-full blur-3xl pointer-events-none" />

      {/* Orange glow — bottom right (behind mockup) */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF6B00]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT — copy */}
          <div>
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="section-tag mb-6 inline-flex">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-pulse" />
                Para negócios que não podem esperar
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-display text-[2.4rem] sm:text-5xl lg:text-[3.2rem] xl:text-6xl font-bold text-[#F7F7F5] leading-[1.1] tracking-tight mb-5"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Seu site profissional{' '}
              <span className="text-[#FF6B00]">no ar em até 24h</span>{' '}
              por R$497.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-[#6B7280] text-lg leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Uma página moderna, responsiva e pronta para receber contatos pelo WhatsApp —
              sem burocracia e sem parecer improvisada.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
              >
                Quero meu site agora →
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base"
              >
                <WhatsAppIcon />
                Falar no WhatsApp
              </a>
            </motion.div>

            {/* Seals */}
            <motion.div
              className="flex flex-wrap gap-x-5 gap-y-2.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              {SEALS.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-xs sm:text-sm text-[#6B7280]">
                  <Icon className="w-4 h-4 text-[#FF6B00]" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — device mockup */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Glow behind devices */}
            <div className="absolute -inset-8 bg-[#FF6B00]/6 rounded-3xl blur-2xl" />

            {/* Desktop mockup */}
            <div className="relative rounded-xl border border-white/10 overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.7)] bg-[#111113] animate-float">
              {/* Browser chrome */}
              <div className="bg-[#1A1A1C] px-4 py-3 flex items-center gap-3 border-b border-white/8">
                <div className="flex gap-1.5 flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]/70" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/70" />
                  <div className="w-3 h-3 rounded-full bg-[#28CA41]/70" />
                </div>
                <div className="flex-1 bg-[#09090B]/60 rounded-md px-3 py-1.5 text-xs text-[#6B7280] font-mono flex items-center gap-1.5">
                  <span className="text-[#FF6B00] text-[10px]">●</span>
                  clinicavitalis.com.br
                </div>
              </div>

              {/* Website content */}
              <div className="bg-[#09090B]">
                {/* Nav */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-white/5">
                  <div className="h-4 w-28 bg-white/20 rounded" />
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-10 bg-white/10 rounded" />
                    <div className="h-3 w-14 bg-white/10 rounded" />
                    <div className="h-7 w-24 bg-[#FF6B00]/80 rounded-lg" />
                  </div>
                </div>

                {/* Hero */}
                <div className="px-5 py-6 bg-gradient-to-br from-[#111113] to-[#09090B]">
                  <div className="h-2.5 w-36 bg-[#FF6B00]/40 rounded-full mb-3" />
                  <div className="h-5 w-4/5 bg-white/30 rounded-lg mb-2" />
                  <div className="h-5 w-3/5 bg-white/20 rounded-lg mb-4" />
                  <div className="h-3 w-full bg-white/10 rounded mb-1.5" />
                  <div className="h-3 w-4/5 bg-white/8 rounded mb-5" />
                  <div className="flex gap-2.5">
                    <div className="h-9 w-32 bg-[#FF6B00]/80 rounded-xl flex items-center justify-center">
                      <div className="h-2.5 w-20 bg-white/60 rounded" />
                    </div>
                    <div className="h-9 w-28 bg-[#22C55E]/60 rounded-xl flex items-center justify-center">
                      <div className="h-2.5 w-16 bg-white/50 rounded" />
                    </div>
                  </div>
                </div>

                {/* Content cards */}
                <div className="px-5 py-4 grid grid-cols-3 gap-3 bg-[#111113]/50">
                  {['Consultas', 'Exames', 'Telemedicina'].map((item) => (
                    <div key={item} className="bg-[#1A1A1C] rounded-lg p-3 border border-white/8">
                      <div className="w-5 h-5 bg-[#FF6B00]/30 rounded mb-2" />
                      <div className="h-2.5 w-full bg-white/20 rounded mb-1.5" />
                      <div className="h-2 w-3/4 bg-white/10 rounded" />
                    </div>
                  ))}
                </div>

                {/* CTA bar */}
                <div className="px-5 py-3.5 border-t border-white/5 flex items-center justify-between bg-[#09090B]">
                  <div>
                    <div className="h-2.5 w-32 bg-white/15 rounded mb-1.5" />
                    <div className="h-2 w-24 bg-white/8 rounded" />
                  </div>
                  <div className="h-8 w-28 bg-[#22C55E]/60 rounded-lg" />
                </div>
              </div>
            </div>

            {/* Phone mockup */}
            <div
              className="absolute -bottom-5 -right-6 w-[110px] shadow-2xl animate-float"
              style={{ animationDelay: '1.5s' }}
            >
              <div className="rounded-2xl border-2 border-white/10 overflow-hidden bg-[#111113]">
                <div className="bg-[#1A1A1C] py-2 flex justify-center">
                  <div className="w-8 h-1 bg-[#374151] rounded-full" />
                </div>
                <div className="bg-[#09090B] p-2">
                  <div className="h-2 w-full bg-white/20 rounded mb-1.5" />
                  <div className="h-9 bg-gradient-to-b from-[#1A1A1C] to-[#09090B] rounded mb-2 flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#FF6B00]/40 rounded" />
                  </div>
                  <div className="h-2 w-3/4 bg-white/12 rounded mb-1" />
                  <div className="h-2 w-1/2 bg-white/8 rounded mb-2" />
                  <div className="h-6 bg-[#22C55E]/50 rounded-xl" />
                </div>
                <div className="bg-[#1A1A1C] py-2 flex justify-center">
                  <div className="w-5 h-5 border border-[#374151] rounded-full" />
                </div>
              </div>
            </div>

            {/* Badge flutuante */}
            <div className="absolute -top-4 -left-4 bg-[#111113] border border-[#FF6B00]/25 rounded-xl px-3.5 py-2.5 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#FF6B00]/20 border border-[#FF6B00]/30 flex items-center justify-center">
                  <Zap className="w-3 h-3 text-[#FF6B00]" />
                </div>
                <span className="text-xs text-[#F7F7F5] font-semibold">Site publicado</span>
              </div>
              <p className="text-[10px] text-[#6B7280] mt-0.5 ml-7">Entregue em 18h</p>
            </div>
          </motion.div>
        </div>

        {/* Mobile mockup — hidden on phones, visible on tablets only */}
        <motion.div
          className="hidden sm:block lg:hidden mt-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="rounded-xl border border-white/10 overflow-hidden shadow-2xl bg-[#111113]">
            <div className="bg-[#1A1A1C] px-4 py-2.5 flex items-center gap-2.5 border-b border-white/8">
              <div className="flex gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28CA41]/70" />
              </div>
              <div className="flex-1 bg-[#09090B]/50 rounded px-2 py-1 text-xs text-[#6B7280] font-mono">
                seunegocio.com.br
              </div>
            </div>
            <div className="bg-[#09090B] p-4">
              <div className="h-2.5 w-24 bg-[#FF6B00]/30 rounded-full mb-3" />
              <div className="h-4 w-5/6 bg-white/25 rounded mb-2" />
              <div className="h-4 w-3/4 bg-white/15 rounded mb-4" />
              <div className="flex gap-2">
                <div className="h-9 w-32 bg-[#FF6B00]/70 rounded-xl" />
                <div className="h-9 w-28 bg-[#22C55E]/50 rounded-xl" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
