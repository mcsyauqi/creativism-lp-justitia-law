import React from 'react';
import { Clock, FileCheck, Calendar, Trophy, Info, CheckCircle } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const feeTypes = [
  {
    icon: Clock,
    title: 'Hourly Rate',
    bestFor: 'Matters yang scope-nya sulit diprediksi',
    range: 'Rp 2.000.000 - Rp 8.000.000 per jam',
    details: 'Tergantung seniority lawyer',
    features: [
      'Detailed time record',
      'Billing setiap bulan',
      'Flexible untuk complex matters',
      'Transparent time tracking',
    ],
    color: 'navy',
  },
  {
    icon: FileCheck,
    title: 'Fixed Fee',
    bestFor: 'Matters dengan scope yang jelas',
    range: 'Mulai Rp 3.000.000',
    details: 'Predictable, no bill anxiety',
    features: [
      'Pendirian PT standar: Rp 15-25 juta',
      'Contract review sederhana: Rp 3-5 juta',
      'Trademark registration: Rp 8-12 juta',
      'Clear deliverables upfront',
    ],
    popular: true,
    color: 'gold',
  },
  {
    icon: Calendar,
    title: 'Retainer',
    bestFor: 'Ongoing legal needs',
    range: 'Mulai Rp 15 juta/bulan',
    details: 'Monthly fee untuk dedicated support',
    features: [
      'Sejumlah jam atau scope tertentu',
      'Priority response time',
      'Discounted hourly rate',
      'Regular legal health check',
    ],
    color: 'forest',
  },
  {
    icon: Trophy,
    title: 'Success Fee',
    bestFor: 'Litigation dan debt collection',
    range: 'Base fee + percentage',
    details: 'Fee berbasis hasil yang dicapai',
    features: [
      'Lower upfront cost',
      'Aligned interests',
      'Percentage of recovery',
      'Win-win arrangement',
    ],
    color: 'navy',
  },
];

const colorClasses = {
  navy: {
    bg: 'bg-navy-900',
    bgLight: 'bg-navy-900/10',
    text: 'text-navy-900',
    border: 'border-navy-900',
  },
  gold: {
    bg: 'bg-gold-600',
    bgLight: 'bg-gold-600/10',
    text: 'text-gold-600',
    border: 'border-gold-600',
  },
  forest: {
    bg: 'bg-forest-600',
    bgLight: 'bg-forest-600/10',
    text: 'text-forest-600',
    border: 'border-forest-600',
  },
};

export default function FeeStructure() {
  return (
    <section id="fees" className="section-padding bg-light relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30" />

      <div className="container-custom relative z-10">
        <SectionHeader
          title="Struktur Biaya yang Transparan"
          subtitle="No surprise, no hidden fees. Kami percaya transparansi adalah fondasi kepercayaan. Setiap engagement dimulai dengan clarity tentang biaya."
        />

        {/* Fee types grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {feeTypes.map((fee, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                ${fee.popular ? 'border-gold-600' : 'border-transparent'}`}
            >
              {/* Popular badge */}
              {fee.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${colorClasses[fee.color].bgLight} flex items-center justify-center mb-4`}>
                <fee.icon className={`w-7 h-7 ${colorClasses[fee.color].text}`} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-navy-900 mb-2 font-heading">
                {fee.title}
              </h3>

              {/* Best for */}
              <p className="text-sm text-gray-500 mb-4">
                Best for: {fee.bestFor}
              </p>

              {/* Range */}
              <div className={`text-lg font-bold ${colorClasses[fee.color].text} mb-1`}>
                {fee.range}
              </div>
              <p className="text-sm text-gray-600 mb-6">
                {fee.details}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {fee.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className={`w-4 h-4 ${colorClasses[fee.color].text} flex-shrink-0 mt-0.5`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Free consultation note */}
        <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 bg-gold-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Info className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 font-heading">
                Konsultasi Awal GRATIS
              </h3>
              <p className="text-white/80">
                Konsultasi awal 30-60 menit tidak dipungut biaya. Setelah itu, kami akan jelaskan fee structure
                yang sesuai dengan kebutuhan Anda sebelum engagement dimulai. No surprise, no pressure.
              </p>
            </div>
            <a href="#contact" className="btn-gold flex-shrink-0">
              Jadwalkan Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
