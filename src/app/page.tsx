import { ScrollReveal } from "./ScrollReveal";

const painQuestions = [
  ["Model routing", "Which model is best today?"],
  ["Agent policy", "When should we use coding agents?"],
  ["Workflow ROI", "Which workflows actually improve productivity?"],
  ["Process design", "How should AI fit into our engineering process?"],
  ["Automation", "What is safe to automate?"],
  ["Human review", "What should remain human?"],
  ["Standards", "How do we avoid every engineer doing things differently?"],
];

const ecosystemSignals = [
  ["New model", "evaluate"],
  ["Coding agent", "benchmark"],
  ["Prompt pattern", "standardize"],
  ["Context workflow", "document"],
];

const services = [
  {
    title: "AI Engineering Leadership",
    body: "We embed with your company as an interim Head of AI Engineering.",
    details:
      "We define strategy, establish engineering standards, evaluate new technologies and guide adoption across your engineering organization.",
  },
  {
    title: "Custom Coding Agents",
    body: "We build coding agents specifically for your company.",
    details:
      "Each agent understands your codebase, architecture, documentation and engineering standards. Not generic AI. Your AI.",
  },
  {
    title: "Autonomous Engineering Workflows",
    body: "We build agents that perform real engineering work.",
    details:
      "Creating pull requests, reviewing pull requests, writing tests, executing end-to-end suites, fixing simple issues, updating tickets, generating documentation and keeping projects synchronized, always under the workflows and permissions your organization defines.",
  },
  {
    title: "Engineer Enablement",
    body: "We work alongside your engineers every day.",
    details:
      "No generic workshops. Real projects. Real code. Real pull requests. Your engineers learn modern AI engineering naturally while shipping production software.",
  },
];

const knowledgeSources = [
  "Codebase",
  "Docs",
  "Standards",
  "ADRs",
  "APIs",
  "Libraries",
  "Runbooks",
  "Product",
];

const reasons = [
  {
    title: "The ecosystem changes weekly.",
    body: "Your engineers shouldn't spend time evaluating every new model, framework or coding workflow. We do that continuously.",
  },
  {
    title: "AI adoption fails without engineering standards.",
    body: "Without shared workflows every engineer builds differently. We establish repeatable engineering practices your entire organization follows.",
  },
  {
    title: "Everything stays with you.",
    body: "We don't sell a platform. We build yours.",
    owned: [
      "every agent",
      "every workflow",
      "every knowledge base",
      "every integration",
      "every prompt",
      "every skill definition",
      "every internal tool",
    ],
  },
];

const timeline = [
  {
    title: "Assess",
    body: "Understand workflows, bottlenecks and opportunities.",
    icon: "M20 20h24v24H20zM28 30h8M28 36h12M46 16l6 6-6 6",
  },
  {
    title: "Embed",
    body: "Our senior AI engineers become part of your engineering team.",
    icon: "M18 34c0-8 6-14 14-14s14 6 14 14M24 44c3-5 13-5 16 0M32 18v-6M22 22l-4-4M42 22l4-4",
  },
  {
    title: "Build",
    body: "We implement coding agents, internal knowledge systems and engineering workflows tailored to your organization.",
    icon: "M18 32l8-8M18 32l8 8M46 24l8 8-8 8M36 20l-8 24",
  },
  {
    title: "Train",
    body: "Your engineers learn modern AI engineering by working directly alongside us.",
    icon: "M18 42V22l14-6 14 6v20l-14 6-14-6zM32 16v32M22 30l10 4 10-4",
  },
  {
    title: "Transition",
    body: "Your team continues independently with the platform, workflows and expertise we've built together.",
    icon: "M18 38c8 8 20 8 28 0M46 38h-8v-8M18 26c8-8 20-8 28 0M18 26h8v8",
  },
];

const integrations = [
  "GitHub",
  "GitLab",
  "Jira",
  "Linear",
  "Azure DevOps",
  "Slack",
  "Notion",
  "Confluence",
];

const footerLinks = [
  ["Company", "What we do", "#what-we-do"],
  ["Company", "How we work", "#how-we-work"],
  ["Company", "Assessment", "#assessment"],
  ["Legal", "Privacy Policy", "#privacy"],
  ["Legal", "Terms", "#terms"],
  ["Legal", "Security", "#security"],
];

