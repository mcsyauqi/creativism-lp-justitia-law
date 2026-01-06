import React from 'react';
import { Briefcase, Clock, Receipt, LayoutGrid, CheckCircle } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const differentiators = [
  {
    icon: Briefcase,
    title: 'Lawyer yang Mengerti Bisnis',
    description: 'Tim kami tidak hanya paham hukum, tapi juga memahami realitas bisnis. Kami memberikan advice yang practical dan implementable, bukan sekadar opini hukum teoritis yang tidak bisa diterapkan.',
    proof: 'Partner kami memiliki background di corporate sector sebelum terjun ke legal practice',
    color: 'navy',
  },
  {
    icon: Clock,
    title: 'Responsif & Mudah Dihubungi',
    description: 'Frustrasi dengan lawyer yang tidak bisa dihubungi? Kami commit untuk response time maksimal 24 jam untuk inquiry. Plus legal hotline 24/7 untuk emergency yang benar-benar urgent.',
    proof: 'Rata-rata response time: 4 jam',
    color: 'gold',
  },
  {
    icon: Receipt,
    title: 'Biaya Transparan dari Awal',
    description: 'Tidak ada surprise bill di akhir. Kami memberikan cost estimate di awal engagement dan update reguler jika ada perubahan scope. Fixed fee option tersedia untuk banyak jenis layanan.',
    proof: '90% klien memilih fixed fee arrangement',
    color: 'forest',
  },
  {
    icon: LayoutGrid,
    title: 'One-Stop Legal Solution',
    description: 'Dari pendirian PT sampai IPO, dari kontrak kerja sampai dispute resolution — semua bisa ditangani satu firm. Tidak perlu koordinasi dengan multiple law firms untuk berbagai kebutuhan.',
    proof: '15 practice areas dalam satu firm',
    color: 'navy',
  },
];

const colorClasses = {
  navy: {
    bg: 'bg-navy-900/10',
    icon: 'text-navy-900',
    accent: 'bg-navy-900',
  },
  gold: {
    bg: 'bg-gold-600/10',
    icon: 'text-gold-600',
    accent: 'bg-gold-600',
  },
  forest: {
    bg: 'bg-forest-600/10',
    icon: 'text-forest-600',
    accent: 'bg-forest-600',
  },
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-navy-900/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-gold-600/5 to-transparent rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <SectionHeader
          title="Mengapa Memilih Justitia & Partners?"
          subtitle="Pendekatan berbeda untuk hasil yang berbeda. Kami bukan sekadar law firm, tapi true business partner yang memahami goals Anda."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${colorClasses[item.color].bg} flex items-center justify-center mb-6`}>
                <item.icon className={`w-8 h-8 ${colorClasses[item.color].icon}`} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-navy-900 mb-4 font-heading">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Proof point */}
              <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                <CheckCircle className={`w-5 h-5 ${colorClasses[item.color].icon} flex-shrink-0 mt-0.5`} />
                <p className="text-sm text-gray-700 font-medium">
                  {item.proof}
                </p>
              </div>

              {/* Accent line */}
              <div className={`h-1 w-0 group-hover:w-full ${colorClasses[item.color].accent} rounded-full mt-6 transition-all duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
