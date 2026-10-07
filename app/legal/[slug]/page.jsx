import { pageMeta } from '@/lib/seo';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { site } from '@/data/site';

const EMAIL = site.email;
const PAGES = {
  terms: {
    title: 'Terms & Conditions',
    intro: 'The terms that apply when you work with or use the website of Rudrix.',
    sections: [
      { h: 'About these terms', p: ['These terms apply to your use of this website and to any enquiry you make through it. Work we do for you is covered by a separate written agreement or proposal, which takes priority over these terms where they differ.', 'By using this website you agree to these terms. If you do not agree, please do not use the site.'] },
      { h: 'Using the website', p: ['You may browse the site and contact us through it for lawful purposes. Please do not attempt to disrupt the site, access areas you are not meant to see, copy it in bulk, or submit false or misleading information.'] },
      { h: 'Our content', p: ['The text, design, graphics and code on this site belong to Rudrix or its licensors and are protected by copyright and other rights. You may view and share links to pages, but you may not copy or reuse our content without permission.', 'Some projects shown in our portfolio are concept projects created to demonstrate how we work. They are not a record of work for a named client.'] },
      { h: 'Enquiries, proposals and projects', p: ['Sending us an enquiry does not create a contract. A project begins only when both sides have agreed scope, price and timing in writing.', 'Estimates we give in early conversations are based on the information you share and may change once the requirements are clear. We will tell you if scope, timeline or cost is likely to change before the work goes ahead.'] },
      { h: 'Confidentiality', p: ['We treat information you share about your business and product as confidential. If you want a formal NDA before sharing details, tell us and we will sign one first.'] },
      { h: 'Ownership of delivered work', p: ['Ownership of code, designs and other deliverables is set out in the written agreement for each project. Unless that agreement says otherwise, our tools, templates and general know-how remain ours.'] },
      { h: 'Links to other sites', p: ['This site may link to third-party sites, such as profiles on other platforms. We do not control them and are not responsible for their content or practices.'] },
      { h: 'Limits of liability', p: ['The website is provided as it is. We work to keep it accurate and available but cannot guarantee it will always be error-free or uninterrupted. To the extent the law allows, Rudrix is not liable for indirect or consequential loss arising from use of this website. Nothing in these terms limits liability that cannot be limited by law.'] },
      { h: 'Changes to these terms', p: ['We may update these terms from time to time. The date at the top of this page shows when they were last changed.'] },
      { h: 'Contact', p: [`Questions about these terms can be sent to ${EMAIL}.`] },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    intro: 'How Rudrix collects, uses and protects the information you share with us.',
    sections: [
      { h: 'What this policy covers', p: ['This policy explains what information we collect through this website, why we collect it, and the choices you have. It applies to visitors and to people who contact us through the site.'] },
      { h: 'Information we collect', p: ['Information you give us: when you use a contact or project form, we receive the details you type in, such as your name, email address, phone number, the service you are interested in and your message.', 'Information collected automatically: like most websites, our hosting and tools may record basic technical information such as your browser type, device, pages visited and approximate location derived from your IP address.'] },
      { h: 'How we use it', p: ['We use your details to reply to your enquiry, discuss and scope a project, send information you asked for, keep records of our conversations, and keep the website secure and working properly. If you subscribe to our newsletter, we use your email address to send it.', 'We do not sell your personal information.'] },
      { h: 'Sharing', p: ['We share information only with service providers that help us run the website and our business, such as hosting, email and form-handling providers, and only so far as they need it to do that job. We may also share information if the law requires it.'] },
      { h: 'Cookies', p: ['This site may use cookies and similar technologies. See our Cookie Policy for what they are and how to manage them.'] },
      { h: 'How long we keep it', p: ['We keep enquiry information for as long as it is needed to respond and to keep a reasonable record of our dealings with you. If we work together, we keep project records for as long as the work and our legal obligations require.'] },
      { h: 'Security', p: ['We take reasonable steps to protect the information we hold, but no system is completely secure, so we cannot guarantee absolute security.'] },
      { h: 'Your choices and rights', p: ['Depending on where you live, you may have the right to ask us for a copy of the personal information we hold about you, to correct it, to delete it, or to object to certain uses. You can also ask us to stop sending you marketing email at any time.', `To make a request, email ${EMAIL}. We will respond within a reasonable time and may need to confirm your identity first.`] },
      { h: 'International visitors', p: ['We work with clients in different countries, so information may be handled in places other than where you live. Where this applies we take reasonable steps to protect it.'] },
      { h: 'Children', p: ['This website is intended for business use and is not directed at children.'] },
      { h: 'Changes to this policy', p: ['We may update this policy from time to time. The date at the top of this page shows the latest version.'] },
      { h: 'Contact', p: [`Questions about privacy can be sent to ${EMAIL}.`] },
    ],
  },
  cookies: {
    title: 'Cookie Policy',
    intro: 'How this website uses cookies and similar technologies.',
    sections: [
      { h: 'What cookies are', p: ['Cookies are small text files that a website stores in your browser. They help a site remember things about your visit, such as preferences, or how the site is being used.'] },
      { h: 'How we use them', p: ['Strictly necessary: some storage is needed for the site to work, for example to remember that a pop-up has been dismissed during your visit.', 'Analytics and measurement: if we add analytics tools, they may use cookies to count visits and show which pages are useful. We will list the tools here and ask for consent where the law requires it.', 'We do not use cookies to sell your information.'] },
      { h: 'Third-party content', p: ['Embedded content or links to other platforms may set their own cookies. We do not control these, so please check the relevant provider’s policy.'] },
      { h: 'Managing cookies', p: ['You can block or delete cookies in your browser settings. Doing so may mean parts of the site do not work as expected.'] },
      { h: 'Changes', p: ['We may update this policy if the cookies we use change. The date at the top of this page shows when it was last updated.'] },
      { h: 'Contact', p: [`Questions about cookies can be sent to ${EMAIL}.`] },
    ],
  },
  accessibility: {
    title: 'Accessibility',
    intro: 'Our commitment to making this website usable by everyone.',
    sections: [
      { h: 'Our approach', p: ['We want everyone to be able to use this website, including people who use assistive technology or who find some interfaces hard to use. We build with semantic HTML, keyboard-friendly controls, visible focus states and sensible colour contrast, and we respect the reduced-motion setting on your device.'] },
      { h: 'What we do', p: ['Interactive elements such as menus, tabs and accordions can be used with a keyboard.', 'Images that carry meaning have text alternatives, and decorative images are hidden from screen readers.', 'Pages use a clear heading structure and descriptive link text.', 'Animations are reduced or turned off when your device asks for reduced motion.'] },
      { h: 'Known limitations', p: ['We test the site regularly, but we have not completed a formal accessibility audit, and some parts may not yet meet every guideline. Concept projects and some decorative graphics may have limited alternative text.'] },
      { h: 'Tell us about a problem', p: [`If something on this site is hard to use, please email ${EMAIL} with the page address and a short description. We will look into it and reply as soon as we reasonably can.`] },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = PAGES[slug];
  if (!page) return { title: 'Not found', robots: { index: false } };
  return pageMeta({ title: `${page.title} — Rudrix`, description: page.intro || `${page.title} for Rudrix.`, alternates: { canonical: `/legal/${slug}` } });
}

export default async function LegalPage({ params }) {
  const { slug } = await params;
  const page = PAGES[slug];
  if (!page) notFound();

  return (
    <main className="min-h-screen bg-white section-x section-y">
      <div className="mx-auto max-w-[760px]">
        <Link href="/" className="inline-flex min-h-[44px] items-center text-[15px] font-medium text-rudrix-strong underline underline-offset-2">
          ← Back to home
        </Link>
        <h1 className="mt-6 text-[clamp(34px,5vw,56px)] font-medium leading-[1.05] tracking-[-0.04em] text-ink">{page.title}</h1>
        <p className="mt-5 text-[18px] leading-[1.6] text-[#444]">{page.intro}</p>
        <p className="mt-2 text-[14px] text-[#777]">Last updated: October 2026</p>
        <div className="mt-10 space-y-9">
          {page.sections.map((sec) => (
            <section key={sec.h}>
              <h2 className="text-[22px] font-medium leading-tight tracking-[-0.01em] text-ink">{sec.h}</h2>
              {sec.p.map((t) => <p key={t} className="mt-3 text-[16px] leading-[1.7] text-[#444]">{t}</p>)}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