function IntegrationLogo({ name }: { name: string }) {
  return (
    <div className="logo-card" aria-label={name} data-reveal-card>
      <svg viewBox="0 0 220 70" role="img" aria-label={name}>
        {name === "GitHub" && (
          <>
            <circle cx="47" cy="35" r="17" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <path d="M37 47c3-1 3-4 2-6-5-1-8-4-8-10 0-3 1-5 3-7 0-2 0-4 1-6 3 0 5 1 7 3 2-.5 5-.5 8 0 2-2 4-3 7-3 1 2 1 4 1 6 2 2 3 4 3 7 0 6-3 9-8 10-1 2-1 5 2 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            <text x="78" y="42">GitHub</text>
          </>
        )}
        {name === "GitLab" && (
          <>
            <path d="M30 45l17 12 17-12-6-24-7 14h-8l-7-14-6 24z" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
            <text x="78" y="42">GitLab</text>
          </>
        )}
        {name === "Jira" && (
          <>
            <path d="M36 20h18c0 8-6 14-14 14h-4V20zM58 36H40c0 8 6 14 14 14h4V36z" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
            <text x="78" y="42">Jira</text>
          </>
        )}
        {name === "Linear" && (
          <>
            <circle cx="46" cy="35" r="18" fill="none" stroke="currentColor" strokeWidth="2.4" />
            <path d="M34 42l19-19M40 50l23-23M30 35l12-12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
            <text x="78" y="42">Linear</text>
          </>
        )}
        {name === "Azure DevOps" && (
          <>
            <path d="M31 24l28-8v37l-28-5 12-5V29l-12-5z" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
            <text x="78" y="42">Azure DevOps</text>
          </>
        )}
        {name === "Slack" && (
          <>
            <path d="M39 17v16M51 37v16M31 37h16M43 25h16" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            <text x="78" y="42">Slack</text>
          </>
        )}
        {name === "Notion" && (
          <>
            <rect x="30" y="18" width="34" height="34" rx="4" fill="none" stroke="currentColor" strokeWidth="2.4" />
            <path d="M39 43V28h4l11 15V28" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            <text x="78" y="42">Notion</text>
          </>
        )}
        {name === "Confluence" && (
          <>
            <path d="M31 42c7 7 16 8 23 1l6-6M63 28c-7-7-16-8-23-1l-6 6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
            <text x="78" y="42">Confluence</text>
          </>
        )}
      </svg>
    </div>
  );
}

function HeroVisual() {
  const lanes = ["Plan", "Context", "Code", "Review", "Test", "Ship"];

  return (
    <div className="workflow-visual" aria-label="AI engineering agents collaborating around a company's engineering workflow">
      <div className="workflow-grid" />
      <div className="workflow-lane lane-one" />
      <div className="workflow-lane lane-two" />
      <div className="workflow-lane lane-three" />
      {lanes.map((item, index) => (
        <div className={`workflow-node node-${index + 1}`} key={item}>
          <span>{item}</span>
        </div>
      ))}
      <div className="repo-panel">
        <div className="repo-dots"><span /><span /><span /></div>
        <div className="repo-line wide" />
        <div className="repo-line" />
        <div className="repo-line short" />
      </div>
      <div className="agent-orbit orbit-one"><span>agent</span></div>
      <div className="agent-orbit orbit-two"><span>agent</span></div>
      <div className="agent-orbit orbit-three"><span>agent</span></div>
      <div className="workflow-core">
        <span>Engineering<br />workflow</span>
      </div>
    </div>
  );
}

function KnowledgeVisual() {
  return (
    <div className="knowledge-visual" aria-label="Interconnected knowledge sources feeding intelligent agents">
      <svg className="knowledge-lines" viewBox="0 0 600 520" aria-hidden="true">
        <path d="M300 230C210 110 130 100 92 146" />
        <path d="M300 230C300 92 300 72 300 52" />
        <path d="M300 230C420 104 496 112 522 154" />
        <path d="M300 230C174 222 84 224 54 240" />
        <path d="M300 230C430 220 512 228 548 248" />
        <path d="M300 230C210 374 134 404 92 388" />
        <path d="M300 230C300 372 300 428 300 464" />
        <path d="M300 230C416 374 496 404 526 386" />
        <path className="strong" d="M300 230C252 300 226 338 198 374" />
        <path className="strong" d="M300 230C356 300 386 338 412 374" />
      </svg>
      <div className="knowledge-core">Company<br />context</div>
      {knowledgeSources.map((source, index) => (
        <div className={`knowledge-source source-${index + 1}`} key={source}>{source}</div>
      ))}
      <div className="knowledge-agent agent-a">Agent</div>
      <div className="knowledge-agent agent-b">Agent</div>
    </div>
  );
}

