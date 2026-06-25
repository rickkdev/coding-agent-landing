import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

const painQuestions = [
  ["Model routing", "Which model is best today?"],
  ["Agent policy", "When should we use coding agents?"],
  ["Workflow ROI", "Which workflows actually improve productivity?"],
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
    body: "Interim AI engineering leadership embedded with your team.",
    details: "Strategy, standards, technology evaluation and adoption across engineering.",
  },
  {
    title: "Custom Coding Agents",
    body: "Agents built around your company knowledge.",
    details: "Codebase, docs, architecture, APIs, runbooks and engineering standards.",
  },
  {
    title: "Autonomous Workflows",
    body: "Agents that perform real engineering work.",
    details: "Pull requests, reviews, tests, issue fixes and documentation under your permissions.",
  },
  {
    title: "Engineer Enablement",
    body: "Your engineers learn while shipping.",
    details: "No generic workshops. Real projects, real code and real pull requests.",
  },
];

const timeline = [
  {
    title: "Assess",
    body: "Map workflows, bottlenecks and opportunities.",
    icon: "M20 20h24v24H20zM28 30h8M28 36h12M46 16l6 6-6 6",
  },
  {
    title: "Embed",
    body: "Senior AI engineers join your engineering rhythm.",
    icon: "M18 34c0-8 6-14 14-14s14 6 14 14M24 44c3-5 13-5 16 0M32 18v-6M22 22l-4-4M42 22l4-4",
  },
  {
    title: "Build",
    body: "Implement agents, knowledge systems and workflows.",
    icon: "M18 32l8-8M18 32l8 8M46 24l8 8-8 8M36 20l-8 24",
  },
  {
    title: "Transfer",
    body: "Train your team and leave owned internal capability behind.",
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
  ["Company", "About", "/about"],
  ["Company", "How we work", "#how-we-work"],
  ["Company", "Assessment", "#assessment"],
  ["Legal", "Privacy Policy", "/privacy"],
  ["Legal", "Terms", "/terms"],
  ["Legal", "Security", "/security"],
];

function IntegrationLogo({ name }: { name: string }) {
  return (
    <div className="logo-card compact-logo-card" aria-label={name} data-reveal-card>
      <svg viewBox="0 0 220 70" role="img" aria-label={name}>
        {name === "GitHub" && (
          <>
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              fill="currentColor"
              transform="translate(30 18) scale(1.42)"
            />
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
            <a href="/about">About</a>
            <a href="#assessment">Assessment</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div>
            <p className="eyebrow">For CTOs, VP Engineering and Heads of Engineering</p>
            <h1>Build an AI Engineering Organization.</h1>
            <p className="hero-copy">
              We embed senior AI engineers to train your teams, implement production-grade coding
              agents and build internal AI systems that increase engineering velocity.
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
        <div className="problem-layout">
          <div className="section-heading">
            <h2 className="section-title">AI is evolving faster than engineering teams can keep up.</h2>
          </div>
          <div className="problem-grid">
            <div className="pain-console" aria-label="AI engineering adoption decision console">
              <div className="console-top">
                <div>
                  <span className="console-kicker">Weekly ecosystem intake</span>
                  <p>
                    New models, coding agents and context workflows arrive every week. Teams need a
                    repeatable way to evaluate what is useful and standardize what works.
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
                <p>Evaluate the ecosystem, implement what works and standardize how engineers use it.</p>
              </div>
            </div>
            <figure className="workspace-image">
              <Image
                src="/engineering-workspace.jpg"
                alt="Developer workspace with multiple monitors showing engineering workflows"
                fill
                sizes="(max-width: 760px) 100vw, 42vw"
                priority={false}
              />
              <figcaption>Workflow image by Jakub Zerdzicki on Unsplash.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="what-we-do" className="section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">What we build</p>
            <h2 className="section-title">AI capability inside your engineering organization.</h2>
          </div>
          <div className="service-grid" data-reveal-group>
            {services.map((service, index) => (
              <article className="premium-card compact-card" key={service.title} data-reveal-card>
                <div className="card-index">0{index + 1}</div>
                <h3>{service.title}</h3>
                <p className="lead">{service.body}</p>
                <p>{service.details}</p>
              </article>
            ))}
          </div>
          <div className="cost-control-panel">
            <span>Model cost control</span>
            <p>
              AI spend per engineer can climb fast. We route routine work to cheaper open-source
              models and reserve the strongest frontier models for heavy tasks, automatically
              abstracted away from your engineers.
            </p>
          </div>
          <div className="ownership-strip">
            <span>No platform.</span>
            <span>No lock-in.</span>
            <span>You own every agent, workflow, knowledge base, integration and prompt.</span>
          </div>
          <div className="stack-strip">
            <p className="eyebrow">Works with your stack</p>
            <div className="logo-grid compact-logo-grid" data-reveal-group>
              {integrations.map((name) => (
                <IntegrationLogo name={name} key={name} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how-we-work" className="section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">How we work</p>
            <h2 className="section-title">A practical path from assessment to independent capability.</h2>
          </div>
          <div className="timeline compact-timeline" data-reveal-group>
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
            The advantage goes to teams that continuously adapt as AI changes.
          </p>
          <p className="operator-note">Led by senior engineers with operator experience.</p>
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
