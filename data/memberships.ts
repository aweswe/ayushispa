export interface MembershipTier {
  id: number;
  name: string;
  price: string;
  term: string;
  description: string;
  features: string[];
  cta: string;
  featured: boolean;
}

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: 1,
    name: 'Essential',
    price: '₹5,500',
    term: 'monthly',
    description: 'Designed for standard, mindful upkeep of your personal well-being.',
    features: [
      'One 75-minute curated ritual per month',
      'Daily access to the quiet bathhouse & steam rooms',
      'Complimentary house-formulated herbal infusions',
      '10% savings on additional treatments and products',
    ],
    cta: 'Apply for Membership',
    featured: false,
  },
  {
    id: 2,
    name: 'Signature',
    price: '₹10,000',
    term: 'monthly',
    description: 'Our recommended tier for comprehensive, regular therapeutic care.',
    features: [
      'Two 75-minute curated rituals per month',
      'Unlimited access to the thermal & botanical suites',
      'Priority booking and advanced reservation window',
      'One complimentary guest invitation card quarterly',
      '15% savings on all retail apothecary and products',
    ],
    cta: 'Apply for Membership',
    featured: true,
  },
  {
    id: 3,
    name: 'Elite',
    price: '₹18,000',
    term: 'monthly',
    description: 'An all-inclusive premium access pass for uncompromised luxury.',
    features: [
      'Four 90-minute bespoke rituals per month',
      'Private treatment suite access (subject to booking)',
      'Personalized bi-monthly somatic wellness plan',
      'Unlimited bathhouse access with up to two guests',
      'Dedicated member concierge line and valet service',
    ],
    cta: 'Inquire for Invitation',
    featured: false,
  },
];
