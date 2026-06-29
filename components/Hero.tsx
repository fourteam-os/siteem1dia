'use client'

import { motion } from 'framer-motion'
import { Zap, CreditCard, Headphones } from 'lucide-react'
import Image from 'next/image'
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

          {/* RIGHT — device mockup — desktop */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute -inset-8 bg-[#FF6B00]/6 rounded-3xl blur-2xl" />
            <Image
              src="/hero-mockup.png"
              alt="Exemplo de site profissional criado em 1 dia"
              width={620}
              height={480}
              className="relative w-full max-w-[580px] drop-shadow-2xl animate-float"
              priority
            />
          </motion.div>
        </div>

        {/* Mockup — tablet e mobile */}
        <motion.div
          className="lg:hidden mt-8 flex justify-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Image
            src="/hero-mockup.png"
            alt="Exemplo de site profissional criado em 1 dia"
            width={560}
            height={430}
            className="w-full max-w-[480px] sm:max-w-[540px] drop-shadow-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}
