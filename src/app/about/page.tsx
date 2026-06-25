import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | AI Engineering Partner",
  description: "About the AI Engineering Partner team.",
};

const teamMembers = [
  {
    name: "Partner Name",
    role: "AI Engineering Partner",
    initials: "PN",
    pedigree: "Former Staff Engineer. Built production developer platforms, agentic workflows and internal engineering systems.",
  },
  {
    name: "Partner Name",
    role: "AI Systems Lead",
    initials: "PN",
    pedigree: "Former engineering leader. Led platform teams, code quality programs and AI adoption across large codebases.",
  },
];

const principles = [
  "Operate inside existing engineering systems.",
  "Prefer standards over one-off demos.",
  "Keep human review explicit.",
  "Build assets the customer owns.",
];

export default function AboutPage() {
  return (
    <main className="about-shell">
      <nav className="legal-nav">
        <Link className="brand" href="/" aria-label="AI Engineering Partner home">
          <span className="brand-mark" />
          AI Engineering Partner
        </Link>
        <Link href="/#assessment" className="button-secondary">Book assessment</Link>
      </nav>

      <section className="about-hero">
        <p className="eyebrow">About us</p>
        <h1>Engineers who build the operating system for AI-assisted engineering.</h1>
        <p>
          We are not an agency and we do not sell a platform. We embed with engineering
          organizations to establish the systems, standards and workflows that make AI useful in
          production software teams.
        </p>
      </section>

      <section className="about-grid">
        <div className="about-panel">
          <h2>How we think</h2>
          <p>
            Elite teams do not adopt AI by adding random tools. They create shared workflows,
            permission models, evaluation loops and codebase-aware agents that improve how engineers
            actually ship.
          </p>
        </div>
        <div className="principle-list">
          {principles.map((principle, index) => (
            <div className="glass-row" key={principle}>
              <span className="chip-index">{String(index + 1).padStart(2, "0")}</span>
              {principle}
            </div>
          ))}
        </div>
      </section>

      <section className="about-team">
        <div className="section-heading">
          <p className="eyebrow">Team</p>
          <h2 className="section-title">Placeholder team profiles.</h2>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <article className="team-card" key={member.name + member.role}>
              <div className="face-placeholder">{member.initials}</div>
              <div>
                <h3>{member.name}</h3>
                <span>{member.role}</span>
                <p>{member.pedigree}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="legal-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <Link className="brand" href="/" aria-label="AI Engineering Partner home">
              <span className="brand-mark" />
              AI Engineering Partner
            </Link>
            <p>
              Senior AI engineers embedded with software companies to build internal AI systems,
              coding agents and durable engineering capability.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <h2>Company</h2>
              <Link href="/#what-we-do">What we do</Link>
              <Link href="/#how-we-work">How we work</Link>
              <Link href="/about">About</Link>
              <Link href="/#assessment">Assessment</Link>
            </div>
            <div>
              <h2>Legal</h2>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/security">Security</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 AI Engineering Partner. All rights reserved.</span>
            <span>Built for engineering organizations operating at production scale.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
