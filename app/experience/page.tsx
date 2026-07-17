import { Footer, Header, PageIntro } from "../site-components";

const experience = [
  {
    company: "Worth", role: "Senior Software Engineer", period: "May 2024 — Present", location: "Chicago, Illinois",
    summary: "Architecting integrations and technical solutions for an AI-powered FinTech platform that automates SMB onboarding, business verification, underwriting, and risk decisioning.",
    highlights: ["API integration patterns connecting customer onboarding systems, CRMs, loan-origination platforms, and internal data services", "Standardized security-review workflows that shortened the average evaluation cycle by approximately 20%", "Reusable API assets that reduced proof-of-concept preparation time by 40% across 25+ banking, FinTech, and commercial-lending evaluations"],
    stack: ["REST APIs", "Webhooks", "Authentication", "Postman", "SQL", "Security reviews"],
  },
  {
    company: "Cover Genius", role: "Solutions Engineer", period: "Feb 2022 — May 2024", location: "Remote · Chicago",
    summary: "Designed technical proofs of concept, demonstrations, workshops, and integration plans for a global embedded-insurance platform.",
    highlights: ["Translated partner use cases into API requirements, delivery plans, and implementation guidance", "Created Postman collections, implementation guides, and reusable API-flow documentation", "Investigated API and data issues with SQL, BigQuery, and Kibana and supported partners through testing and launch readiness"],
    stack: ["REST APIs", "Postman", "SQL", "BigQuery", "Kibana", "Technical documentation"],
  },
  {
    company: "Trimble Transport & Logistics", role: "Software Engineer", period: "Feb 2021 — Feb 2022", location: "Remote",
    summary: "Built and modernized a transportation-management platform handling more than one million transactions per day.",
    highlights: ["Helped modernize a legacy Angular/NGRX monorepo into a componentized React platform", "Established coding, testing, and component standards for a greenfield microfrontend architecture", "Presented biweekly product demonstrations to more than 200 stakeholders and C-suite leaders"],
    stack: ["React", "Angular", "Redux", "NGRX", "TypeScript", "Java", "Spring Boot", "Kafka", "PostgreSQL"],
  },
  {
    company: "Concept3D Inc.", role: "Senior Software Developer", period: "Aug 2019 — Feb 2021", location: "Greater Denver Area",
    summary: "Built geospatial web applications and immersive digital experiences across the full stack.",
    highlights: ["React, Node.js, and Python applications", "Open-source contributions to Mapbox GL and OpenStreetMap", "Immersive AR/VR experiences with A-Frame and WebGL"],
    stack: ["React", "Redux", "Node.js", "Python", "PHP", "AWS", "DynamoDB", "Mapbox GL", "WebGL"],
  },
  {
    company: "Isobar", role: "Interactive Developer", period: "Jan 2018 — Feb 2019", location: "Greater Chicago Area",
    summary: "Developed marketing sites, chatbots, and CMS-driven applications in close partnership with product, content, and design.",
    highlights: ["Adobe Experience Manager and Magento applications", "Technical requirements and business-logic definition", "Usability, accessibility, and weekly knowledge sharing"],
    stack: ["JavaScript", "AEM", "Magento", "Accessibility"],
  },
  {
    company: "ICF Olson", role: "Front End Engineer — Associate / Analyst", period: "Aug 2015 — Dec 2017", location: "Greater Chicago Area",
    summary: "Progressed from Analyst to Associate while building enterprise web experiences for major consumer and public-sector clients.",
    highlights: ["AEM-backed web applications, landing pages, and real-time experiences", "Third-party mapping and social API integrations", "Legacy refactoring focused on accessibility and readability"],
    stack: ["JavaScript", "AEM", "Third-party APIs", "AR/VR"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <PageIntro
          eyebrow="Experience"
          title="A decade of building, modernizing, and connecting software."
          copy="From frontend and full-stack product engineering to technical discovery, proofs of concept, and enterprise integrations, each role added a new layer to how I approach complex systems."
        />
        <section className="timeline wrap">
          {experience.map((job, index) => (
            <article className="timeline-item" key={job.company}>
              <div className="timeline-meta"><span>0{index + 1}</span><p>{job.period}</p><p>{job.location}</p></div>
              <div className="timeline-content">
                <p className="company">{job.company}</p>
                <h2>{job.role}</h2>
                <p className="job-summary">{job.summary}</p>
                <ul>{job.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
                <div className="chips">{job.stack.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            </article>
          ))}
        </section>
        <Footer />
      </main>
    </div>
  );
}
