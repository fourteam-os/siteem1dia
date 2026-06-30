import { type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const webhookUrl = process.env.SHEETS_WEBHOOK_URL

    if (!webhookUrl) {
      return Response.json({ ok: false, error: 'SHEETS_WEBHOOK_URL not configured' })
    }

    const body = JSON.stringify({
      timestamp: new Date().toISOString(),
      ...data,
    })
    const headers = { 'Content-Type': 'application/json' }

    // Apps Script redireciona o POST (302). O fetch padrão converte para GET
    // perdendo o corpo. Detectamos o redirect e repostamos manualmente.
    let res = await fetch(webhookUrl, {
      method: 'POST',
      headers,
      body,
      redirect: 'manual',
    })

    if (res.status >= 300 && res.status < 400) {
      const location = res.headers.get('location')
      if (location) {
        res = await fetch(location, { method: 'POST', headers, body })
      }
    }

    return Response.json({ ok: true })
  } catch {
    return Response.json({ ok: false })
  }
}
