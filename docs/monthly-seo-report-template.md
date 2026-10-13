# Monthly SEO report: [Month YYYY]
Fill only with real exported data. Leave "n/a" when a source is not connected. Compare with the previous month only when both periods are available.

## 1. Search Console (Performance, last 28 days vs previous)
| Metric | This period | Previous | Change |
|---|---|---|---|
| Impressions | | | |
| Clicks | | | |
| CTR | | | |
| Average position | | | |
Top 10 queries / top 10 landing pages: (table)
Indexing: indexed pages __ / excluded __ ; errors: ; Sitemap `sitemap.xml` status: ; Core Web Vitals: ; Manual actions: none/yes

## 2. GA4
Users, sessions, engagement rate, top channels, top landing pages, events: `cta_click`, `email_click`, `phone_click`, `whatsapp_click`, `generate_lead` (successful form submits), `newsletter_signup`. Lead conversion rate = generate_lead / sessions (state the denominator).

## 3. Technical
Sitemap and robots 200 on https://rudrix.co.in; canonical/redirect check (www and vercel.app redirect); broken links (run the crawl in `docs/seo-audit.md`); schema warnings; PageSpeed mobile/desktop with date and URL; accessibility regressions.

## 4. Content and links
Posts published, pages updated, verified new backlinks (URL + date).

## 5. Wins / problems / next month's top 3 priorities

## How to connect data later
Search Console and GA4 both have a "Reports -> export" and a Looker Studio connector; connect both to one Looker Studio report named "Rudrix SEO" and replace the tables above with it.
