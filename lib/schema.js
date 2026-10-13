import { abs } from './siteUrl';

// BreadcrumbList JSON-LD from [{ name, path }] (first item is Home).
export const breadcrumb = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.path) })),
});
