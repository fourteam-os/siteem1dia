'use client'

import { usePreQualification } from './PreQualificationModal'
import type { ReactNode } from 'react'

interface Props {
  className?: string
  children: ReactNode
}

/**
 * Drop-in replacement for <a href={WHATSAPP_URL}> buttons in server components.
 * Opens the pre-qualification modal instead of navigating directly to WhatsApp.
 */
export function PreQualificationTrigger({ className, children }: Props) {
  const { openModal } = usePreQualification()
  return (
    <button type="button" onClick={openModal} className={className}>
      {children}
    </button>
  )
}
