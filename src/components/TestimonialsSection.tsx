import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function TestimonialsSection() {
  const { testimonials } = PORTFOLIO_DATA;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 relative bg-gray-50/50 dark:bg-[#151518]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF5A1F] mb-3">
            <Quote className="w-4 h-4" />
            <span>Chapter 07 — Testimonials & Recommendations</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-gray-900 dark:text-white tracking-tight">
            WHAT PROFESSORS & MANAGERS SAY.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 font-normal">
            Feedback from academic department heads, internship leads, and hackathon judges.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative p-8 sm:p-12 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800/80 shadow-xl max-w-4xl mx-auto">
          
          {/* Quote Icon */}
          <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-950/40 text-[#FF5A1F] flex items-center justify-center mb-6">
            <Quote className="w-6 h-6" />
          </div>

          {/* Active Testimonial Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>

            <p className="text-base sm:text-xl font-medium text-gray-800 dark:text-gray-200 leading-relaxed italic">
              "{testimonials[currentIndex].quote}"
            </p>

            <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#FF5A1F]"
              />
              <div>
                <h4 className="font-heading font-bold text-base text-gray-900 dark:text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-xs text-gray-500 font-medium">
                  {testimonials[currentIndex].role} • <span className="text-[#FF5A1F]">{testimonials[currentIndex].company}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-8 right-8 flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-[#FF5A1F] hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-[#FF5A1F] hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
