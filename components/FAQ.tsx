'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'
import { WHATSAPP_URL } from '@/lib/constants'

const FAQS = [
  {
    question: 'O site fica pronto mesmo em 24h?',
    answer: 'Sim — o prazo de 24h é real. Mas ele começa após duas condições: confirmação do pagamento E envio completo do briefing com todos os materiais necessários (logo, fotos, textos base). Se o briefing chegar incompleto, o prazo começa somente quando você enviar tudo.',
  },
  {
    question: 'O plano de R$497 inclui o quê?',
    answer: 'Inclui: site one page profissional e exclusivo, copy base organizada, design responsivo, botão direto para WhatsApp com mensagem automática, seções essenciais e 1 rodada de ajustes simples. Não inclui domínio, hospedagem ou manutenção mensal — esses itens podem ser contratados à parte.',
  },
  {
    question: 'O que é um site one page?',
    answer: 'Um site one page é uma página única onde todo o conteúdo fica em seções que o visitante rola para baixo. É perfeito para negócios locais e prestadores de serviço porque foca no que importa: apresentar a empresa e gerar contato.',
  },
  {
    question: 'Posso usar o link do site na bio do Instagram?',
    answer: 'Sim! Esse é um dos principais usos. Substituir o link de bio do Instagram pelo link do seu site profissional dá muito mais credibilidade do que um link de WhatsApp direto.',
  },
  {
    question: 'O site funciona bem no celular?',
    answer: 'Sim, 100%. O design é mobile-first — construído pensando primeiro no celular, onde a maioria dos seus clientes vai acessar. Funciona perfeitamente em Android e iPhone.',
  },
  {
    question: 'Domínio e hospedagem estão inclusos?',
    answer: 'Não estão inclusos no plano de R$497. Domínio (ex: seusite.com.br) custa em média R$40/ano. Hospedagem pode ser gratuita em plataformas como Vercel. Orientamos você sobre a melhor opção para o seu caso.',
  },
  {
    question: 'Posso pedir alterações depois que receber?',
    answer: 'Sim. Está inclusa 1 rodada de ajustes simples — mudanças de texto, cor, ordem de seções ou pequenos detalhes. Alterações maiores ou adição de seções novas são orçadas separadamente.',
  },
  {
    question: 'Vocês fazem loja virtual?',
    answer: 'Não é o escopo deste plano. Site em 1 Dia é focado em páginas de apresentação para negócios locais e prestadores de serviço. Para e-commerce ou sistema de agendamento, entre em contato para indicarmos o melhor caminho.',
  },
  {
    question: 'Preciso ter logo e fotos prontos?',
    answer: 'Ter logo facilita muito, mas não é obrigatório — podemos usar uma versão tipográfica simples. Fotos profissionais valorizam o resultado, mas se não tiver, usamos ícones e elementos visuais adequados.',
  },
  {
    question: 'Esse site vai aparecer no Google?',
    answer: 'O site é construído com boas práticas de SEO básico — título, descrição e estrutura adequados. Porém, não garantimos posicionamento nos resultados de busca. SEO é um trabalho contínuo que depende de muitos fatores.',
  },
  {
    question: 'Posso anunciar no Meta Ads ou Google Ads usando esse site?',
    answer: 'Sim! O site é totalmente compatível com campanhas de tráfego pago. Disponibilizamos espaço preparado para o Meta Pixel e Google Analytics. Você pode usar o site como página de destino nos seus anúncios.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#E5E7EB] last:border-0">
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm md:text-base font-semibold text-[#09090B] group-hover:text-[#FF6B00] transition-colors pr-4 font-display">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#6B7280] flex-shrink-0 mt-0.5 transition-all duration-300 ${
            open ? 'rotate-180 text-[#FF6B00]' : ''
          }`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-64 pb-5' : 'max-h-0'}`}>
        <p className="text-sm text-[#6B7280] leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#F7F7F5]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="section-tag-light mb-4 inline-flex">Dúvidas frequentes</span>
          <h2 className="section-heading-light mb-4">
            Perguntas <span className="text-[#FF6B00]">frequentes</span>
          </h2>
          <p className="section-subheading-light mx-auto text-center">
            Respondemos as principais dúvidas antes de você decidir. Se tiver mais alguma,
            é só chamar no WhatsApp.
          </p>
        </AnimatedSection>

        <AnimatedSection className="bg-white border border-[#E5E7EB] rounded-2xl px-6 md:px-8 shadow-card" delay={0.1}>
          {FAQS.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </AnimatedSection>

        <AnimatedSection className="mt-8 text-center" delay={0.2}>
          <p className="text-sm text-[#6B7280] mb-4">Não encontrou sua dúvida?</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            Perguntar no WhatsApp
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
