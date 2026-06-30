import type { FormAnswers } from './whatsapp'

// Números claramente falsos
const FAKE_WHATSAPP = new Set([
  '0000000000', '00000000000',
  '1111111111', '11111111111',
  '9999999999', '99999999999',
  '1234567890', '12345678901',
  '45454545454', '88888888888',
])

// Segmentos obviamente inválidos
const FAKE_SEGMENTOS = new Set([
  'teste', 'test', 'testing',
  'jsjs', 'asdf', 'aaa', 'aaaa', 'aaaaa',
  '123', '1234', '12345',
  'fx', 'ttt', 'tttt', 'xxx', 'zzz',
  'abc', 'abcd', 'abcdef',
  'nada', 'nn', 'ss', 'ok', 'nao',
  'qwerty', 'qwe', 'asd', 'sss', 'ddd',
])

// > 70% dos dígitos são o mesmo caractere → padrão repetido falso
function hasRepeatedPattern(s: string): boolean {
  const counts: Record<string, number> = {}
  for (const c of s) counts[c] = (counts[c] || 0) + 1
  return Object.values(counts).some((n) => n / s.length >= 0.7)
}

export function cleanWhatsApp(raw: string): string {
  return raw.replace(/\D/g, '')
}

export function isValidWhatsApp(raw: string): boolean {
  const digits = cleanWhatsApp(raw)
  if (digits.length < 10 || digits.length > 11) return false
  if (FAKE_WHATSAPP.has(digits)) return false
  if (hasRepeatedPattern(digits)) return false
  return true
}

export function isValidSegmento(s: string): boolean {
  const trimmed = s.trim().toLowerCase()
  if (trimmed.length < 3) return false
  if (FAKE_SEGMENTOS.has(trimmed)) return false
  // Só dígitos → inválido
  if (/^\d+$/.test(trimmed)) return false
  // Máximo 2 caracteres únicos em textos longos → keyboard mashing
  const noSpaces = trimmed.replace(/\s/g, '')
  if (noSpaces.length > 4 && new Set(noSpaces).size <= 2) return false
  return true
}

export type DisqualificationReason =
  | 'Não tem empresa/presta serviço'
  | 'Segmento inválido'
  | 'WhatsApp inválido'
  | 'Prazo sem urgência'
  | 'Não pode investir agora'
  | 'Não tem materiais'

export function getDisqualificationReason(answers: FormAnswers): DisqualificationReason | null {
  if (answers.empresa !== 'Sim') return 'Não tem empresa/presta serviço'
  if (!isValidSegmento(answers.segmento)) return 'Segmento inválido'
  if (!isValidWhatsApp(answers.whatsapp)) return 'WhatsApp inválido'
  if (!['Hoje', 'Esta semana'].includes(answers.prazo)) return 'Prazo sem urgência'
  if (answers.ciente !== 'Sim, quero contratar') return 'Não pode investir agora'
  if (!['Sim', 'Preciso organizar'].includes(answers.briefing)) return 'Não tem materiais'
  return null
}

export function isLeadQualified(answers: FormAnswers): boolean {
  return getDisqualificationReason(answers) === null
}
