interface LogoProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ variant = 'light', size = 'md' }: LogoProps) {
  const textColor = variant === 'light' ? '#F7F7F5' : '#09090B'
  const scale = size === 'sm' ? 0.8 : size === 'lg' ? 1.3 : 1

  return (
    <svg
      width={Math.round(168 * scale)}
      height={Math.round(36 * scale)}
      viewBox="0 0 168 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Site em 1 Dia"
    >
      {/* "Site em" */}
      <text
        x="0"
        y="26"
        fontFamily="'Space Grotesk', Inter, sans-serif"
        fontWeight="700"
        fontSize="22"
        fill={textColor}
        letterSpacing="-0.5"
      >
        Site em
      </text>

      {/* Speed lines — left of the 1 */}
      <line x1="88" y1="12" x2="99" y2="12" stroke="#FF6B00" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="90" y1="18" x2="99" y2="18" stroke="#FF6B00" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="92" y1="24" x2="99" y2="24" stroke="#FF6B00" strokeWidth="2.5" strokeLinecap="round" />

      {/* "1" numeral */}
      <text
        x="101"
        y="28"
        fontFamily="'Space Grotesk', Inter, sans-serif"
        fontWeight="800"
        fontSize="26"
        fill="#FF6B00"
      >
        1
      </text>

      {/* Cursor / arrow icon below the 1 */}
      <polygon
        points="114,20 114,32 117,29 118.5,33.5 120.5,32.8 119,28.3 122.5,28.3"
        fill="#FF6B00"
      />

      {/* "Dia" */}
      <text
        x="125"
        y="26"
        fontFamily="'Space Grotesk', Inter, sans-serif"
        fontWeight="700"
        fontSize="22"
        fill={textColor}
        letterSpacing="-0.5"
      >
        Dia
      </text>
    </svg>
  )
}

/** Compact icon-only version (for favicon-like use) */
export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="#FF6B00" />
      {/* Speed lines */}
      <line x1="4" y1="12" x2="13" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="5.5" y1="16" x2="13" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="7" y1="20" x2="13" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
      {/* 1 */}
      <text x="14" y="24" fontFamily="'Space Grotesk', sans-serif" fontWeight="800" fontSize="18" fill="white">1</text>
      {/* Cursor */}
      <polygon points="24,16 24,26 26.5,23.5 27.5,27 29,26.5 28,23 30,23" fill="white" />
    </svg>
  )
}