function TimelineIcon({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d={path} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050609] text-white">
      <ScrollReveal />
      <section className="hero-shell">
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />
        <nav className="site-nav">
          <a className="brand" href="#" aria-label="AI Engineering Partner home">
            <span className="brand-mark" />
            AI Engineering Partner
          </a>
          <div className="nav-links" aria-label="Primary navigation">
            <a href="#what-we-do">What we do</a>
            <a href="#how-we-work">How we work</a>
            <a href="#assessment">Assessment</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div>
            <p className="eyebrow">For CTOs, VP Engineering and Heads of Engineering</p>
            <h1>Build an AI Engineering Organization.</h1>
            <p className="hero-copy">
              We embed senior AI engineers into your company to train your engineering teams,
              implement production-grade coding agents, and build internal AI systems that
              permanently increase engineering velocity.
            </p>
            <div className="cta-row">
              <a href="#assessment" className="button-primary">Book an AI Assessment</a>
              <a href="#how-we-work" className="button-secondary">How We Work</a>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="section">
        <div className="pain-layout">
          <div className="section-heading">
            <h2 className="section-title">AI is evolving faster than engineering teams can keep up.</h2>
          </div>
          <div className="pain-console" aria-label="AI engineering adoption decision console">
            <div className="console-top">
              <div>
                <span className="console-kicker">Weekly ecosystem intake</span>
                <p>
                  Every week introduces new models, new coding agents, better prompting techniques,
                  better context engineering, new workflows and entirely new ways of building software.
                </p>
              </div>
              <div className="console-status">
                <span />
                Continuous evaluation
              </div>
            </div>
            <div className="signal-rail" aria-label="Ecosystem signals" data-reveal-group>
              {ecosystemSignals.map(([signal, action]) => (
                <div className="signal-card" key={signal} data-reveal-card>
                  <span>{signal}</span>
                  <strong>{action}</strong>
                </div>
              ))}
            </div>
            <div className="question-grid" data-reveal-group>
              {painQuestions.map(([label, question], index) => (
                <button className="glass-row question-chip" type="button" key={question} data-reveal-card>
                  <span className="chip-index">{String(index + 1).padStart(2, "0")}</span>
                  <span>
                    <strong>{label}</strong>
                    {question}
                  </span>
                </button>
              ))}
            </div>
            <div className="console-outcome">
              <span>Our role</span>
              <p>
                Continuously evaluate the ecosystem, implement what works, ignore what doesn&apos;t,
                and teach your teams industry best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="what-we-do" className="section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">What we do</p>
            <h2 className="section-title">Senior AI engineering capability, embedded inside your company.</h2>
          </div>
          <div className="service-grid" data-reveal-group>
            {services.map((service, index) => (
              <article className="premium-card" key={service.title} data-reveal-card>
                <div className="card-index">0{index + 1}</div>
                <h3>{service.title}</h3>
                <p className="lead">{service.body}</p>
                <p>{service.details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="knowledge-layout">
          <div>
            <p className="eyebrow">Your company knowledge</p>
            <h2 className="section-title">Every agent understands your business.</h2>
            <div className="prose-block compact">
              <p>
                We build custom knowledge systems around your company.
              </p>
              <p>
                Agents understand your codebase, internal documentation, engineering standards,
                architecture decisions, APIs, internal libraries, product knowledge, runbooks and
                onboarding documentation.
              </p>
              <p>
                Instead of asking generic AI for help, your engineers work with AI that already
                understands your company.
              </p>
            </div>
          </div>
          <KnowledgeVisual />
        </div>
      </section>

      <section className="section integrations-section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Project management</p>
            <h2 className="section-title">Integrated into your engineering workflow.</h2>
          </div>
          <div className="logo-grid" data-reveal-group>
            {integrations.map((name) => (
              <IntegrationLogo name={name} key={name} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Why companies hire us</p>
            <h2 className="section-title">Built for organizations where engineering quality matters.</h2>
          </div>
          <div className="reason-grid" data-reveal-group>
            {reasons.map((reason) => (
              <article className="premium-card tall" key={reason.title} data-reveal-card>
                <h3>{reason.title}</h3>
                <p>{reason.body}</p>
                {reason.owned && (
                  <div className="ownership-list" aria-label="Owned assets">
                    {reason.owned.map((item) => <span key={item}>{item}</span>)}
                  </div>
                )}
                {reason.owned && <p className="no-lockin">No subscriptions. No lock-in.</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-we-work" className="section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">How we work</p>
            <h2 className="section-title">A practical path from assessment to independent capability.</h2>
          </div>
          <div className="timeline" data-reveal-group>
            {timeline.map((item, index) => (
              <div className="timeline-item" key={item.title} data-reveal-card>
                <div className="timeline-index">{index + 1}</div>
                <div className="timeline-icon">
                  <TimelineIcon path={item.icon} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="assessment" className="final-section">
        <div className="cta-panel">
          <h2>Don&apos;t outsource AI. Build an engineering organization that knows how to use it.</h2>
          <p>
            The companies that gain the biggest advantage won&apos;t simply buy AI tools. They&apos;ll build
            engineering organizations that continuously adapt as AI evolves.
          </p>
          <a href="mailto:hello@example.com?subject=AI%20Engineering%20Assessment">Book Your AI Engineering Assessment</a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <a className="brand" href="#" aria-label="AI Engineering Partner home">
              <span className="brand-mark" />
              AI Engineering Partner
            </a>
            <p>
              Senior AI engineers embedded with software companies to build internal AI systems,
              coding agents and durable engineering capability.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <h2>Company</h2>
              {footerLinks.filter(([group]) => group === "Company").map(([, label, href]) => (
                <a href={href} key={label}>{label}</a>
              ))}
            </div>
            <div>
              <h2>Legal</h2>
              {footerLinks.filter(([group]) => group === "Legal").map(([, label, href]) => (
                <a href={href} key={label}>{label}</a>
              ))}
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
