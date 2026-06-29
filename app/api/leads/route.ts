import { type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const webhookUrl = process.env.SHEETS_WEBHOOK_URL

    if (!webhookUrl) {
      return Response.json({ ok: false, error: 'SHEETS_WEBHOOK_URL not configured' })
    }

    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        ...data,
      }),
    })

    return Response.json({ ok: true })
  } catch {
    return Response.json({ ok: false })
  }
}
