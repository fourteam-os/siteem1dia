import type { FormAnswers } from './whatsapp'

type Win = Window & {
  fbq?: (...args: unknown[]) => void
  dataLayer?: object[]
}

/** Dispara quando o usuário começa a preencher o formulário (primeira resposta) */
export function firePreQualificacaoIniciada(): void {
  try {
    const win = window as Win
    if (win.fbq) win.fbq('trackCustom', 'PreQualificacaoIniciada')
  } catch { /* fail silently */ }
}

/** Dispara apenas para leads qualificados — imediatamente antes do redirect para o WhatsApp */
export function fireLeadQualificado(answers: FormAnswers): void {
  try {
    const win = window as Win

    if (win.fbq) {
      win.fbq('track', 'Lead', {
        content_name: 'Lead Qualificado Site em 1 Dia',
        currency: 'BRL',
        value: 497,
      })

      win.fbq('trackCustom', 'LeadQualificadoSite1Dia', {
        empresa_ou_servico: answers.empresa,
        segmento: answers.segmento,
        prazo: answers.prazo,
        ciente_valor: answers.ciente,
        briefing_materiais: answers.briefing,
        whatsapp: answers.whatsapp,
        oferta: 'Site em 1 Dia',
        valor: 497,
      })
    }

    if (win.dataLayer) {
      win.dataLayer.push({
        event: 'lead_qualificado_site_1_dia',
        empresa_ou_servico: answers.empresa,
        segmento: answers.segmento,
        prazo: answers.prazo,
        ciente_valor: answers.ciente,
        briefing_materiais: answers.briefing,
        whatsapp: answers.whatsapp,
        oferta: 'Site em 1 Dia',
        valor: 497,
      })
    }
  } catch { /* fail silently */ }
}

/** Dispara para leads que completaram o formulário mas não têm perfil de compra */
export function firePreQualificacaoDesqualificada(
  answers: Partial<FormAnswers>,
  motivo: string,
): void {
  try {
    const win = window as Win
    if (win.fbq) {
      win.fbq('trackCustom', 'PreQualificacaoDesqualificada', {
        empresa_ou_servico: answers.empresa ?? '',
        segmento: answers.segmento ?? '',
        prazo: answers.prazo ?? '',
        ciente_valor: answers.ciente ?? '',
        briefing_materiais: answers.briefing ?? '',
        motivo,
      })
    }
  } catch { /* fail silently */ }
}
