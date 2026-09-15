import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/Icons.jsx'
import { COMPASS_URL } from '../config.js'

const stats = [
  { value: '254', label: 'Texas counties in the dataset' },
  { value: '30+', label: 'Student and volunteer researchers' },
  { value: '4', label: 'Departments, from GIS to legal outreach' },
]

const about = [
  {
    title: 'Who We Are',
    text: 'A committed team of data specialists, healthcare advocates, and technologists focused on bridging the gap between geospatial information and public health initiatives in Texas.',
  },
  {
    title: 'What We Do',
    text: 'We analyze complex cancer datasets to provide visual mapping and actionable insights that help communities identify trends and mobilize resources effectively.',
  },
  {
    title: 'Why This Matters',
    text: 'Data transparency is the foundation of effective advocacy. By making health outcomes visible through location-based data, we enable targeted solutions for those most affected by cancer.',
  },
  {
    title: 'Our Advocacy Role',
    text: 'We act as the technical bridge between data generators and public health advocates, ensuring that critical information is accessible, understandable, and strategically utilized for policy change.',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        {/* PLACEHOLDER: swap src/assets/backdrop.jpg for a Texas landscape / industrial corridor photo */}
        <div className="hero__bg" aria-hidden="true" />
        <div className="hero__wash" aria-hidden="true" />

        <div className="hero__inner">
          <div className="hero__copy">
            <span className="eyebrow eyebrow--light">Texas &middot; Public health &middot; Open data</span>
            <h1>
              Making Texas cancer data <em>visible, usable, and impossible to ignore.</em>
            </h1>
            <div className="btn-row">
              <a className="btn btn--light" href="#compass">
                Explore the Compass <ArrowRight />
              </a>
              <Link className="btn btn--outline-light" to="/contact">
                Volunteer with us
              </Link>
            </div>
          </div>
        </div>

        <div className="statbar">
          <div className="statbar__inner">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <span className="stat__value">{stat.value}</span>
                <span className="stat__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="shell">
          <div className="about-grid">
            {about.map((item) => (
              <article className="about-card" key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark" id="compass">
        <div className="shell">
          <div className="compass__head">
            <span className="eyebrow eyebrow--light">The tool</span>
            <h2>Texas Cancer Compass</h2>
            <p className="lede lede--light">
              County-level cancer statistics, mapped against flagged environmental sites.
            </p>
          </div>

          <div className="compass__frame">
            <div className="map-embed">
              {COMPASS_URL ? (
                <iframe
                  src={COMPASS_URL}
                  title="Texas Cancer Compass interactive map"
                  loading="lazy"
                  allowFullScreen
                />
              ) : (
                <div className="ph ph--light">
                  {/* PLACEHOLDER: set COMPASS_URL in src/config.js */}
                  <strong>Set COMPASS_URL in src/config.js</strong>
                  <span>The live map loads here once the app is deployed</span>
                </div>
              )}
            </div>
          </div>

          {COMPASS_URL && (
            <p className="compass__note">
              <a href={COMPASS_URL} target="_blank" rel="noreferrer">
                Open the full map in a new tab
              </a>
            </p>
          )}
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-band__inner">
          <h2>Working on something this data could support?</h2>
          <p className="lede lede--light">
            We share our datasets and analysis with community groups, newsrooms and legislative
            offices at no cost. Tell us what you are trying to find out.
          </p>
          <div className="btn-row">
            <Link className="btn btn--light" to="/contact">
              Contact the team <ArrowRight />
            </Link>
            <Link className="btn btn--outline-light" to="/officers">
              Meet the researchers
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
