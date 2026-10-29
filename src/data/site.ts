import { stock, unsplash } from './stock';

// Edit this file to update the site's contact details and copy.
// Values marked TODO are placeholders until Richard confirms them.

export const site = {
  name: 'Richard Sullivan',
  tagline: 'Handyman & Historic Property Specialist',
  intro:
    'One reliable person for the long list of jobs around your home: repairs, painting, yard work, tech help, and the trades you need to bring in. Careful work, with a particular respect for older houses.',
  phone: '(317) 409-6767',
  email: 'rxsullivan@gmail.com',
  serviceArea: 'Your town and surrounding area', // TODO
  photo: '/images/richard.jpg',
};

export const tel = site.phone.replace(/[^\d+]/g, '');

export const nav = [
  { href: '/services/', label: 'Services' },
  { href: '/historic-homes/', label: 'Historic Homes' },
  { href: '/projects/', label: 'Projects' },
  { href: '/network/', label: 'Network' },
  { href: '/about/', label: 'About' },
  { href: '/faq/', label: 'FAQ' },
];

export type ServiceGroup = {
  id: string;
  title: string;
  blurb: string;
  image?: string;
  items: { name: string; detail: string }[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: 'around-the-house',
    image: unsplash(stock.tools),
    title: 'Around the house',
    blurb: 'The jobs that pile up.',
    items: [
      { name: 'Household repairs', detail: 'Doors, drywall, trim, fixtures and the small fixes that keep a home running.' },
      { name: 'Interior painting', detail: 'Walls, ceilings and trim, with proper prep and clean lines.' },
      { name: 'Art hanging', detail: 'Pictures, mirrors and gallery walls, level and secure.' },
      { name: 'Furniture assembly', detail: 'Flat-pack and more, put together right the first time.' },
    ],
  },
  {
    id: 'outside',
    image: unsplash(stock.exteriorPainting),
    title: 'Outside',
    blurb: 'Yard, hardscape and exterior upkeep.',
    items: [
      { name: 'Exterior painting', detail: 'Siding, trim, porches and fences.' },
      { name: 'Fence installation & repair', detail: 'New runs, replaced posts and sagging gates.' },
      { name: 'Masonry repair', detail: 'Repointing, steps, walls and chimneys.' },
      { name: 'Asphalt & small paving', detail: 'Driveway patches, cracks and small pavement jobs.' },
      { name: 'Bush & tree trimming', detail: 'Shaping, clearing and keeping growth off the house.' },
      { name: 'Leaf removal', detail: 'Fall cleanups for yards, beds and gutters.' },
      { name: 'Junk removal', detail: 'Garages, basements, attics and post-project debris.' },
    ],
  },
  {
    id: 'beyond-the-toolbox',
    image: unsplash(stock.router),
    title: 'Beyond the toolbox',
    blurb: 'Help that a typical handyman doesn\'t offer.',
    items: [
      { name: 'IT assistance', detail: 'Wi-Fi, printers, new devices, smart home setup and general tech troubleshooting.' },
      { name: 'Contractor management', detail: 'I find, schedule and oversee the right tradespeople on your property, so you don\'t have to.' },
    ],
  },
];

// Add more trusted tradespeople here as Richard brings them on.
export const partners = [
  {
    name: 'David Lawrence',
    trade: 'HVAC',
    detail: 'Furnaces, air conditioning, ventilation and seasonal maintenance. A colleague I work with directly and trust in your home.',
  },
];
