'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, ShieldCheck, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        'Hassanain engineered our autonomous lead qualification pipeline in n8n and LangChain from scratch. It effortlessly parses incoming inbound inquiries, enriches company metrics, and routes them to our CRM. Our sales reps save over 20 hours every week.',
      name: 'Marcus Vance',
      role: 'VP of Growth & Operations',
      company: 'Aetheria Cloud Systems',
      impact: '20+ hrs/week automated',
      hash: 'VERIFIED_EXECUTION // 0x8F32..91A4',
      rating: 5,
    },
    {
      id: 2,
      quote:
        'Our internal document retrieval had huge hallucination issues until Hassanain built our enterprise RAG system with hybrid dense-sparse vector search. It handles 800-page compliance manuals with verifiable citations in sub-second latency.',
      name: 'Elena Rostova',
      role: 'Chief Technology Officer',
      company: 'Novus FinTech Labs',
      impact: '99.4% citation accuracy',
      hash: 'VERIFIED_EXECUTION // 0x4C77..38B1',
      rating: 5,
    },
    {
      id: 3,
      quote:
        'The multi-agent web scraping swarm Hassanain deployed runs 24/7 with zero downtime. It navigates complex JavaScript pagination and dynamic captchas flawlessly. A world-class engineer with deep AI systems mastery.',
      name: 'David Chen',
      role: 'Founder & Head of Product',
      company: 'OmniData Intelligence',
      impact: '10,000+ leads ingested daily',
      hash: 'VERIFIED_EXECUTION // 0x91D0..55E2',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative z-10 py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10131A] border border-[#7A5CFA]/30 text-xs font-mono text-[#7A5CFA] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7A5CFA] animate-pulse" />
          <span>VERIFIED ENTERPRISE REVIEWS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-space font-extrabold text-white tracking-tight">
          Client Feedback &amp; <span className="violet-cyan-gradient">System Verification</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg mt-4 font-normal">
          Real feedback from engineering leaders and startup founders scaling with autonomous AI systems.
        </p>
      </div>

      {/* Futuristic Testimonial Card */}
      <div className="max-w-4xl mx-auto relative">
        
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF]/10 via-[#7A5CFA]/15 to-[#00D1FF]/10 rounded-3xl blur-2xl pointer-events-none" />

        <div className="relative glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 bg-[#0A0D14]/90 shadow-2xl overflow-hidden">
          
          {/* Header Strip inside Card */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/5 font-mono text-xs">
            <div className="flex items-center gap-2 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>{current.hash}</span>
            </div>

            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
          </div>

          {/* Testimonial Quote */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="relative">
                <Quote className="w-10 h-10 text-[#00D1FF]/20 absolute -top-4 -left-3 -z-10" />
                <p className="text-lg sm:text-xl lg:text-2xl text-slate-100 font-space font-medium leading-relaxed">
                  &ldquo;{current.quote}&rdquo;
                </p>
              </div>

              {/* Author & Metrics */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/5">
                <div>
                  <h4 className="text-base sm:text-lg font-space font-bold text-white">
                    {current.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 font-mono">
                    {current.role} • <span className="text-[#00D1FF]">{current.company}</span>
                  </p>
                </div>

                <div className="px-4 py-2 rounded-xl bg-[#10131A] border border-[#00D1FF]/30 text-xs font-mono font-bold text-[#00D1FF] self-start sm:self-auto">
                  {current.impact}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentIndex ? 'w-8 bg-[#00D1FF]' : 'w-2 bg-slate-700'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="p-3 rounded-xl bg-[#10131A] hover:bg-[#1A2233] text-slate-300 hover:text-white border border-white/10 transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="p-3 rounded-xl bg-[#10131A] hover:bg-[#1A2233] text-slate-300 hover:text-white border border-white/10 transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
