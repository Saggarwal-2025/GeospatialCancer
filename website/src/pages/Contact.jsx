import { Mail, Pin, Users, Doc } from '../components/Icons.jsx'

/* PLACEHOLDER: fill in the real contact details below. */
const details = [
  {
    Icon: Mail,
    label: 'Email',
    value: '[ contact email - add here ]',
    href: null,
  },
  {
    Icon: Pin,
    label: 'Based in',
    value: '[ city / campus - add here ]',
    href: null,
  },
  {
    Icon: Users,
    label: 'Social',
    value: '[ Instagram / X / LinkedIn - add here ]',
    href: null,
  },
  {
    Icon: Doc,
    label: 'Data requests',
    value: '[ email for dataset requests - add here ]',
    href: null,
  },
]

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="breadcrumb">Contact</span>
          <h1>Reach out, or join the investigation.</h1>
          <p className="lede lede--light">
            Whether you want the data, want to write about it, or want to help build it, this is
            the front door.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <dl className="contact-grid">
            {details.map(({ Icon, label, value, href }) => (
              <div className="contact-card" key={label}>
                <span className="contact-card__icon">
                  <Icon />
                </span>
                <dt>{label}</dt>
                <dd>{href ? <a href={href}>{value}</a> : value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section--paper2">
        <div className="shell">
          <div className="section-head">
            <span className="eyebrow">Volunteer</span>
            <h2>Join the investigation</h2>
            <p className="lede">
              We are a team of thirty-plus volunteers and always looking for more. Fill out the
              form and someone from the department that fits you will follow up.
            </p>
          </div>

          <div className="form-panel">
            <iframe
              src="https://docs.google.com/forms/d/1YfLnM27lY3ATpBDFWyOTnUPcKPFSujKXQNuya5Q4U4w/viewform?embedded=true"
              title="Volunteer sign-up form"
              loading="lazy"
            >
              Loading form...
            </iframe>
          </div>
        </div>
      </section>
    </>
  )
}
