// Maps one entry of data/services.js (selected by URL slug) onto the props of the shared service-page sections.
// The Custom Software Development exports in data/services.js are the master content/defaults; every other service only
// overrides what its own data provides. UI, icons, images and animations come from the shared components.
import {
  customSoftwareHero, customSoftwareWhy, customSoftwareCapabilities, customSoftwareTech, customSoftwareTour,
  customSoftwareProblems, customSoftwareCases, customSoftwareIndustries, customSoftwareCta, buildSystem, buildJourney, serviceBySlug,
} from './services';

const MASTER = 'custom-software-development';

export function getServiceTemplate(service) {
  const master = service.slug === MASTER;
  const label = (service.menuLabel || service.name);
  const upper = label.toUpperCase();
  const related = (service.related || []).map(serviceBySlug).filter(Boolean);

  const hero = master ? customSoftwareHero : {
    ...customSoftwareHero,
    eyebrow: service.name.toUpperCase(),
    title: [service.h1],
    text: service.intro?.[0] || service.short,
    proof: [label, ...related.map((r) => r.menuLabel || r.name)].slice(0, 4),
  };

  const why = master ? customSoftwareWhy : {
    ...customSoftwareWhy,
    eyebrow: `WHY ${upper}`,
    title: [service.problem?.heading || customSoftwareWhy.title[0]],
    text: service.problem?.text || service.short,
  };

  const items = (service.offer?.items || []).slice(0, 6);
  const capabilities = master || items.length < 4 ? customSoftwareCapabilities : {
    ...customSoftwareCapabilities,
    title: [service.offer.heading],
    text: service.short,
    items: items.map((it, i) => ({
      ...customSoftwareCapabilities.items[i % customSoftwareCapabilities.items.length],
      number: String(i + 1).padStart(2, '0'),
      category: 'WHAT WE BUILD',
      title: it.title,
      description: it.text,
      points: [],
      featured: i === 2,
    })),
  };

  const pts = service.problem?.points || [];
  const problems = master ? customSoftwareProblems : pts.length >= 5 ? {
    ...customSoftwareProblems,
    title: [service.problem.heading],
    text: service.problem.text || customSoftwareProblems.text,
    items: pts.slice(0, 5).map((p, i) => ({
      ...customSoftwareProblems.items[i],
      title: p,
      description: p,
      overlay: [service.problem.heading, ''],
    })),
  } : null;

  const cta = master ? customSoftwareCta : {
    ...customSoftwareCta,
    title: service.cta?.heading || customSoftwareCta.title,
    text: 'Tell us what you are working on. We will help you figure out the next practical step.',
    cta: { ...customSoftwareCta.cta, label: service.cta?.label || customSoftwareCta.cta.label },
  };

  const faqItems = service.faq || [];
  const faq = faqItems.length ? {
    heading: `Questions about ${service.name.toLowerCase()}`,
    intro: 'Straight answers to the questions we hear most often.',
    categories: { [service.name]: faqItems.map((f) => ({ question: f.q, answer: f.a })) },
  } : null;

  return {
    hero, why, capabilities, problems, cta, faq,
    tech: customSoftwareTech,
    tour: master ? customSoftwareTour : null, // software-type gallery only exists for the master service
    cases: customSoftwareCases,
    industries: customSoftwareIndustries,
    system: buildSystem,
    journey: buildJourney,
  };
}
