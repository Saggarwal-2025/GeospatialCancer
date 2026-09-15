/*
 * Site logo, used in the nav bar and the footer.
 *
 * TO USE THE REAL LOGO: save it as src/assets/logo.svg (or .png / .webp).
 * It is picked up automatically, with no code change needed. Until that file
 * exists the simple inline mark below is drawn instead, so the build never
 * depends on a file that isn't there yet.
 *
 * Export it with a TRANSPARENT background. The logo sits on the maroon nav
 * bar, so a baked-in background square will show as a patch behind it.
 * SVG is preferred over PNG: it stays sharp at any size.
 */
const found = import.meta.glob('../assets/logo.{svg,png,jpg,jpeg,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const logoSrc = Object.values(found)[0] ?? null

export default function Logo({ className = 'brand__mark' }) {
  if (logoSrc) {
    return <img className={className} src={logoSrc} alt="" aria-hidden="true" />
  }

  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="16" opacity="0.45" />
      <circle cx="20" cy="20" r="8.5" />
      <path d="M20 1.5v7M20 31.5v7M1.5 20h7M31.5 20h7" strokeLinecap="round" />
      <circle cx="20" cy="20" r="2.6" fill="currentColor" stroke="none" />
    </svg>
  )
}
