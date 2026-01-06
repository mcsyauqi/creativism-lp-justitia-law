import React, { useState } from 'react';
import { Clock, User, ArrowRight, Mail, CheckCircle } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const articles = [
  {
    category: 'Corporate Law',
    title: 'Perubahan UU Cipta Kerja 2023: Implikasi untuk Bisnis Anda',
    excerpt: 'Omnibus law yang direvisi membawa perubahan signifikan dalam berbagai aspek bisnis. Berikut yang perlu diperhatikan oleh pelaku usaha...',
    readTime: '8 min read',
    author: 'Tim Corporate',
    image: 'CL',
    color: 'navy',
  },
  {
    category: 'Employment',
    title: 'Panduan Lengkap PHK 2024: Prosedur, Kompensasi, dan Risiko',
    excerpt: 'Dengan perubahan regulasi, proses PHK memerlukan pendekatan baru. Artikel ini membahas prosedur yang benar dan risiko hukum yang perlu dihindari...',
    readTime: '12 min read',
    author: 'Siti Nurhaliza, S.H.',
    image: 'EM',
    color: 'gold',
  },
  {
    category: 'Startup',
    title: 'SAFE vs Convertible Note: Mana yang Tepat untuk Startup Anda?',
    excerpt: 'Dua instrumen fundraising ini punya karakteristik berbeda. Memilih yang tepat bisa berdampak signifikan pada masa depan startup Anda...',
    readTime: '6 min read',
    author: 'Reza Prasetya, S.H.',
    image: 'ST',
    color: 'forest',
  },
];

const colorClasses = {
  navy: 'bg-navy-900',
  gold: 'bg-gold-600',
  forest: 'bg-forest-600',
};

export default function Resources() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section id="insights" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <SectionHeader
          title="Legal Insights"
          subtitle="Pengetahuan hukum yang actionable. Artikel, update regulasi, dan insights praktis langsung dari tim lawyer kami."
        />

        {/* Articles grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className={`h-48 ${colorClasses[article.color]} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-6xl font-heading font-bold text-white/20">
                  {article.image}
                </span>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-navy-900 mb-3 font-heading group-hover:text-gold-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View all articles CTA */}
        <div className="text-center mb-16">
          <a
            href="#"
            className="inline-flex items-center text-navy-900 font-semibold hover:text-gold-600 transition-colors"
          >
            Baca Semua Artikel
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>

        {/* Newsletter signup */}
        <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="w-12 h-12 text-gold-400 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-heading">
              Legal Updates Langsung ke Inbox Anda
            </h3>
            <p className="text-white/70 mb-8">
              Subscribe untuk legal updates 2x per bulan. Curated insights tentang perubahan regulasi,
              tips praktis, dan analisis hukum yang relevan untuk bisnis Anda.
            </p>

            {subscribed ? (
              <div className="flex items-center justify-center gap-3 bg-forest-600/20 rounded-xl p-4">
                <CheckCircle className="w-6 h-6 text-forest-400" />
                <span className="text-forest-400 font-semibold">
                  Terima kasih! Anda akan menerima update terbaru kami.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Anda"
                  className="flex-1 px-5 py-4 rounded-xl border-0 focus:ring-2 focus:ring-gold-600 text-gray-900"
                  required
                />
                <button type="submit" className="btn-gold">
                  Subscribe
                </button>
              </form>
            )}

            <p className="text-white/50 text-sm mt-4">
              Tidak ada spam. Unsubscribe kapan saja.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
