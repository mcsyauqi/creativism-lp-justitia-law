import React from 'react';
import { Landmark, Cpu, Factory, ShoppingBag, Building2, Heart, Zap, Pickaxe, CheckCircle, Shield } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const cases = [
  {
    industry: 'Banking & Finance',
    icon: Landmark,
    scope: 'Lead counsel untuk merger 2 bank nasional senilai Rp 50 Triliun',
    result: 'Merger completed ahead of schedule dengan regulatory approval penuh',
    year: '2022',
    color: 'navy',
  },
  {
    industry: 'Technology',
    icon: Cpu,
    scope: 'IPO advisor untuk fintech unicorn Indonesia',
    result: 'Sukses listing di BEI dengan oversubscribed 3x',
    year: '2023',
    color: 'gold',
  },
  {
    industry: 'Manufacturing',
    icon: Factory,
    scope: 'Representing Indonesian company dalam arbitration di Singapore (SIAC)',
    result: 'Won full claim + interest, approximately USD 25 million',
    year: '2021',
    color: 'forest',
  },
  {
    industry: 'Retail',
    icon: ShoppingBag,
    scope: 'Advisory untuk restructuring 2,000 karyawan',
    result: 'Zero litigation, semua penyelesaian via mutual agreement',
    year: '2023',
    color: 'navy',
  },
];

const industries = [
  { icon: Landmark, name: 'Banking & Finance' },
  { icon: Cpu, name: 'Technology & Startup' },
  { icon: Factory, name: 'Manufacturing' },
  { icon: ShoppingBag, name: 'Retail & FMCG' },
  { icon: Building2, name: 'Property & Real Estate' },
  { icon: Heart, name: 'Healthcare' },
  { icon: Zap, name: 'Energy' },
  { icon: Pickaxe, name: 'Mining' },
];

const colorClasses = {
  navy: {
    bg: 'bg-navy-900',
    bgLight: 'bg-navy-900/10',
    text: 'text-navy-900',
  },
  gold: {
    bg: 'bg-gold-600',
    bgLight: 'bg-gold-600/10',
    text: 'text-gold-600',
  },
  forest: {
    bg: 'bg-forest-600',
    bgLight: 'bg-forest-600/10',
    text: 'text-forest-600',
  },
};

export default function NotableCases() {
  return (
    <section id="cases" className="section-padding bg-light relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-pattern opacity-30" />

      <div className="container-custom relative z-10">
        <SectionHeader
          title="Track Record Kami"
          subtitle="Beberapa highlights dari portfolio kami. Due to confidentiality, banyak case tidak dapat di-disclose, namun kami dengan senang hati mendiskusikan relevant experience dalam konsultasi."
        />

        {/* Case highlights */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {cases.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-xl ${colorClasses[item.color].bgLight} flex items-center justify-center flex-shrink-0`}>
                  <item.icon className={`w-7 h-7 ${colorClasses[item.color].text}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm font-semibold ${colorClasses[item.color].text}`}>
                      {item.industry}
                    </span>
                    <span className="text-sm text-gray-500">{item.year}</span>
                  </div>
                  <h3 className="text-navy-900 font-bold mb-3 font-heading">
                    {item.scope}
                  </h3>
                  <div className="flex items-start gap-2 bg-forest-600/10 rounded-lg p-3">
                    <CheckCircle className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-forest-700 font-medium">
                      {item.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industries served */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h3 className="text-xl font-bold text-navy-900 mb-6 text-center font-heading">
            Industries We Serve
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-navy-900/5 hover:bg-navy-900 hover:text-white rounded-full px-5 py-2.5 transition-colors duration-200 group"
              >
                <industry.icon className="w-4 h-4 text-navy-900 group-hover:text-white" />
                <span className="text-sm font-medium text-navy-900 group-hover:text-white">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Confidentiality note */}
        <div className="bg-navy-900/5 rounded-2xl p-6 flex items-start gap-4">
          <Shield className="w-8 h-8 text-navy-900 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-navy-900 mb-2">Confidentiality Notice</h4>
            <p className="text-gray-600 text-sm">
              Karena prinsip kerahasiaan advokat-klien, banyak case dan nama klien tidak dapat kami publikasikan.
              Dalam sesi konsultasi, kami akan dengan senang hati mendiskusikan pengalaman yang relevan dengan kebutuhan Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
