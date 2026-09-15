import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/Icons.jsx'
import alanRajkumar from '../assets/team/alan-rajkumar.jpg'
import allisonSu from '../assets/team/allison-su.jpg'
import matteoEroy from '../assets/team/matteo-eroy.jpg'
import pavitYaduwanshi from '../assets/team/pavit-yaduwanshi.jpg'
import sarthakAggarwal from '../assets/team/sarthak-aggarwal.jpg'
import tanvirHoque from '../assets/team/tanvir-hoque.jpg'
import yuzeRen from '../assets/team/yuze-ren.jpg'

/*
 * Headshots live in src/assets/team/, cropped to a 4:5 portrait. Anyone without
 * a `photo` shows the dashed placeholder box instead, so they can be added one
 * at a time.
 */
const officers = [
  {
    role: 'Project Lead',
    name: 'Alan Christopher Rajkumar',
    photo: alanRajkumar,
  },
  {
    role: 'Chief Operating Officer',
    name: 'Tanvir Hoque',
    photo: tanvirHoque,
  },
  {
    role: 'Chief Financial Officer',
    name: 'Pavit Yaduwanshi',
    photo: pavitYaduwanshi,
  },
  {
    role: 'Chief Technology Officer',
    name: 'Sarthak Aggarwal',
    photo: sarthakAggarwal,
  },
  {
    role: 'Chief Legal Officer',
    name: 'Matteo Eroy',
    photo: matteoEroy,
  },
  {
    role: 'Chief Data Officer',
    name: 'Allison Su',
    photo: allisonSu,
  },
  {
    role: 'Chief Research Officer',
    name: 'Yuze Ren',
    photo: yuzeRen,
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
                    <img src={officer.photo} alt={officer.name} loading="lazy" />
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
