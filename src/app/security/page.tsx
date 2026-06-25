import type { Metadata } from "next";
import { LegalPage } from "../legal-content";

export const metadata: Metadata = {
  title: "Security | AI Engineering Partner",
  description: "Security practices for AI Engineering Partner engagements.",
};

export default function SecurityPage() {
  return (
    <LegalPage
      title="Security"
      updated="June 25, 2026"
      intro="Security is central to how we design AI engineering workflows. We work inside customer-defined permissions, review gates, and operational controls."
      sections={[
        {
          title: "Access model",
          body: "We use least-privilege access and customer-approved systems for repositories, ticketing, documentation, CI, cloud infrastructure, and communication tools. Access is scoped to the engagement and removed when no longer needed.",
        },
        {
          title: "Human review",
          body: "Production workflows are designed with explicit review boundaries. Coding agents can draft changes, run tests, prepare pull requests, and update tickets, but approval paths are defined by the customer.",
        },
        {
          title: "Secrets and credentials",
          body: "Agents and workflows should not expose secrets in prompts, logs, documentation, or generated code. We design integrations to use managed credentials, environment controls, and audit-friendly permission boundaries.",
        },
        {
          title: "Data handling",
          body: "Company knowledge systems are built around the customer's approved sources and retention rules. We avoid unnecessary duplication of sensitive data and keep source-of-truth systems authoritative.",
        },
        {
          title: "Reporting",
          body: "If you believe you have found a security issue involving this website or an engagement deliverable, contact hello@example.com with enough detail for us to investigate responsibly.",
        },
      ]}
    />
  );
}
