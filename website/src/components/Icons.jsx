const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
  'aria-hidden': true,
}

export const ArrowRight = (p) => (
  <svg {...base} {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
)

export const Mail = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="M3.5 7l8.5 6 8.5-6" />
  </svg>
)

export const Pin = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
)

export const Users = (p) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="9" r="3.4" />
    <path d="M3.5 19.5a5.8 5.8 0 0111 0M16 6.2a3.4 3.4 0 010 6.6M17.5 19.5a5.8 5.8 0 00-2.2-4.5" />
  </svg>
)

export const Doc = (p) => (
  <svg {...base} {...p}>
    <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" />
    <path d="M14 3v5h5M9 13h6M9 17h4" />
  </svg>
)

export const Menu = (p) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const Close = (p) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)

export const Instagram = (p) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" />
  </svg>
)

export const LinkedIn = (p) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
    <path d="M7.5 10.5V17M7.5 7.2v.1M11.5 17v-4a2.5 2.5 0 015 0v4" />
  </svg>
)

export const XLogo = (p) => (
  <svg {...base} {...p}>
    <path d="M4 4l16 16M20 4L4 20" />
  </svg>
)

export const Github = (p) => (
  <svg {...base} {...p}>
    <path d="M9 19c-4 1.3-4-2.2-5.5-2.7M15 21v-3.3a2.9 2.9 0 00-.8-2.2c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 00-1.3-3.2 4.3 4.3 0 00-.1-3.2s-1.05-.3-3.4 1.3a11.7 11.7 0 00-6 0C6.05 2.8 5 3.1 5 3.1a4.3 4.3 0 00-.1 3.2A4.6 4.6 0 003.5 9.5c0 4.7 2.8 5.7 5.5 6a2.9 2.9 0 00-.8 2.2V21" />
  </svg>
)
