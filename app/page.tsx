import { PreQualificationProvider } from '@/components/PreQualificationModal'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Solution } from '@/components/Solution'
import { Niches } from '@/components/Niches'
import { Problem } from '@/components/Problem'
import { Included } from '@/components/Included'
import { HowItWorks } from '@/components/HowItWorks'
import { Comparison } from '@/components/Comparison'
import { Examples } from '@/components/Examples'
import { Pricing } from '@/components/Pricing'
import { Transparency } from '@/components/Transparency'
import { FAQ } from '@/components/FAQ'
import { FinalCTA } from '@/components/FinalCTA'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <PreQualificationProvider>
      <Header />
      <main className="bg-zinc-950">
        <Hero />
        <Solution />
        <Niches />
        <Problem />
        <Included />
        <HowItWorks />
        <Comparison />
        <Examples />
        <Pricing />
        <Transparency />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </PreQualificationProvider>
  )
}
