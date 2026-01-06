import React from 'react';
import { Quote, Star } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const testimonials = [
  {
    quote: 'Justitia & Partners bukan sekadar law firm kami, tapi true business partner. Mereka mengerti bahwa advice hukum harus practical dan bisa dieksekusi. Response time mereka luar biasa — di dunia startup yang fast-paced, ini sangat penting.',
    name: 'CEO, Tech Startup (Series B)',
    service: 'Corporate & VC Fundraising',
    rating: 5,
  },
  {
    quote: 'Sudah 10 tahun menggunakan Justitia untuk semua kebutuhan legal perusahaan kami. Dari drafting kontrak sampai handle dispute, kualitasnya konsisten excellent. Fee structure mereka juga fair dan predictable.',
    name: 'General Counsel, Multinational Manufacturing Company',
    service: 'Full-service Legal',
    rating: 5,
  },
  {
    quote: 'Ketika kami facing litigation yang cukup kompleks, Pak Handoko dan tim memberikan strategy yang brilliant. Case yang awalnya kami pikir akan kalah, ternyata bisa kami menangkan. Their courtroom skill is exceptional.',
    name: 'Director, Trading Company',
    service: 'Commercial Litigation',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

      {/* Quote decorations */}
      <div className="absolute top-20 left-10 opacity-10">
        <Quote className="w-32 h-32 text-white" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10 rotate-180">
        <Quote className="w-32 h-32 text-white" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-heading">
            Apa Kata Klien Kami
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Kepercayaan klien adalah aset terbesar kami. Berikut adalah beberapa testimoni dari klien yang telah bekerja sama dengan kami.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white/90 leading-relaxed mb-6 text-lg">
                "{item.quote}"
              </blockquote>

              {/* Author */}
              <div className="pt-6 border-t border-white/20">
                <div className="font-semibold text-white mb-1">
                  {item.name}
                </div>
                <div className="text-sm text-gold-400">
                  {item.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gold-400 font-heading mb-2">98%</div>
            <div className="text-white/70">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gold-400 font-heading mb-2">85%</div>
            <div className="text-white/70">Repeat Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gold-400 font-heading mb-2">4.9</div>
            <div className="text-white/70">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gold-400 font-heading mb-2">500+</div>
            <div className="text-white/70">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}
