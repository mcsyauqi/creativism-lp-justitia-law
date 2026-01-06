import React from 'react';
import { Linkedin, Mail, Award, GraduationCap, Globe, Users, ArrowRight, User } from 'lucide-react';
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
    initials: 'HS',
    gender: 'male',
  },
  {
    name: 'Dr. Amanda Wijaya, S.H., M.H.',
    position: 'Senior Partner - Litigation',
    expertise: 'Commercial Litigation, Arbitration',
    education: 'UGM, NUS Singapore',
    experience: '20+ tahun, 200+ cases di Pengadilan Niaga',
    notable: 'Won landmark case yang menjadi yurisprudensi di MA',
    languages: ['Indonesia', 'English'],
    initials: 'AW',
    gender: 'female',
  },
  {
    name: 'Reza Prasetya, S.H., LL.M.',
    position: 'Partner - Startup & Tech',
    expertise: 'Startup Legal, VC Deals, Data Privacy',
    education: 'UI, UC Berkeley',
    experience: '15+ tahun, formerly in-house at tech unicorn',
    notable: 'Legal advisor untuk 50+ startup yang sudah dapat funding',
    languages: ['Indonesia', 'English'],
    initials: 'RP',
    gender: 'male',
  },
  {
    name: 'Siti Nurhaliza, S.H., M.Kn.',
    position: 'Partner - Employment',
    expertise: 'Labor Law, Industrial Relations',
    education: 'Unpad, Leiden University',
    experience: '18+ tahun, expert witness di PHI',
    notable: 'Author buku Hukum Ketenagakerjaan best-seller',
    languages: ['Indonesia', 'English', 'Dutch'],
    initials: 'SN',
    gender: 'female',
  },
];

const teamStats = [
  { value: '12', label: 'Partners' },
  { value: '25', label: 'Senior Associates' },
  { value: '15', label: 'Junior Associates' },
  { value: '5+', label: 'Jurisdictions' },
];

// Professional avatar placeholder component
function AvatarPlaceholder({ initials, gender }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Person silhouette */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-navy-600/50 flex items-center justify-center mb-2 border-2 border-gold-600/30">
          <User className="w-10 h-10 sm:w-12 sm:h-12 text-white/60" />
        </div>
        <div className="text-2xl sm:text-3xl font-heading font-bold text-gold-500/80">
          {initials}
        </div>
      </div>

      {/* Decorative corner */}
      <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gold-600/20 transform rotate-45 translate-x-12 translate-y-12" />
      </div>
    </div>
  );
}

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
                <div className="sm:w-48 h-48 sm:h-auto flex-shrink-0">
                  <AvatarPlaceholder initials={partner.initials} gender={partner.gender} />
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
