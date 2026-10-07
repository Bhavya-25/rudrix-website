// One place that turns a page's title/description/canonical into full metadata (canonical + Open Graph + Twitter),
// so sub-pages never inherit the homepage's canonical or social title.
export function pageMeta(m) {
  const url = m.alternates?.canonical;
  return {
    ...m,
    openGraph: { title: m.title, description: m.description, url, type: m.ogType || 'website', siteName: 'Rudrix' },
    twitter: { card: 'summary_large_image', title: m.title, description: m.description },
  };
}
