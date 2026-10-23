# SEO audit: rudrix.co.in (13 Oct 2026)

Source spec: `Untitled document.docx` (Rudrix SEO workflow, 31 topics). The Google Docs URL was not needed; the .docx copy was read in full.

## Stack
Next.js 16.3 (App Router, Turbopack), React 19, **JavaScript/JSX**, npm, Tailwind 3, Framer Motion. Hosted on **Vercel** (project `rudrix-website`), Git remote `github.com/Bhavya-25/rudrix-website`, production branch `main` (auto-deploy on push). 46 public URLs (9 pages, 26 service pages, 7 blog posts, 4 legal).

## Domain and HTTPS (measured 13 Oct 2026)
| Check | Result |
|---|---|
| `https://rudrix.co.in/` | 200, Vercel, valid HTTPS |
| `http://rudrix.co.in/` | redirects to https |
| `www.rudrix.co.in`, `rudrix-website.vercel.app` | both served the same site with **no redirect** (duplicate content risk) |
| DNS | apex A -> Vercel; `www` CNAME -> Vercel; MX = Google Workspace (untouched) |
| **Canonical tags / sitemap / robots** | **pointed at `https://rudrix.com` (wrong domain)** |

### Fixed in code
- `lib/siteUrl.js`: canonical origin defaults to `https://rudrix.co.in` (env `NEXT_PUBLIC_SITE_URL` can override). Used by layout, sitemap, robots, JSON-LD.
- `next.config.js`: permanent (308) redirects from `www.rudrix.co.in` and `rudrix-website.vercel.app` to `https://rudrix.co.in`.
- Vercel preview deployments (other hostnames) are not redirected, so previews still work.
- No DNS records were changed.

## Technical SEO crawl (local production build, 46 URLs)
- All 46 URLs return 200, exactly one `<h1>`, canonical on `rudrix.co.in`, no `noindex`.
- 0 duplicate titles, 0 duplicate meta descriptions, JSON-LD parses on every page, 0 `<img>` without an `alt` attribute.
- 46 internal link targets checked: 0 broken.
- Before: 4 service titles over 65 characters and 5 descriptions over 160; now trimmed (titles all <= 65). `/legal/terms|cookies|accessibility` descriptions are short (55-69 chars): low priority.
- Custom 404 exists (`app/not-found.jsx`, noindex).
- Open Graph/Twitter present on all pages; a default 1200x630 share image (`public/og-default.png`) is now attached (there was none).

## Structured data
Existing: Organization, WebSite (layout), Service + FAQPage (service pages). Added: **BreadcrumbList** on service and blog pages, **BlogPosting** on blog posts, Service now has `url`. Not added: LocalBusiness (no verified address), ratings/reviews (none verified). Validated for JSON parse and consistency with visible content; Google's Rich Results Test was **not run** (needs the live URL in a browser).

## Titles, descriptions, headings
Homepage title changed to the spec's proposal (59 chars): "Software Development Company for Growing Businesses | Rudrix", description to the spec's proposed text. The homepage **H1 "Software That Solves Real Business Problems" was kept**: it is strong brand messaging and the title/description already carry the keyword intent; revisit after Search Console shows queries.

## Images
Informative images have alt text; decorative images (backgrounds, flags, icons, ring tiles) use `alt=""` correctly. Blog hero photos are generic stock-style and kept decorative. Existing image filenames were left unchanged to avoid breaking URLs.

## Analytics
No GA4/GTM was installed. Added `components/Analytics.jsx`: direct GA4 tag (Measurement ID `G-RNP4KY9BFZ`, env `NEXT_PUBLIC_GA_ID`) with one `page_view` per route incl. client-side navigation; if `NEXT_PUBLIC_GTM_ID` is set it loads GTM instead and skips the direct tag (no double counting). `track()` helper sends events to gtag or the dataLayer. Events: `cta_click`, `email_click`, `phone_click`, `whatsapp_click`, `generate_lead` (only after the API confirms the email was sent), `newsletter_signup`. No personal data is sent. There is **no cookie-consent banner**; add one before enabling advertising pixels.

## Performance (earlier measurements, not repeated in this task)
Lighthouse mobile (lab, local build): home 77-96 depending on run, privacy page 94-99, CLS 0. No field data (CrUX) exists yet. Real Core Web Vitals will appear in Search Console after traffic. Treat as NOT VERIFIED for production.

## Not possible from code (need your Google account)
Search Console, GA4, GTM account, Google Business Profile. See `docs/final-seo-implementation-report.md` section G.
