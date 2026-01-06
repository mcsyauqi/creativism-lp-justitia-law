import React from 'react';
import { Linkedin, Mail, Award, GraduationCap, Globe, Users, ArrowRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const partners = [
  {
    name: 'Ir. Handoko Santoso, S.H., M.H., LL.M.',
    position: 'Managing Partner',
    expertise: 'Corporate M&A, Capital Markets',
    education: 'UI, Harvard Law School',
    experience: '25+ tahun pengalaman, formerly partner at Big 4 law firm',
    notable: 'Lead counsel untuk merger bank senilai Rp 50 Triliun',
    languages: ['Indonesia', 'English', 'Mandarin'],
    image: 'HS',
  },
  {
    name: 'Dr. Amanda Wijaya, S.H., M.H.',
    position: 'Senior Partner - Litigation',
    expertise: 'Commercial Litigation, Arbitration',
    education: 'UGM, NUS Singapore',
    experience: '20+ tahun, 200+ cases di Pengadilan Niaga',
    notable: 'Won landmark case yang menjadi yurisprudensi di MA',
    languages: ['Indonesia', 'English'],
    image: 'AW',
  },
  {
    name: 'Reza Prasetya, S.H., LL.M.',
    position: 'Partner - Startup & Tech',
    expertise: 'Startup Legal, VC Deals, Data Privacy',
    education: 'UI, UC Berkeley',
    experience: '15+ tahun, formerly in-house at tech unicorn',
    notable: 'Legal advisor untuk 50+ startup yang sudah dapat funding',
    languages: ['Indonesia', 'English'],
    image: 'RP',
  },
  {
    name: 'Siti Nurhaliza, S.H., M.Kn.',
    position: 'Partner - Employment',
    expertise: 'Labor Law, Industrial Relations',
    education: 'Unpad, Leiden University',
    experience: '18+ tahun, expert witness di PHI',
    notable: 'Author buku Hukum Ketenagakerjaan best-seller',
    languages: ['Indonesia', 'English', 'Dutch'],
    image: 'SN',
  },
];

const teamStats = [
  { value: '12', label: 'Partners' },
  { value: '25', label: 'Senior Associates' },
  { value: '15', label: 'Junior Associates' },
  { value: '5+', label: 'Jurisdictions' },
];

export default function Team() {
  return (
    <section id="team" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-navy-900/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <SectionHeader
          title="Tim Kami"
          subtitle="50+ lawyer berpengalaman dengan diverse expertise. Kombinasi pengalaman, pengetahuan, dan dedikasi untuk memberikan hasil terbaik bagi klien."
        />

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {teamStats.map((stat, index) => (
            <div key={index} className="text-center bg-navy-900/5 rounded-2xl p-6">
              <div className="stat-number text-gold-600">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Photo placeholder */}
                <div className="sm:w-48 h-48 sm:h-auto bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center flex-shrink-0">
                  <div className="text-4xl font-heading font-bold text-white/30">
                    {partner.image}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 flex-1">
                  <h3 className="text-lg font-bold text-navy-900 font-heading mb-1">
                    {partner.name}
                  </h3>
                  <p className="text-gold-600 font-semibold text-sm mb-3">
                    {partner.position}
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-navy-900 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{partner.expertise}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <GraduationCap className="w-4 h-4 text-navy-900 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{partner.education}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Globe className="w-4 h-4 text-navy-900 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{partner.languages.join(', ')}</span>
                    </div>
                  </div>

                  {/* Notable achievement */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-700 italic">
                      "{partner.notable}"
                    </p>
                  </div>

                  {/* Social links */}
                  <div className="flex gap-3 mt-4">
                    <a href="#" className="w-8 h-8 bg-navy-900/10 hover:bg-navy-900 rounded-lg flex items-center justify-center text-navy-900 hover:text-white transition-colors duration-200">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 bg-navy-900/10 hover:bg-navy-900 rounded-lg flex items-center justify-center text-navy-900 hover:text-white transition-colors duration-200">
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Multi-jurisdictional note */}
        <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8 text-center text-white">
          <Users className="w-12 h-12 mx-auto mb-4 text-gold-400" />
          <h3 className="text-xl font-bold mb-3 font-heading">
            Multi-Jurisdictional Experience
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-6">
            Tim kami memiliki pengalaman praktik di berbagai yurisdiksi termasuk Singapore, Malaysia, Australia, dan negara-negara ASEAN lainnya.
          </p>
          <a
            href="#contact"
            className="btn-gold inline-flex"
          >
            Lihat Profil Lengkap Tim
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
