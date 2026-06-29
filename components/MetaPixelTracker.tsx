'use client'

import { useEffect } from 'react'

function getCookie(name: string): string {
  if (typeof document === 'undefined') return ''
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift() ?? ''
  return ''
}

function sendCapiEvent(eventName: string, eventId: string) {
  const payload = JSON.stringify({
    event_name: eventName,
    event_id: eventId,
    fbp: getCookie('_fbp'),
    fbc: getCookie('_fbc'),
    event_source_url: window.location.href,
  })

  // keepalive garante envio mesmo ao navegar (ex: abrir WhatsApp)
  fetch('/api/meta-event', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: payload,
    keepalive: true,
  }).catch(() => {})
}

export function MetaPixelTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest('a')
      if (!anchor) return
      const href = anchor.getAttribute('href') ?? ''
      if (!href.includes('wa.me')) return

      const eventId = `wa_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`

      // Pixel client-side (deduplicado via eventID)
      const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq
      if (fbq) fbq('track', 'Contact', {}, { eventID: eventId })

      // CAPI server-side
      sendCapiEvent('Contact', eventId)
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
}
