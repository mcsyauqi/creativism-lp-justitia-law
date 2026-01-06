import React from 'react';
import { Calendar, ArrowRight, Award, Briefcase, Users, Clock, Scale, Shield, FileText } from 'lucide-react';

const stats = [
  { icon: Clock, value: '15+', label: 'Tahun Pengalaman' },
  { icon: Award, value: '500+', label: 'Kasus Sukses' },
  { icon: Users, value: '50+', label: 'Lawyer Berpengalaman' },
  { icon: Briefcase, value: '24/7', label: 'Legal Hotline' },
];

// Office building illustration component
function OfficeIllustration() {
  return (
    <div className="relative w-full h-full">
      {/* Main building silhouette */}
      <svg viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Background glow */}
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#B8860B" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#B8860B" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="building" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.15)"/>
            <stop offset="100%" stopColor="rgba(255,255,255,0.05)"/>
          </linearGradient>
        </defs>

        {/* Glow effect */}
        <ellipse cx="200" cy="250" rx="180" ry="200" fill="url(#glow)"/>

        {/* Main building */}
        <rect x="100" y="120" width="200" height="320" rx="8" fill="url(#building)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>

        {/* Windows grid */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((row) => (
          [0, 1, 2, 3].map((col) => (
            <rect
              key={`${row}-${col}`}
              x={120 + col * 45}
              y={140 + row * 35}
              width="30"
              height="20"
              rx="2"
              fill={Math.random() > 0.3 ? "rgba(184,134,11,0.4)" : "rgba(255,255,255,0.1)"}
            />
          ))
        ))}

        {/* Building top decoration */}
        <rect x="180" y="100" width="40" height="20" fill="rgba(184,134,11,0.6)"/>

        {/* Entrance */}
        <rect x="165" y="380" width="70" height="60" rx="4" fill="rgba(255,255,255,0.15)" stroke="rgba(184,134,11,0.5)" strokeWidth="2"/>

        {/* Pillars */}
        <rect x="155" y="380" width="8" height="60" fill="rgba(255,255,255,0.2)"/>
        <rect x="237" y="380" width="8" height="60" fill="rgba(255,255,255,0.2)"/>

        {/* Scale of justice on top */}
        <g transform="translate(200, 60)">
          <circle cx="0" cy="0" r="20" fill="rgba(184,134,11,0.8)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
          <path d="M0 -10L10 0V5L0 10L-10 5V0L0 -10Z" fill="white" fillOpacity="0.9"/>
        </g>
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 5L40 15V25L30 35L20 25V15L30 5Z" fill="white" fillOpacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-pattern)" />
          </svg>
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/80 to-transparent" />
      </div>

      {/* Decorative legal elements */}
      <div className="absolute top-20 right-0 w-1/3 h-full opacity-10">
        <svg viewBox="0 0 400 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full">
          <path d="M200 50L350 150V200L200 280L50 200V150L200 50Z" stroke="#B8860B" strokeWidth="2"/>
          <rect x="190" y="280" width="20" height="300" fill="#B8860B" fillOpacity="0.5"/>
          <rect x="100" y="580" width="200" height="20" rx="5" fill="#B8860B" fillOpacity="0.5"/>
          <circle cx="200" cy="150" r="30" stroke="#B8860B" strokeWidth="2"/>
        </svg>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-gold-400" />
              <span className="text-sm font-medium text-white/90">
                Established 2008 | 500+ Cases Won | Top-Tier Legal Services
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              Navigasi Kompleksitas Hukum dengan{' '}
              <span className="text-gold-400">Kepercayaan</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
              Justitia & Partners menyediakan layanan hukum komprehensif untuk bisnis dan individu.
              Dengan pengalaman 15+ tahun dan track record yang terbukti, kami adalah partner hukum
              yang memahami tujuan bisnis Anda — bukan sekadar firma hukum yang membaca pasal.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="btn-gold text-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Konsultasi Gratis
              </a>
              <a
                href="#services"
                className="btn-secondary border-white/30 text-white hover:bg-white hover:text-navy-900 text-center"
              >
                Lihat Layanan Kami
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors duration-300"
                >
                  <stat.icon className="w-6 h-6 text-gold-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Office illustration */}
              <div className="aspect-[4/5] relative">
                <OfficeIllustration />

                {/* Floating cards overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 space-y-4">
                  {/* Award card */}
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gold-600/30 flex items-center justify-center">
                        <Award className="w-6 h-6 text-gold-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">Top Law Firm</div>
                        <div className="text-sm text-white/60">Indonesia Legal Awards 2023</div>
                      </div>
                    </div>
                  </div>

                  {/* Clients card */}
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-forest-600/30 flex items-center justify-center">
                        <Users className="w-6 h-6 text-forest-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">Trusted by 500+</div>
                        <div className="text-sm text-white/60">Corporations & Startups</div>
                      </div>
                    </div>
                  </div>

                  {/* Satisfaction rate */}
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="text-sm text-white/60 mb-2">Client Satisfaction Rate</div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[98%] bg-gradient-to-r from-gold-600 to-gold-400 rounded-full animate-pulse" />
                      </div>
                      <span className="text-gold-400 font-bold text-lg">98%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge - Years of Excellence */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-br from-gold-500 to-gold-700 text-white rounded-xl p-4 shadow-2xl transform hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold font-heading">15+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>

              {/* Floating badge - Practice Areas */}
              <div className="absolute bottom-20 -right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-gold-400" />
                  <span className="text-white font-semibold text-sm">15 Practice Areas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-light to-transparent" />
    </section>
  );
}
