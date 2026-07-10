export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  rating: number;
  image: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: '“The absolute silence is what strikes you first. At Luxury Delhi Spa, wellness is not just a treatment—it is a complete restoration of the soul. The private bath suites are an architectural revelation.”',
    author: 'Priya Sharma',
    role: 'Google Review · Gurugram Guest',
    rating: 5,
    image: '/images/portrait_priya.png',
  },
  {
    id: 2,
    quote: '“A masterclass in editorial minimalism and premium hospitality. The therapists have an intuitive understanding of physical and somatic fatigue. Unquestionably world-class.”',
    author: 'Kabir Mehta',
    role: 'Google Review · Aerocity Guest',
    rating: 5,
    image: '/images/portrait_kabir.png',
  },
  {
    id: 3,
    quote: '“The botanical massage oils are incredible, formulated with raw rosehip and frankincense. It feels closer to walking through an ancient rain-washed forest than a spa.”',
    author: 'Ananya Goel',
    role: 'Google Review · New Delhi Guest',
    rating: 5,
    image: '/images/portrait_ananya.png',
  },
];
