import React, { useState } from 'react';
import { Clock, User, ArrowRight, Mail, CheckCircle, Building2, Users, Rocket, FileText, Scale, BookOpen } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const articles = [
  {
    category: 'Corporate Law',
    title: 'Perubahan UU Cipta Kerja 2023: Implikasi untuk Bisnis Anda',
    excerpt: 'Omnibus law yang direvisi membawa perubahan signifikan dalam berbagai aspek bisnis. Berikut yang perlu diperhatikan oleh pelaku usaha...',
    readTime: '8 min read',
    author: 'Tim Corporate',
    icon: Building2,
    color: 'navy',
  },
  {
    category: 'Employment',
    title: 'Panduan Lengkap PHK 2024: Prosedur, Kompensasi, dan Risiko',
    excerpt: 'Dengan perubahan regulasi, proses PHK memerlukan pendekatan baru. Artikel ini membahas prosedur yang benar dan risiko hukum yang perlu dihindari...',
    readTime: '12 min read',
    author: 'Siti Nurhaliza, S.H.',
    icon: Users,
    color: 'gold',
  },
  {
    category: 'Startup',
    title: 'SAFE vs Convertible Note: Mana yang Tepat untuk Startup Anda?',
    excerpt: 'Dua instrumen fundraising ini punya karakteristik berbeda. Memilih yang tepat bisa berdampak signifikan pada masa depan startup Anda...',
    readTime: '6 min read',
    author: 'Reza Prasetya, S.H.',
    icon: Rocket,
    color: 'forest',
  },
];

const colorClasses = {
  navy: {
    bg: 'from-navy-800 to-navy-900',
    iconBg: 'bg-navy-700/50',
    accent: 'bg-gold-600',
  },
  gold: {
    bg: 'from-gold-500 to-gold-700',
    iconBg: 'bg-gold-400/30',
    accent: 'bg-navy-900',
  },
  forest: {
    bg: 'from-forest-500 to-forest-700',
    iconBg: 'bg-forest-400/30',
    accent: 'bg-gold-600',
  },
};

// Article image placeholder with icon and pattern
function ArticleImagePlaceholder({ icon: Icon, color, category }) {
  return (
    <div className={`h-48 bg-gradient-to-br ${colorClasses[color].bg} relative overflow-hidden`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id={`pattern-${color}`} width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1.5" fill="white"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill={`url(#pattern-${color})`} />
        </svg>
      </div>

      {/* Decorative shapes */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
      <div className="absolute -top-5 -left-5 w-24 h-24 rounded-full bg-white/5" />

      {/* Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`w-20 h-20 rounded-2xl ${colorClasses[color].iconBg} backdrop-blur-sm flex items-center justify-center border border-white/20`}>
          <Icon className="w-10 h-10 text-white" />
        </div>
      </div>

      {/* Category badge */}
      <div className="absolute top-4 left-4">
        <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
          {category}
        </span>
      </div>

      {/* Book icon for article */}
      <div className="absolute bottom-4 right-4">
        <BookOpen className="w-5 h-5 text-white/40" />
      </div>
    </div>
  );
}

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
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Image placeholder */}
              <ArticleImagePlaceholder
                icon={article.icon}
                color={article.color}
                category={article.category}
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-navy-900 mb-3 font-heading group-hover:text-gold-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="w-4 h-4" />
                    <span className="truncate max-w-[120px]">{article.author}</span>
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
            className="inline-flex items-center text-navy-900 font-semibold hover:text-gold-600 transition-colors group"
          >
            Baca Semua Artikel
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Newsletter signup */}
        <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

          <div className="max-w-2xl mx-auto text-center relative z-10">
            <div className="w-16 h-16 bg-gold-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-gold-600/30">
              <Mail className="w-8 h-8 text-gold-400" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-heading">
              Legal Updates Langsung ke Inbox Anda
            </h3>
            <p className="text-white/70 mb-8">
              Subscribe untuk legal updates 2x per bulan. Curated insights tentang perubahan regulasi,
              tips praktis, dan analisis hukum yang relevan untuk bisnis Anda.
            </p>

            {subscribed ? (
              <div className="flex items-center justify-center gap-3 bg-forest-600/20 rounded-xl p-4 border border-forest-600/30">
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
