export interface ValueItem {
  id: number;
  title: string;
  desc: string;
  iconName: string;
}

export const VALUE_ITEMS: ValueItem[] = [
  {
    id: 1,
    title: 'Self-Contained Suites',
    desc: 'Designed for complete visual and auditory isolation, featuring private marble steam rooms, rainfall showers, and personal dressing spaces.',
    iconName: 'suites',
  },
  {
    id: 2,
    title: 'Fresh Formulations',
    desc: 'Prepared daily in copper vessels using raw, cold-pressed seed oils, fresh herbs, and rare botanical distillates, free from chemical preservatives.',
    iconName: 'products',
  },
  {
    id: 3,
    title: 'Master Practitioners',
    desc: 'Our certified therapists undergo 200+ hours of annual training in physical anatomy, meridian mapping, and somatic release systems.',
    iconName: 'experts',
  },
  {
    id: 4,
    title: 'Somatic Care',
    desc: 'Treatments designed to target nervous system exhaustion and chronic muscle stress through structured breathing, touch, and heat.',
    iconName: 'holistic',
  },
];
