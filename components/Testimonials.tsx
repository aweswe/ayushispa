'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  rating: number;
  image: string;
}

export default function Testimonials() {
  const list: Testimonial[] = [
    {
      id: 1,
      quote: '“The absolute silence is what strikes you first. At Luxury Delhi Spa, wellness is not just a treatment—it is a complete restoration of the soul. The private bath suites are an architectural revelation.”',
      author: 'Sarah Jenkins',
      role: 'Google Review · Verified Guest',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 2,
      quote: '“A masterclass in editorial minimalism and premium hospitality. The therapists have an intuitive understanding of physical and somatic fatigue. Unquestionably world-class.”',
      author: 'Julian Vance',
      role: 'Google Review · Verified Guest',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    },
    {
      id: 3,
      quote: '“The botanical massage oils are incredible, formulated with raw rosehip and frankincense. It feels closer to walking through an ancient rain-washed forest than a spa.”',
      author: 'Elena Rostova',
      role: 'Google Review · Verified Guest',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000); // 7 seconds slow scroll

    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleNext = () => {
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % list.length);
      setAnimating(false);
    }, 500); // sync with CSS fade transition
  };

  const setSlide = (idx: number) => {
    if (idx === activeIndex) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex(idx);
      setAnimating(false);
    }, 500);
  };

  return (
    <section id="testimonials" className="section-spacing testimonials-section">
      {/* Decorative Line */}
      <div className="organic-decoration test-deco-1">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M170,10 C120,80 30,100 10,170" stroke="#C6B8A7" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="10" cy="170" r="3" fill="#C6B8A7" />
        </svg>
      </div>

      <div className="container">
        <div className="testimonials-slider">
          <div className={`testimonial-content ${animating ? 'fade-out' : 'fade-in'}`}>
            {/* Google Rating Stars */}
            <div className="rating-stars" aria-label="5 out of 5 stars">
              {Array.from({ length: list[activeIndex].rating }).map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="testimonial-quote">
              {list[activeIndex].quote}
            </blockquote>

            {/* Author Meta */}
            <div className="testimonial-author-block">
              <div className="author-portrait-wrapper">
                <Image
                  src={list[activeIndex].image}
                  alt={list[activeIndex].author}
                  fill
                  sizes="120px"
                  className="author-portrait"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="author-details">
                <cite className="author-name">{list[activeIndex].author}</cite>
                <span className="author-role">{list[activeIndex].role}</span>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="slider-dots">
            {list.map((_, idx) => (
              <button
                key={idx}
                className={`slider-dot ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => setSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
