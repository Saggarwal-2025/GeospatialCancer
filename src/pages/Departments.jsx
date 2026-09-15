const departments = [
  {
    num: '01',
    title: 'Computer Science',
    desc: 'Builds and maintains the Texas Cancer Compass application and this site, and is moving into internal tooling for the rest of the project, including a database for legislative outreach and representative engagement.',
  },
  {
    num: '02',
    title: 'Spatial Data Analysis',
    desc: 'Maps cancer incidence and mortality across Texas counties, tests those outcomes against social determinants of health, and writes up the findings as reports and publications the other departments can use.',
  },
  {
    num: '03',
    title: 'Legal Outreach',
    desc: 'Translates analysis into legislative outreach: policy briefs and supporting material for legislators and their staff, coordinated with the Compass team so the people we contact can see the underlying data themselves.',
  },
  {
    num: '04',
    title: 'Cancer Research',
    desc: 'Sources the studies and background that give the maps their meaning, including work on benzene exposure and other environmental factors affecting surrounding communities, and feeds that context back to the analysis team.',
  },
]

export default function Departments() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__inner">
          <span className="breadcrumb">Departments</span>
          <h1>Four departments, one dataset.</h1>
          <p className="lede lede--light">
            The project contains four departments that work synchronously. Here's a quick brief
            about each one.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <ul className="dept-list">
            {departments.map((dept) => (
              <li className="dept" key={dept.num}>
                <span className="dept__num">{dept.num}</span>
                <h2 className="dept__title">{dept.title}</h2>
                <p className="dept__desc">{dept.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
