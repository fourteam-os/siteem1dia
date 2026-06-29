import type { FormAnswers } from './whatsapp'

type Win = Window & {
  fbq?: (...args: unknown[]) => void
  dataLayer?: object[]
}

export function fireLeadEvent(answers: FormAnswers): void {
  try {
    const win = window as Win

    if (win.fbq) {
      win.fbq('track', 'Lead', {
        content_name: 'Pre Qualificacao Site em 1 Dia',
        currency: 'BRL',
        value: 497,
      })

      win.fbq('trackCustom', 'PreQualificacaoCompleta', {
        empresa_ou_servico: answers.empresa,
        segmento: answers.segmento,
        whatsapp: answers.whatsapp,
        prazo: answers.prazo,
        ciente_valor: answers.ciente,
        briefing_materiais: answers.briefing,
        oferta: 'Site em 1 Dia',
        valor: 497,
      })
    }

    if (win.dataLayer) {
      win.dataLayer.push({
        event: 'pre_qualificacao_completa',
        empresa_ou_servico: answers.empresa,
        segmento: answers.segmento,
        whatsapp: answers.whatsapp,
        prazo: answers.prazo,
        ciente_valor: answers.ciente,
        briefing_materiais: answers.briefing,
        oferta: 'Site em 1 Dia',
        valor: 497,
      })
    }
  } catch {
    // fail silently — pixel errors must never break navigation
  }
}
