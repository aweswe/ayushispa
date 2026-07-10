export interface Treatment {
  id: number;
  title: string;
  desc: string;
  duration: string;
  price: string;
  image: string;
}

export const TREATMENTS: Treatment[] = [
  {
    id: 1,
    title: 'The Somatic Body Ritual',
    desc: 'A deeply restorative full-body therapy focusing on meridian pathway release and physical alignment using warm, house-blended cedarwood oil.',
    duration: '90 Minutes',
    price: '₹6,500',
    image: '/images/treatment_somatic.png',
  },
  {
    id: 2,
    title: 'The Floral Aromatherapy',
    desc: 'A slow, sensory massage employing rare, cold-pressed absolute essences of jasmine, lavender, and vetiver to calm the nervous system and clear mental fatigue.',
    duration: '75 Minutes',
    price: '₹5,500',
    image: '/images/treatment_aroma.png',
  },
  {
    id: 3,
    title: 'The Botanical Clay Face Therapy',
    desc: 'An advanced hydration facial using wild-harvested rose hydrosols, active mineral clays, and skin massage to reveal a healthy, natural glow.',
    duration: '60 Minutes',
    price: '₹4,800',
    image: '/images/treatment_facial.png',
  },
  {
    id: 4,
    title: 'The Volcanic Stone & Thermal Suite',
    desc: 'Dry cedarwood sauna heat followed by smooth, heated volcanic basalt stones strategically placed to radiate deep warmth and unlock tense energetic pathways.',
    duration: '90 Minutes',
    price: '₹7,000',
    image: '/images/treatment_stones.png',
  },
];
