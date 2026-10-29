// TODO: These are example entries. Replace with Richard's real jobs.
// Put photos in public/images/projects/ and set `image` to e.g. '/images/projects/porch.jpg'.
// The unsplash() images are stand-in stock photos.

import { stock, unsplash } from './stock';

export type Project = {
  title: string;
  category: string;
  summary: string;
  image?: string;
  historic?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Porch restoration on an 1890s house',
    image: unsplash(stock.victorianPorch),
    category: 'Historic',
    summary: 'Replaced rotted floorboards and a column base to match the originals, then scraped, primed and repainted.',
    historic: true,
  },
  {
    title: 'Old brick wall repointed',
    image: unsplash(stock.oldBrick),
    category: 'Masonry',
    summary: 'Cut out failing mortar on a century-old brick wall and repointed with a lime mortar matched to the original.',
    historic: true,
  },
  {
    title: 'Backyard fence replacement',
    image: unsplash(stock.fence),
    category: 'Fencing',
    summary: 'Pulled a leaning cedar fence, set new posts in concrete and rebuilt a sagging gate.',
  },
  {
    title: 'Whole-house interior repaint',
    image: unsplash(stock.interiorPainting),
    category: 'Painting',
    summary: 'Patched plaster cracks, painted walls, ceilings and trim across six rooms.',
  },
  {
    title: 'Basement and garage cleanout',
    image: unsplash(stock.clutteredGarage),
    category: 'Junk removal',
    summary: 'Cleared years of storage, hauled it away and left the space swept and ready to use.',
  },
  {
    title: 'Kitchen remodel, trades managed',
    image: unsplash(stock.kitchenRemodel),
    category: 'Contractor management',
    summary: 'Scheduled and oversaw the plumber, electrician and countertop installer so the homeowner didn\'t have to.',
  },
];
