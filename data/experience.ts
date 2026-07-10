export interface ExperienceBlock {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  iconName: string; // Storing metadata/reference for the SVG icon
}

export const EXPERIENCE_BLOCKS: ExperienceBlock[] = [
  {
    id: 1,
    title: 'Personalized Care',
    subtitle: 'Tailored to your body\'s unique rhythm.',
    desc: 'We do not believe in uniform experiences. Every treatment begins with a private consultation with your therapist to understand your physical state, emotional energy, and personal goals, creating a highly customized path to rejuvenation.',
    image: '/images/pillar_care.png',
    iconName: 'care',
  },
  {
    id: 2,
    title: 'Natural Products',
    subtitle: 'Pure botanicals, zero synthetic compromises.',
    desc: 'Our oils, scrubs, and facials are hand-formulated using 100% organic, wild-harvested botanicals and cold-pressed seed oils. We select ingredients like frankincense, blue chamomiles, and rosehip for their nutrient density and clean therapeutic profile.',
    image: '/images/about_detail.png',
    iconName: 'products',
  },
  {
    id: 3,
    title: 'Relaxing Atmosphere',
    subtitle: 'A sensory detox designed for slow living.',
    desc: 'Our environment is curated to lower heart rates. Soundscapes are natural, textiles are unbleached organic linen, and lighting replicates the soft, indirect glow of golden hour. Silence is encouraged throughout our hallways to create a shared sense of peace.',
    image: '/images/hero_main.png',
    iconName: 'atmosphere',
  },
  {
    id: 4,
    title: 'Expert Therapists',
    subtitle: 'Master practitioners of holistic healing.',
    desc: 'Our certified therapists undergo extensive training in anatomical alignment, meridian therapy, and somatic release techniques. They approach treatment not as a routine, but as a deliberate dialogue between touch, tension, and breathing.',
    image: '/images/about_spa.png',
    iconName: 'therapists',
  },
];
