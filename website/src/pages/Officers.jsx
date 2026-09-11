import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/Icons.jsx'

/*
 * PLACEHOLDER: drop headshots into src/assets/team/ and import them here, e.g.
 *   import alan from '../assets/team/alan.jpg'
 *   { ..., photo: alan }
 * Portrait crop, roughly 800 x 1000. Any member without a `photo` shows the
 * dashed placeholder box instead, so you can add them one at a time.
 */
const officers = [
  {
    role: 'Project Lead',
    name: 'Alan Christopher Rajkumar',
    bio: '[ one-line bio - add here ]',
    photo: null,
  },
  {
    role: 'Chief Operating Officer',
    name: 'Tanvir Hoque',
    bio: '[ one-line bio - add here ]',
    photo: null,
  },
  {
    role: 'Chief Financial Officer',
    name: 'Pavit Yaduwanshi',
    bio: '[ one-line bio - add here ]',
    photo: null,
  },
  {
    role: 'Chief Technology Officer',
    name: 'Sarthak Aggarwal',
    bio: '[ one-line bio - add here ]',
    photo: null,
  },
  {
    role: 'Chief Legal Officer',
    name: 'Matteo',
    bio: '[ one-line bio - add here ]',
    photo: null,
  },
  {
    role: 'Chief Data Officer',
    name: 'Allison',
    bio: '[ one-line bio - add here ]',
    photo: null,
  },
  {
    role: 'Chief Research Officer',
    name: 'Yuze Ren',
    bio: '[ one-line bio - add here ]',
    photo: null,
  },
]

export default function Officers() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="breadcrumb">Team</span>
          <h1>The people behind the map.</h1>
          <p className="lede lede--light">
            A leadership team of students and early-career researchers, supported by more than
            thirty volunteers across analysis, engineering, law and outreach.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="team-grid">
            {officers.map((officer) => (
              <div className="member" key={officer.name}>
                <div className="member__photo">
                  {officer.photo ? (
                    <img src={officer.photo} alt={officer.name} />
                  ) : (
                    <div className="ph">
                      {/* PLACEHOLDER */}
                      <strong>Headshot</strong>
                      <span>800 x 1000</span>
                    </div>
                  )}
                </div>
                <span className="member__role">{officer.role}</span>
                <h2 className="member__name">{officer.name}</h2>
                <p className="member__bio">{officer.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight section--paper2">
        <div className="shell">
          <div className="join-card">
            <div>
              <h2>There is a seat here for you.</h2>
              <p>
                The volunteer team is where most of the work happens, and it is open. If you can
                write, code, map or read carefully, we can use you.
              </p>
            </div>
            <Link className="btn btn--light" to="/contact">
              Apply to volunteer <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
