import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { Instagram, LinkedIn, XLogo, Github } from './Icons.jsx'
import { COMPASS_URL } from '../config.js'

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/geocancer_institute/', Icon: Instagram },
  { label: 'LinkedIn', href: '#', Icon: LinkedIn },
  { label: 'X', href: '#', Icon: XLogo },
  { label: 'GitHub', href: '#', Icon: Github },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col footer__about">
          <Link to="/" className="brand" aria-label="Home">
            <Logo />
            <span className="brand__text">
              <span className="brand__kicker">Texas Geospatial</span>
              <span className="brand__name">Cancer Data Advocacy Project</span>
            </span>
          </Link>
          <p>
            A student-led research collective mapping cancer outcomes against environmental
            exposure across Texas, and putting that evidence in front of the people who can act
            on it.
          </p>
          <div className="socials" aria-label="Social links">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/departments">Departments</Link>
            </li>
            <li>
              <Link to="/officers">Team</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Get Involved</h4>
          <ul>
            <li>
              <Link to="/contact">Volunteer with us</Link>
            </li>
            <li>
              {COMPASS_URL ? (
                <a href={COMPASS_URL} target="_blank" rel="noreferrer">
                  Texas Cancer Compass
                </a>
              ) : (
                <Link to="/#compass">Texas Cancer Compass</Link>
              )}
            </li>

            <li>
              <a href="mailto:admingeocancer@gmail.com">Press &amp; media</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__base">
        <span>© {new Date().getFullYear()}Geocancer Insitute</span>
        <span>Built by volunteers · Data sourced from public records</span>
      </div>
    </footer>
  )
}
