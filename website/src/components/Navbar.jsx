import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import { Menu, Close } from './Icons.jsx'
import { COMPASS_URL } from '../config.js'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/departments', label: 'Departments' },
  { to: '/officers', label: 'Team' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const linkClass = ({ isActive }) => (isActive ? 'nav__link is-active' : 'nav__link')

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="nav">
        <div className="nav__inner">
          <NavLink to="/" className="brand" aria-label="Home">
            <Logo />
            <span className="brand__text">
              <span className="brand__kicker">Texas Geospatial</span>
              <span className="brand__name">Cancer Data Advocacy Project</span>
            </span>
          </NavLink>

          <nav className={open ? 'nav__menu is-open' : 'nav__menu'} aria-label="Main">
            <ul className="nav__links">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} end={link.end} className={linkClass}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {COMPASS_URL ? (
              <a
                className="btn btn--light nav__cta"
                href={COMPASS_URL}
                target="_blank"
                rel="noreferrer"
              >
                Open the Compass
              </a>
            ) : (
              <Link className="btn btn--light nav__cta" to="/#compass">
                Open the Compass
              </Link>
            )}
          </nav>

          <button
            type="button"
            className="nav__toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </header>
    </>
  )
}
