import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import { MetaPixelTracker } from '@/components/MetaPixelTracker'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Site em 1 Dia — Seu site profissional no ar em até 24h por R$497',
  description:
    'Uma página moderna, responsiva e pronta para receber contatos pelo WhatsApp — sem burocracia e sem parecer improvisada. Entrega em até 24h após pagamento confirmado e briefing completo.',
  keywords: [
    'criação de site',
    'site profissional',
    'site barato',
    'site para empresa',
    'site one page',
    'site em 1 dia',
    'site para negócio local',
    'landing page',
  ],
  authors: [{ name: 'Site em 1 Dia' }],
  creator: 'Site em 1 Dia',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Site em 1 Dia — Seu site profissional no ar em até 24h por R$497',
    description:
      'Uma página moderna, responsiva e pronta para receber contatos pelo WhatsApp — sem burocracia e sem parecer improvisada.',
    siteName: 'Site em 1 Dia',
    // images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Site em 1 Dia — Seu site profissional no ar em até 24h por R$497',
    description:
      'Uma página moderna, responsiva e pronta para receber contatos pelo WhatsApp.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head />
      <body className={`${inter.className} antialiased`}>
        {children}
        <MetaPixelTracker />
        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init','2544241792678694');
              fbq('track','PageView');
            `,
          }}
        />
        {/* Google Analytics — adicione seu ID quando tiver
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <Script id="gtag-init" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
          window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
          gtag('js',new Date());gtag('config','G-XXXXXXXXXX');
        `}} />
        */}
      </body>
    </html>
  )
}
