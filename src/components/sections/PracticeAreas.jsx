import React, { useState } from 'react';
import { Building2, TrendingUp, FileText, Users, Scale, Lightbulb, Home, Landmark, Calculator, Shield, Heart, ChevronRight, ArrowRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const practiceAreas = [
  {
    icon: Building2,
    title: 'Corporate & Commercial',
    description: 'Pendampingan hukum untuk seluruh lifecycle perusahaan',
    services: [
      'Pendirian PT, CV, Firma',
      'Corporate restructuring',
      'Merger & Acquisition',
      'Joint venture agreements',
      'Corporate secretarial',
      'Good corporate governance',
    ],
    highlight: 'Mendampingi 200+ pendirian startup di Indonesia',
    color: 'navy',
  },
  {
    icon: TrendingUp,
    title: 'Investment & Capital Markets',
    description: 'Navigasi regulasi investasi dan pasar modal',
    services: [
      'Foreign investment (PMA)',
      'Private equity & venture capital',
      'IPO preparation',
      'Bond issuance',
      'Investment structuring',
      'OSS & licensing',
    ],
    highlight: 'Advisor untuk 3 IPO di BEI dalam 2 tahun terakhir',
    color: 'gold',
  },
  {
    icon: FileText,
    title: 'Contracts & Agreements',
    description: 'Drafting dan review kontrak yang melindungi kepentingan Anda',
    services: [
      'Commercial contracts',
      'Distribution & franchise agreements',
      'Employment contracts',
      'Shareholder agreements',
      'NDA & confidentiality',
      'Terms & conditions',
    ],
    highlight: '5,000+ kontrak di-review setiap tahun',
    color: 'forest',
  },
  {
    icon: Users,
    title: 'Employment & HR Law',
    description: 'Kepatuhan ketenagakerjaan dan hubungan industrial',
    services: [
      'Employment contract & policy',
      'HR compliance audit',
      'Termination & severance',
      'Industrial disputes',
      'Outsourcing arrangements',
      'Work permit (KITAS/KITAP)',
    ],
    highlight: 'Expert advisor untuk 100+ perusahaan',
    color: 'navy',
  },
  {
    icon: Scale,
    title: 'Dispute Resolution',
    description: 'Penyelesaian sengketa melalui berbagai mekanisme',
    services: [
      'Commercial litigation',
      'Arbitration (BANI, SIAC, ICC)',
      'Mediation & negotiation',
      'Debt collection',
      'Contract disputes',
      'Class action defense',
    ],
    highlight: '85% success rate dalam litigasi komersial',
    color: 'gold',
  },
  {
    icon: Lightbulb,
    title: 'Intellectual Property',
    description: 'Perlindungan aset tidak berwujud Anda',
    services: [
      'Trademark registration',
      'Patent filing',
      'Copyright protection',
      'IP due diligence',
      'IP licensing',
      'IP dispute resolution',
    ],
    highlight: '1,000+ trademark registrations handled',
    color: 'forest',
  },
];

const morePracticeAreas = [
  { icon: Home, name: 'Real Estate & Property' },
  { icon: Landmark, name: 'Banking & Finance' },
  { icon: Calculator, name: 'Tax Advisory' },
  { icon: Shield, name: 'Data Privacy & Technology' },
  { icon: Heart, name: 'Family Law & Estate Planning' },
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

export default function PracticeAreas() {
  const [activeArea, setActiveArea] = useState(0);

  return (
    <section id="services" className="section-padding bg-light relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-50" />

      <div className="container-custom relative z-10">
        <SectionHeader
          title="Area Praktik"
          subtitle="Expertise mendalam di berbagai bidang hukum bisnis. Apapun kebutuhan legal Anda, kami memiliki tim yang kompeten untuk menanganinya."
        />

        {/* Main Practice Areas Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 cursor-pointer
                ${activeArea === index ? `${colorClasses[area.color].border} shadow-xl` : 'border-transparent hover:shadow-xl hover:-translate-y-1'}`}
              onClick={() => setActiveArea(index)}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 rounded-xl ${colorClasses[area.color].bgLight} flex items-center justify-center flex-shrink-0`}>
                  <area.icon className={`w-7 h-7 ${colorClasses[area.color].text}`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900 font-heading mb-1">
                    {area.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {area.description}
                  </p>
                </div>
              </div>

              {/* Services list */}
              <ul className="space-y-2 mb-4">
                {area.services.slice(0, 4).map((service, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <ChevronRight className={`w-4 h-4 ${colorClasses[area.color].text}`} />
                    {service}
                  </li>
                ))}
                {area.services.length > 4 && (
                  <li className="text-sm text-gray-500 pl-6">
                    +{area.services.length - 4} layanan lainnya
                  </li>
                )}
              </ul>

              {/* Highlight */}
              <div className={`${colorClasses[area.color].bgLight} rounded-lg p-3`}>
                <p className={`text-sm font-semibold ${colorClasses[area.color].text}`}>
                  {area.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* More Practice Areas */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-navy-900 mb-6 text-center font-heading">
            Layanan Hukum Lainnya
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {morePracticeAreas.map((area, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gray-50 hover:bg-navy-900/5 rounded-xl px-5 py-3 transition-colors duration-200"
              >
                <area.icon className="w-5 h-5 text-navy-900" />
                <span className="text-gray-700 font-medium">{area.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="btn-primary"
          >
            Konsultasikan Kebutuhan Hukum Anda
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
