import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const faqs = [
  {
    question: 'Berapa biaya konsultasi awal?',
    answer: 'Konsultasi awal 30-60 menit GRATIS. Ini adalah kesempatan bagi kami untuk memahami kebutuhan Anda dan bagi Anda untuk assess apakah kami fit untuk case Anda. Tidak ada commitment, tidak ada tekanan.',
  },
  {
    question: 'Apakah bisa handle case di luar Jakarta?',
    answer: 'Tentu. Kami memiliki jaringan correspondent lawyers di seluruh Indonesia dan beberapa negara ASEAN. Untuk litigasi di luar Jakarta, kami biasanya berkoordinasi dengan local counsel untuk memastikan efisiensi dan efektivitas.',
  },
  {
    question: 'Berapa lama waktu untuk pendirian PT?',
    answer: 'Dengan sistem OSS saat ini, PT standar bisa selesai dalam 2-4 minggu. Jika ada izin khusus yang diperlukan (seperti izin usaha spesifik untuk industri tertentu), timeline bisa lebih lama tergantung kompleksitasnya.',
  },
  {
    question: 'Apakah komunikasi dengan lawyer confidential?',
    answer: 'Absolutely. Attorney-client privilege adalah prinsip fundamental profesi advokat. Semua informasi yang Anda share dengan kami dijaga kerahasiaannya sesuai dengan kode etik advokat dan UU Advokat.',
  },
  {
    question: 'Kami startup early-stage dengan budget terbatas. Bisa dibantu?',
    answer: 'Kami paham realitas startup. Tersedia startup package dengan fixed fee yang lebih affordable untuk pendirian PT, ESOP setup, dan kontrak-kontrak awal. Kami juga open untuk deferred payment arrangement untuk startup dengan potensi tinggi.',
  },
  {
    question: 'Bagaimana cara mengetahui lawyer mana yang akan handle case kami?',
    answer: 'Setelah initial consultation, kami akan mengidentifikasi lawyer yang paling sesuai berdasarkan expertise dan availability. Anda akan dikenalkan dengan team yang akan handle case Anda sebelum engagement dimulai.',
  },
  {
    question: 'Apakah tersedia layanan dalam bahasa Inggris?',
    answer: 'Ya, semua partner dan sebagian besar lawyer kami fluent dalam bahasa Inggris. Kami juga bisa menyediakan dokumen dan komunikasi dalam bahasa Mandarin untuk klien tertentu.',
  },
  {
    question: 'Bagaimana jika saya tidak puas dengan layanan?',
    answer: 'Kepuasan klien adalah prioritas kami. Jika ada concern, silakan komunikasikan langsung dengan partner yang bertanggung jawab. Kami commit untuk menyelesaikan setiap keluhan secara profesional dan fair.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <SectionHeader
          title="Pertanyaan Umum"
          subtitle="Jawaban untuk pertanyaan yang sering diajukan. Tidak menemukan jawaban yang Anda cari? Jangan ragu untuk menghubungi kami."
        />

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-navy-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-navy-900 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-navy-900/5 rounded-full px-6 py-3 mb-4">
              <MessageCircle className="w-5 h-5 text-navy-900" />
              <span className="text-navy-900 font-medium">Masih punya pertanyaan?</span>
            </div>
            <p className="text-gray-600 mb-6">
              Tim kami siap membantu menjawab pertanyaan Anda.
            </p>
            <a href="#contact" className="btn-primary">
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
