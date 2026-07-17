import { Footer, Header, PageIntro } from "../site-components";

const experience = [
  {
    company: "Worth", role: "Solutions Engineer", period: "May 2024 — Present", location: "Chicago, Illinois",
    summary: "Designing technical solutions for a FinTech platform supporting business onboarding, verification, risk assessment, and underwriting.",
    highlights: ["API integration architecture across onboarding systems, CRMs, and loan-origination platforms", "Reusable demos and Postman collections that cut proof-of-concept preparation time by 40%", "Technical evaluations for 25+ enterprise opportunities across banking, FinTech, and lending"],
    stack: ["REST APIs", "Webhooks", "Postman", "Authentication", "Data mapping"],
  },
  {
    company: "Cover Genius", role: "Client Solutions Engineer", period: "Feb 2022 — May 2024", location: "Remote · Chicago",
    summary: "Led technical discovery, proofs of concept, and integration planning for a global embedded-insurance platform.",
    highlights: ["Partner-specific demos, workshops, and proof-of-concept integration flows", "Postman collections, technical guides, and API flow documentation", "Engineering liaison across business, product, and implementation teams"],
    stack: ["APIs", "Postman", "SQL", "BigQuery", "Kibana"],
  },
  {
    company: "Trimble Transport & Logistics", role: "Senior Front End Engineer", period: "Feb 2021 — Feb 2022", location: "Remote",
    summary: "Built and modernized a transportation-management platform handling more than one million transactions per day.",
    highlights: ["Helped migrate a legacy Angular/NGRX monorepo to a componentized React system", "Established coding and testing standards for a greenfield microfrontend", "Presented product work to technical, stakeholder, and C-suite audiences"],
    stack: ["React", "Angular", "TypeScript", "RxJS", "Java", "Kafka", "PostgreSQL"],
  },
  {
    company: "Concept3D", role: "Senior Software Developer", period: "Aug 2019 — Feb 2021", location: "Greater Denver Area",
    summary: "Built geospatial web applications and immersive digital experiences across the full stack.",
    highlights: ["React, Node.js, and Python applications", "Open-source contributions to mapping ecosystems", "AR/VR experiences with A-Frame and WebGL"],
    stack: ["React", "Node.js", "Python", "AWS", "DynamoDB", "Mapbox GL"],
  },
  {
    company: "Isobar", role: "Interactive Developer", period: "Jan 2018 — Feb 2019", location: "Greater Chicago Area",
    summary: "Developed marketing sites, chatbots, and CMS-driven applications in close partnership with product, content, and design.",
    highlights: ["Adobe Experience Manager and Magento applications", "Technical requirements and business-logic definition", "Usability, accessibility, and weekly knowledge sharing"],
    stack: ["JavaScript", "AEM", "Magento", "Accessibility"],
  },
  {
    company: "ICF Olson", role: "Front End Engineer", period: "Aug 2015 — Dec 2017", location: "Greater Chicago Area",
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
          copy="From frontend systems and geospatial products to FinTech APIs and enterprise integrations, each role added a new layer to how I approach software engineering."
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
