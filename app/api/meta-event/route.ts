import { NextRequest, NextResponse } from 'next/server'

const PIXEL_ID = '2544241792678694'
const CAPI_TOKEN = process.env.META_CAPI_TOKEN

export async function POST(req: NextRequest) {
  if (!CAPI_TOKEN) {
    return NextResponse.json({ error: 'CAPI token not configured' }, { status: 500 })
  }

  const body = await req.json()
  const { event_name, event_id, fbp, fbc, event_source_url } = body

  const clientIp =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    ''
  const userAgent = req.headers.get('user-agent') ?? ''

  const userData: Record<string, string> = {
    client_user_agent: userAgent,
  }
  if (clientIp) userData.client_ip_address = clientIp
  if (fbp) userData.fbp = fbp
  if (fbc) userData.fbc = fbc

  const payload = {
    data: [
      {
        event_name,
        event_time: Math.floor(Date.now() / 1000),
        event_id,
        event_source_url,
        action_source: 'website',
        user_data: userData,
      },
    ],
  }

  const res = await fetch(
    `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${CAPI_TOKEN}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }
  )

  const data = await res.json()
  return NextResponse.json(data, { status: res.ok ? 200 : 400 })
}
