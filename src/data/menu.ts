// Dropdown items for each top-level nav link. Built from the page data,
// so adding a service group, project, partner or FAQ updates the menu too.

import { nav, serviceGroups, partners } from './site';
import { projects } from './projects';
import { faqs } from './faq';

export const slugify = (text: string) =>
  text.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export type MenuChild = { href: string; label: string; desc?: string };

const children: Record<string, { items: MenuChild[]; all?: string }> = {
  '/services/': {
    items: serviceGroups.map((g) => ({
      href: `/services/#${g.id}`,
      label: g.title,
      desc: g.items.map((i) => i.name).join(', '),
    })),
    all: 'All services',
  },
  '/historic-homes/': {
    items: [
      { href: '/historic-homes/#approach', label: 'How I work on older houses', desc: 'Repair before replace, matched materials' },
      { href: '/historic-homes/#typical-work', label: 'Typical old-house work', desc: 'Masonry, porches, plaster, windows' },
      { href: '/historic-homes/#historic-projects', label: 'Historic projects' },
    ],
  },
  '/projects/': {
    items: projects.map((p) => ({ href: `/projects/#${slugify(p.title)}`, label: p.title, desc: p.category })),
    all: 'All projects',
  },
  '/network/': {
    items: [
      ...partners.map((p) => ({ href: `/network/#${slugify(p.name)}`, label: p.name, desc: p.trade })),
      { href: '/network/#contractor-management', label: 'Contractor management', desc: 'I find, schedule and oversee the trades' },
    ],
  },
  '/about/': {
    items: [
      { href: '/about/#story', label: 'My story' },
      { href: '/about/#how-i-work', label: 'How I work' },
    ],
  },
  '/faq/': {
    items: faqs.map((f) => ({ href: `/faq/#${slugify(f.q)}`, label: f.q })),
    all: 'All questions',
  },
};

export const menu = nav.map((item) => ({ ...item, ...children[item.href] }));
