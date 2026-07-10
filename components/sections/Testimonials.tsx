'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { TESTIMONIALS } from '@/data/testimonials';

export default function Testimonials() {

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
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
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
              {Array.from({ length: TESTIMONIALS[activeIndex].rating }).map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="testimonial-quote">
              {TESTIMONIALS[activeIndex].quote}
            </blockquote>

            {/* Author Meta */}
            <div className="testimonial-author-block">
              <div className="author-portrait-wrapper">
                <Image
                  src={TESTIMONIALS[activeIndex].image}
                  alt={TESTIMONIALS[activeIndex].author}
                  fill
                  sizes="120px"
                  className="author-portrait"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="author-details">
                <cite className="author-name">{TESTIMONIALS[activeIndex].author}</cite>
                <span className="author-role">{TESTIMONIALS[activeIndex].role}</span>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="slider-dots">
            {TESTIMONIALS.map((_, idx) => (
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
