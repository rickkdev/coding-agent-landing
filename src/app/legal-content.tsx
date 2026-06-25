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
    </main>
  );
}
