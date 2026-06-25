import Link from "next/link";

type LegalSection = {
  title: string;
  body: string;
};

type LegalPageProps = {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPage({ title, updated, intro, sections }: LegalPageProps) {
  return (
    <main className="legal-shell">
      <nav className="legal-nav">
        <Link className="brand" href="/" aria-label="AI Engineering Partner home">
          <span className="brand-mark" />
          AI Engineering Partner
        </Link>
        <Link href="/#assessment" className="button-secondary">Book assessment</Link>
      </nav>

      <article className="legal-document">
        <p className="eyebrow">Legal</p>
        <h1>{title}</h1>
        <p className="legal-updated">Last updated: {updated}</p>
        <p className="legal-intro">{intro}</p>

        <div className="legal-sections">
          {sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </article>

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
