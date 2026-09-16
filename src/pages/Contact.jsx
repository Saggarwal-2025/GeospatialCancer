import { Mail, Users, Doc } from '../components/Icons.jsx'

const details = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'admingeocancer@gmail.com',
    href: 'mailto:admingeocancer@gmail.com',
  },
  {
    Icon: Users,
    label: 'Instagram',
    value: '@geocancer_institute',
    href: 'https://www.instagram.com/geocancer_institute/',
  },
  {
    Icon: Doc,
    label: 'Data requests',
    value: 'admingeocancer@gmail.com',
    href: 'mailto:admingeocancer@gmail.com?subject=Dataset%20request',
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
                <dd>
                  {href ? (
                    <a
                      href={href}
                      {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
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
              src="https://docs.google.com/forms/d/e/1FAIpQLSfx82lHoRif3N2I6GrT8Cw8v11memADBEMxJCY7Srtq3asAiQ/viewform?embedded=true"
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
