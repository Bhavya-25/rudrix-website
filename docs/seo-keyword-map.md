# Keyword map and content plan

**Data limits:** no keyword-volume, difficulty or competitor-traffic tool was available, so no numbers are given. Priorities are based on relevance to the real services and search intent. Validate in Search Console (queries) and a keyword tool before investing in new pages.

| Page | URL | Primary keyword (intent) | Secondary | Title (current) | Action |
|---|---|---|---|---|---|
| Home | `/` | software development company (commercial) | custom software, web apps, SaaS | Software Development Company for Growing Businesses \| Rudrix | keep H1; monitor |
| Services | `/services` | software development services | custom software, web, mobile | Software Development Services for Growing Businesses \| Rudrix | add contextual links to each service |
| Custom software | `/services/custom-software-development` | custom software development company | bespoke software, business software | Custom Software Development Company \| Rudrix | priority 1 |
| Web | `/services/web-development` | web development company | React, Next.js development | Web Development Company: React & Next.js Apps \| Rudrix | priority 1 |
| SaaS | `/services/saas-development` | SaaS development company | SaaS product development | existing | priority 1 |
| MVP | `/services/mvp-development` | MVP development for startups | build an MVP | MVP Development for Startups: Your Right First Version \| Rudrix | priority 2 |
| eCommerce | `/services/ecommerce-development` | eCommerce development | Shopify development | eCommerce Development: Shopify & Custom Stores \| Rudrix | priority 2 |
| UI/UX | `/services/ui-ux-design` | UI/UX design services | product design agency | existing | priority 2 |
| Mobile | `/services/mobile-app-development` | mobile app development company | iOS, Android apps | existing | priority 2 |
| Maintenance | `/services/software-maintenance-and-support` | software maintenance and support | | existing | priority 3 |
| Marketing | `/services/digital-marketing`, `/seo`, `/ppc`, `/facebook-ads`, `/social-media-marketing` | one intent each | | unique titles | confirm the service is offered before promoting |

Page types in the spec that **do not exist**: Industries (Healthcare, FinTech, eCommerce, SaaS) and Case Studies (project detail pages). Recommendation: create an industry page only when there is real project evidence (e.g. a healthcare page can reference Pocketpills, a FinTech page can reference BrokerPad and TS Trading Academy), written as original content, otherwise they become thin doorway pages. Case studies need verified challenge/approach/result facts, which are not in the project data yet.

## Blog calendar (prepared, none published automatically)
Existing posts already cover: custom vs off-the-shelf, outgrowing spreadsheets, choosing a development partner, website redesign, scoping an MVP, Shopify vs custom storefront, sprint demos. Spec topics still missing: *How much does custom software cost?*, *What is SaaS product development?*, *How long does it take to build an MVP?*, *Benefits of custom software for growing businesses*. For each: define intent, write an original outline, link to the matching service page, add BlogPosting schema (done by the template), and avoid unverified statistics.

## Internal linking rules
Service <-> related services (exists), blog post -> its service (add 1-2 natural contextual links per post), work page -> services. Use varied descriptive anchors, never repeat one exact-match anchor.

## Off-page plan (ethical, manual)
1. Profiles you control: Behance, Dribbble, Upwork, LinkedIn page, GitHub org (link to rudrix.co.in).
2. Business directories with an accurate name/URL/email (Clutch, GoodFirms, DesignRush: only if you qualify, no fake reviews).
3. Genuine guest articles and partner mentions; competitor backlink research with a tool you have access to.
4. No purchased links, no mass submissions, no daily quotas. Record each verified backlink in the monthly report.

## Update 14 Oct 2026: content actions done
- Priority service pages audited: each has 640-790 words, a keyword-bearing H1, 4 FAQs, process and deliverables; no rewrite needed. Added a "From the blog" list per service.
- Published (in code, live after deploy) the 4 gap posts: `how-much-does-custom-software-cost`, `what-is-saas-product-development`, `how-long-does-it-take-to-build-an-mvp`, `benefits-of-custom-software-for-growing-businesses`. Each links to its service, has a FAQ section with FAQPage schema and BlogPosting + Breadcrumb schema. Please review them editorially; they contain no prices, statistics or client claims.
- Industry pages (Healthcare, FinTech, eCommerce, SaaS) and case studies: **deferred**. Needed facts: for each real project (Pocketpills, BrokerPad, TS Trading Academy) the client's permission to be named, the challenge, scope, your role, technology and any documented result. Without them the pages would be thin or fabricated.

## Backlink / profile tracker (identified -> contacted -> published -> verified)
| Opportunity | Status | Notes |
|---|---|---|
| Behance profile link to rudrix.co.in | identified | portfolio kit assets are ready in `portfolio-kit/out/rudrix-website/` |
| Dribbble profile link | identified | same |
| Upwork profile website field | identified | only if allowed by Upwork's rules |
| LinkedIn company page website | identified | create page with accurate details |
| GitHub organization website | identified | |
| Clutch / GoodFirms / DesignRush | identified | only if eligible; no fake reviews; may be paid, needs your approval |
Nothing here is marked published or verified because none has been checked.
