import type { Metadata } from "next";
import { LegalPage } from "../legal-content";

export const metadata: Metadata = {
  title: "Privacy Policy | AI Engineering Partner",
  description: "Privacy policy for AI Engineering Partner.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="June 25, 2026"
      intro="This Privacy Policy explains how we handle information when you contact us, book an assessment, or work with us as an AI engineering partner."
      sections={[
        {
          title: "Information we collect",
          body: "We collect information you choose to provide, such as your name, company, role, email address, assessment details, and messages. During an engagement we may also receive access to engineering materials your company explicitly authorizes, such as documentation, repositories, tickets, runbooks, architecture notes, and internal standards.",
        },
        {
          title: "How we use information",
          body: "We use information to respond to inquiries, scope assessments, deliver engineering work, improve internal processes, maintain security, and comply with contractual or legal obligations. We do not sell personal information.",
        },
        {
          title: "Company data",
          body: "Customer code, documentation, prompts, workflows, and knowledge bases are treated as confidential customer materials. Access is limited to the people and systems needed to deliver the engagement, under the permissions defined with the customer.",
        },
        {
          title: "Retention",
          body: "We retain information only as long as needed for the business purpose, contractual obligation, legal requirement, or security need for which it was collected. Customer-owned assets can be returned or deleted according to the engagement agreement.",
        },
        {
          title: "Contact",
          body: "For privacy questions or data requests, contact us at hello@example.com. We may need to verify your identity or authority before acting on a request involving company data.",
        },
      ]}
    />
  );
}
