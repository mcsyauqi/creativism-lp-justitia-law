import React from 'react';
import { MessageCircle, FileText, Users, Cog, CheckCircle, HeartHandshake, ArrowRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Initial Consultation',
    duration: '30-60 menit',
    format: 'Gratis, bisa online atau tatap muka',
    description: 'Mendengarkan masalah atau kebutuhan Anda, memberikan assessment awal, dan menjelaskan opsi yang tersedia.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Proposal & Engagement',
    duration: '2-3 hari kerja',
    format: 'Dokumen tertulis',
    description: 'Kami kirimkan proposal tertulis dengan scope of work, timeline, fee structure, dan team yang akan handle.',
  },
  {
    number: '03',
    icon: Users,
    title: 'Kick-off Meeting',
    duration: 'Sesuai kebutuhan',
    format: 'Meeting dengan team assigned',
    description: 'Deep dive ke case, request dokumen yang dibutuhkan, set communication protocol.',
  },
  {
    number: '04',
    icon: Cog,
    title: 'Execution',
    duration: 'Sesuai scope',
    format: 'Regular update via email/WhatsApp/meeting',
    description: 'Tim kami bekerja dengan milestone updates sesuai yang disepakati. Anda selalu informed.',
  },
  {
    number: '05',
    icon: CheckCircle,
    title: 'Completion & Review',
    duration: 'Upon completion',
    format: 'Deliverables + review meeting',
    description: 'Deliverables diserahkan, review meeting, feedback discussion untuk memastikan kepuasan.',
  },
  {
    number: '06',
    icon: HeartHandshake,
    title: 'Ongoing Support',
    duration: 'Optional',
    format: 'Retainer arrangement',
    description: 'Untuk banyak klien, kami provide retainer arrangement untuk support hukum berkelanjutan.',
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-navy-900/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container-custom relative z-10">
        <SectionHeader
          title="Bagaimana Kami Bekerja"
          subtitle="Proses yang jelas dari awal sampai akhir. Tidak ada misteri, tidak ada surprise. Anda tahu exactly apa yang akan terjadi di setiap tahap."
        />

        {/* Process timeline */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-24 left-8 right-8 h-0.5 bg-gradient-to-r from-navy-900 via-gold-600 to-forest-600" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  {/* Step number */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-navy-900 flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-4xl font-heading font-bold text-navy-900/10">
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-navy-900 mb-3 font-heading">
                    {step.title}
                  </h3>

                  {/* Duration & Format */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gold-600/10 text-gold-700 px-3 py-1 rounded-full font-medium">
                      {step.duration}
                    </span>
                    <span className="text-xs bg-navy-900/10 text-navy-900 px-3 py-1 rounded-full font-medium">
                      {step.format}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4 lg:hidden">
                    <ArrowRight className="w-6 h-6 text-navy-900/30 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="#contact" className="btn-primary">
            Mulai dengan Konsultasi Gratis
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
