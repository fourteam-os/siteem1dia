export const WHATSAPP_NUMBER = '5548998049914'
export const OFFER_VALUE = 497
export const OFFER_NAME = 'Site em 1 Dia'

export interface FormAnswers {
  empresa: string
  segmento: string
  whatsapp: string
  prazo: string
  ciente: string
  briefing: string
}

export function buildWhatsAppUrl(answers: FormAnswers): string {
  const message =
    `Olá! Tenho uma empresa e quero contratar o Site em 1 Dia por R$497. ` +
    `Já respondi a pré-qualificação e quero entender o próximo passo.\n\n` +
    `Minhas respostas:\n` +
    `• Empresa/prestador: ${answers.empresa}\n` +
    `• Segmento: ${answers.segmento}\n` +
    `• Meu WhatsApp: ${answers.whatsapp}\n` +
    `• Prazo desejado: ${answers.prazo}\n` +
    `• Ciente do valor R$497: ${answers.ciente}\n` +
    `• Briefing e materiais: ${answers.briefing}`

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
