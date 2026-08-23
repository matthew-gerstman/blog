export type WishlistPriority = 'high' | 'medium' | 'low';

export interface WishlistItem {
  id: string;
  name: string;
  description: string;
  category: string;
  priority: WishlistPriority;
  link?: string;
  image?: string;
}

export const wishlist: WishlistItem[] = [
  {
    id: 'vintage-napster-tshirt',
    name: 'Vintage Napster T-Shirt',
    description:
      'One of those late-90s Napster tees that somehow everyone owned and no one kept. Would fit right in with the rest of my hoard of things I have no practical reason to own.',
    category: 'Apparel',
    priority: 'medium',
    link: 'https://www.etsy.com/listing/4320612812/vintage-napster-logo-t-shirt-90s-y2k',
  },
  {
    id: 'betamax-players',
    name: 'Betamax Players',
    description:
      'I already have one, but a proper Betamax habit requires backups. Actively hunting for more to add to the pile.',
    category: 'Retro Tech',
    priority: 'high',
    link: 'https://www.ebay.com/itm/188499673012',
  },
  {
    id: 'betamax-vhs-movies',
    name: 'Movies for the Betamax / VHS Collection',
    description:
      "Now that I'm accumulating players, I need something to actually play on them. Haven't locked in specific titles yet, so this part of the list is TBD and will keep growing.",
    category: 'Movies',
    priority: 'low',
  },
  {
    id: '2004-imac',
    name: '2004 iMac',
    description:
      "That exact era of iMac, before I forget which desk it's supposed to sit on. A perfect centerpiece for the retro tech shelf.",
    category: 'Retro Tech',
    priority: 'high',
  },
  {
    id: 'mrs-maisel-haggadah',
    name: '"Mrs. Maisel" Haggadah',
    description:
      'A Haggadah themed after The Marvelous Mrs. Maisel. Extremely niche, extremely on brand for me.',
    category: 'Judaica',
    priority: 'medium',
  },
];
