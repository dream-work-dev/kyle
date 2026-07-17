import Link from "next/link";
import { Footer, Header, SkillGroup } from "./site-components";

const skills = [
  {
    eyebrow: "Frontend systems",
    title: "Interfaces built to scale",
    items: ["React", "TypeScript", "Angular", "Redux", "RxJS", "SASS"],
  },
  {
    eyebrow: "Backend & data",
    title: "APIs and event-driven flows",
    items: ["Node.js", "REST APIs", "PostgreSQL", "Kafka", "BigQuery", "DynamoDB"],
  },
  {
    eyebrow: "Delivery",
    title: "From architecture to production",
    items: ["AWS", "Postman", "Jest", "Cypress", "Kibana", "Security reviews"],
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <section className="hero wrap">
          <div className="hero-orbit orbit-one" aria-hidden="true" />
          <div className="hero-orbit orbit-two" aria-hidden="true" />
          <p className="kicker"><span /> Chicago-based engineer</p>
          <h1>I build software that makes <em>complex systems</em> feel clear.</h1>
          <p className="hero-copy">
            I&apos;m Kyle Keller, a Senior Software Engineer with 10+ years of experience
            across full-stack products, frontend architecture, API integrations, and FinTech.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/experience">Explore experience <span>↗</span></Link>
            <Link className="button button-ghost" href="/about">About me</Link>
          </div>
          <div className="hero-footnote">
            <span className="line" />
            <span>React · TypeScript · Node.js · APIs</span>
          </div>
        </section>

        <section className="skills-section wrap">
          <div className="section-heading">
            <p className="kicker"><span /> Skilled in</p>
            <h2>Engineering across the product stack.</h2>
            <p>From component systems to customer-facing integrations, I connect implementation details to the bigger product picture.</p>
          </div>
          <div className="skill-grid">
            {skills.map((skill, index) => <SkillGroup key={skill.title} {...skill} index={index + 1} />)}
          </div>
        </section>

        <section className="featured wrap">
          <div>
            <p className="kicker"><span /> Current focus</p>
            <h2>FinTech systems, API architecture, and technical leadership.</h2>
          </div>
          <p>
            At Worth, I design integration architectures for business verification,
            risk assessment, and underwriting workflows—working across customers,
            product, engineering, sales, and security.
          </p>
          <Link className="text-link" href="/experience">See the full career story <span>→</span></Link>
        </section>

        <Footer />
      </main>
    </div>
  );
}
