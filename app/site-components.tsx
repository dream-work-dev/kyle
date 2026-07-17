import Link from "next/link";

export const EMAIL = "kyle.dev.keller@gmail.com";

export function Header() {
  return (
    <header className="site-header">
      <nav className="wrap nav" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="Kyle Keller home">
          <span className="brand-mark">KK</span>
          <span>Kyle Keller</span>
        </Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/experience">Experience</Link>
        </div>
        <a className="nav-contact" href={`mailto:${EMAIL}`}>Contact me <span>↗</span></a>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-cta">
        <p className="kicker"><span /> Let&apos;s connect</p>
        <h2>Have a technical challenge worth solving?</h2>
        <a className="button button-primary" href={`mailto:${EMAIL}?subject=Portfolio%20inquiry`}>Contact me <span>↗</span></a>
      </div>
      <div className="wrap footer-bottom">
        <div className="brand"><span className="brand-mark">KK</span><span>Kyle Keller</span></div>
        <p>Senior Software Engineer · Chicago, Illinois</p>
        <div className="social-links">
          <a href="https://github.com/KyleQ1" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/kyle-keller-b3309a40" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
    </footer>
  );
}

export function SkillGroup({ eyebrow, title, items, index }: { eyebrow: string; title: string; items: string[]; index: number }) {
  return (
    <article className="skill-card">
      <div className="card-number">0{index}</div>
      <p>{eyebrow}</p>
      <h3>{title}</h3>
      <div className="chips">{items.map((item) => <span key={item}>{item}</span>)}</div>
    </article>
  );
}

export function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <section className="page-intro wrap">
      <p className="kicker"><span /> {eyebrow}</p>
      <h1>{title}</h1>
      <p>{copy}</p>
    </section>
  );
}
