import { Footer, Header, PageIntro } from "../site-components";

const principles = [
  ["01", "Architecture with context", "The best technical decision connects system constraints, user needs, and business outcomes."],
  ["02", "Clarity over complexity", "I turn APIs, workflows, and architecture into models that engineers and stakeholders can act on."],
  ["03", "Build, explain, improve", "Hands-on implementation, thoughtful demos, and feedback loops are all part of the engineering work."],
];

export default function AboutPage() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <PageIntro
          eyebrow="About"
          title="Engineering depth, with a customer-facing point of view."
          copy="My career began in frontend engineering and grew through full-stack product development, architecture, and enterprise integrations. Today I bring those perspectives together to build systems that work well—and make sense to the people using them."
        />
        <section className="about-story wrap">
          <div className="story-stat">
            <strong>10+</strong>
            <span>Years building software products and platforms</span>
          </div>
          <div className="story-copy">
            <p>
              I&apos;ve worked on transportation systems processing more than one million daily transactions,
              geospatial web applications, immersive AR/VR experiences, enterprise CMS platforms,
              and FinTech onboarding and underwriting workflows.
            </p>
            <p>
              That range shaped how I work: understand the system, make the architecture visible,
              ship in practical increments, and communicate tradeoffs without hiding behind jargon.
            </p>
          </div>
        </section>
        <section className="principles wrap">
          <div className="section-heading compact">
            <p className="kicker"><span /> How I work</p>
            <h2>Principles behind the code.</h2>
          </div>
          <div className="principle-list">
            {principles.map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="education wrap">
          <p className="kicker"><span /> Education</p>
          <div><h2>Miami University</h2><p>Bachelor of Science in Interactive Media Studies · 2011–2015</p></div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
