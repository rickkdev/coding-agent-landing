import type { Metadata } from "next";
import { LegalPage } from "../legal-content";

export const metadata: Metadata = {
  title: "Terms | AI Engineering Partner",
  description: "Terms for AI Engineering Partner.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms"
      updated="June 25, 2026"
      intro="These Terms describe the general conditions for using this website and engaging with AI Engineering Partner. Specific customer work is governed by a signed agreement."
      sections={[
        {
          title: "Website use",
          body: "You may use this website to learn about our services and contact us. You may not misuse the site, interfere with its operation, or attempt to access systems or data without authorization.",
        },
        {
          title: "Engagements",
          body: "Consulting, engineering, implementation, training, and advisory work is provided under a separate written agreement that defines scope, deliverables, access, confidentiality, ownership, fees, and responsibilities.",
        },
        {
          title: "Ownership",
          body: "Unless a written agreement states otherwise, customer-specific agents, workflows, integrations, prompts, knowledge bases, and internal tools created for a customer are intended to be owned by that customer.",
        },
        {
          title: "No platform subscription",
          body: "We do not sell a generic platform through this website. We build and transfer engineering capability, systems, and workflows according to the engagement scope.",
        },
        {
          title: "Limitations",
          body: "Website content is provided for general information and does not create a service relationship by itself. To the maximum extent permitted by law, we are not liable for indirect, incidental, consequential, or special damages arising from website use.",
        },
      ]}
    />
  );
}
