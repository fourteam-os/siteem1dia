import { type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const webhookUrl = process.env.SHEETS_WEBHOOK_URL

    if (!webhookUrl) {
      console.error('[leads] SHEETS_WEBHOOK_URL not set')
      return Response.json({ ok: false, error: 'SHEETS_WEBHOOK_URL not configured' })
    }

    const body = JSON.stringify({
      timestamp: new Date().toISOString(),
      ...data,
    })
    const headers = { 'Content-Type': 'application/json' }

    // Primeira chamada — detecta redirect do Apps Script
    const res1 = await fetch(webhookUrl, {
      method: 'POST',
      headers,
      body,
      redirect: 'manual',
    })

    console.log('[leads] res1 status:', res1.status)

    if (res1.status >= 300 && res1.status < 400) {
      const location = res1.headers.get('location')
      console.log('[leads] redirect location:', location)

      if (location) {
        const res2 = await fetch(location, { method: 'POST', headers, body })
        console.log('[leads] res2 status:', res2.status)
        const text = await res2.text()
        console.log('[leads] res2 body:', text.slice(0, 200))
      }
    } else {
      const text = await res1.text()
      console.log('[leads] res1 body:', text.slice(0, 200))
    }

    return Response.json({ ok: true })
  } catch (err) {
    console.error('[leads] error:', err)
    return Response.json({ ok: false })
  }
}
