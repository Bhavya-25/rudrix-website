# SEO requirements tracker

Statuses: PASS (verified), PARTIAL, BLOCKED (needs your account/credentials), NOT VERIFIED, N/A. Verified locally on 13 Oct 2026; "live" rows are updated in the final report after deployment.

| ID | Requirement (spec item) | Status | Evidence | Remaining action |
|---|---|---|---|---|
| SEO-001 | Final domain + HTTPS | PASS | live: http->https 308, www and vercel.app -> rudrix.co.in 308, canonical on rudrix.co.in (14 Oct 2026) | none |
| SEO-002 | Technical SEO structure check | PASS | `docs/seo-audit.md` crawl of 46 URLs | none |
| SEO-003 | Search Console connected | BLOCKED | needs your Google login | steps in final report G |
| SEO-004 | Domain verification (DNS TXT) | BLOCKED | token comes from Google | add TXT at GoDaddy |
| SEO-005 | XML sitemap | PASS | live 200, 46 URLs on canonical host | submit in Search Console |
| SEO-006 | robots.txt | PASS | `app/robots.js` (allow all, disallow /api/, sitemap line) | none |
| SEO-007 | Submit sitemap | BLOCKED | needs Search Console | submit `sitemap.xml` |
| SEO-008 | URL Inspection / request indexing | BLOCKED | needs Search Console | inspect key URLs |
| SEO-009 | GA4 property | BLOCKED | needs your account | create property "Rudrix", India, INR |
| SEO-010 | GA4 web data stream | BLOCKED | Measurement ID needed | create stream for https://rudrix.co.in |
| SEO-011 | GA4 integration method | PASS | GTM chosen (spec recommendation); no direct gtag to avoid duplicates | none |
| SEO-012 | GTM account/container | BLOCKED | needs your account | create container "Rudrix Website" |
| SEO-013 | GTM installed in Next.js | PARTIAL | component ready, tested locally with a dummy ID (script + dataLayer present, no crash without ID) | set `NEXT_PUBLIC_GTM_ID` in Vercel, redeploy |
| SEO-014 | GA4 tag via GTM | BLOCKED | needs Measurement ID + container | Google tag, trigger Initialization - All Pages, publish |
| SEO-015 | Verify GA4 data | BLOCKED | needs live ID | check Realtime |
| SEO-016 | GTM Preview test | BLOCKED | needs container | Preview mode |
| SEO-017 | GSC vs GA4 understanding | PASS | documented (final report) | none |
| SEO-018 | GTM role | PASS | documented; events are ready for GA4/Ads/Meta/LinkedIn | add pixels only with IDs + consent |
| SEO-019 | Service architecture | PARTIAL | 8 spec services exist as pages (+18 more); Industries and Case Study pages do not exist | see keyword map; build industry pages only with real content |
| SEO-020 | Page titles/descriptions | PASS | 46 pages unique; trimmed | monitor CTR |
| SEO-021 | H1/heading optimisation | PASS | exactly one H1 per page; homepage H1 kept deliberately | A/B after GSC data |
| SEO-022 | Image SEO | PARTIAL | alt policy applied; no empty-alt informative images found | rename files only if worth it |
| SEO-023 | Internal linking | PASS (local) | 0 broken links; every blog post now has a `service` link (post -> service CTA) and service pages list "From the blog" posts | verify live; keep adding contextual links |
| SEO-024 | Structured data | PASS (local) | Organization, WebSite, Service, FAQPage, BreadcrumbList, BlogPosting valid JSON | run Rich Results Test on live URLs |
| SEO-025 | Google Business Profile / local | BLOCKED | no verified address or phone in project | provide real address/service area |
| SEO-026 | PageSpeed / CWV | NOT VERIFIED | earlier lab runs only | run PageSpeed on production; CrUX needs traffic |
| SEO-027 | Tech foundation before backlinks | PASS | this task | none |
| SEO-028 | On-page SEO checklist | PASS | `docs/seo-keyword-map.md` | review quarterly |
| SEO-029 | Blog and content strategy | PARTIAL | 4 new original posts for the spec's gap topics published (no invented statistics, prices or citations), 11 posts total, FAQ + schema | editorial review by you; more posts per calendar |
| SEO-030 | Off-page SEO / backlinks | PARTIAL | ethical plan only; no backlinks claimed | execute plan manually |
| SEO-031 | Workflow + monthly reporting | PASS | `docs/monthly-seo-report-template.md` | connect data once GSC/GA4 exist |
