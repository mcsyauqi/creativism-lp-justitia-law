import React from 'react';
import { Scale, Phone, Mail, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';

const practiceAreas = [
  { name: 'Corporate & M&A', href: '#services' },
  { name: 'Litigation & Arbitration', href: '#services' },
  { name: 'Employment Law', href: '#services' },
  { name: 'Intellectual Property', href: '#services' },
  { name: 'Startup & Tech', href: '#services' },
  { name: 'All Practice Areas', href: '#services' },
];

const firmLinks = [
  { name: 'About Us', href: '#why-us' },
  { name: 'Our Team', href: '#team' },
  { name: 'Careers', href: '#' },
  { name: 'News & Insights', href: '#insights' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Firm info */}
          <div className="lg:col-span-1">
            <a href="#hero" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center">
                <Scale className="w-6 h-6 text-gold-600" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-white">
                  Justitia
                </span>
                <span className="font-heading font-bold text-xl text-gold-400">
                  {' '}& Partners
                </span>
              </div>
            </a>
            <p className="text-white/60 mb-4 leading-relaxed">
              Your Trusted Legal Partner
            </p>
            <p className="text-white/40 text-sm mb-6">
              Established 2008
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-gold-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Practice Areas</h3>
            <ul className="space-y-3">
              {practiceAreas.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Firm links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Firm</h3>
            <ul className="space-y-3">
              {firmLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="flex items-start gap-3 text-white/60 hover:text-gold-400 transition-colors duration-200"
                >
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">
                    Plaza Kuningan, Menara Selatan Lt. 25<br />
                    Jl. HR Rasuna Said Kav. C11-14<br />
                    Jakarta 12940
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:021555LEGAL"
                  className="flex items-center gap-3 text-white/60 hover:text-gold-400 transition-colors duration-200"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>021-555-LEGAL</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:consult@justitiapartners.co.id"
                  className="flex items-center gap-3 text-white/60 hover:text-gold-400 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>consult@justitiapartners.co.id</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-white/40">
              <span>© {currentYear} Justitia & Partners</span>
              <span className="hidden md:inline">|</span>
              <span>Created by <a href="#" className="hover:text-gold-400 transition-colors">Creativism</a></span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/40">
              <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold-400 transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-gold-400 transition-colors">Disclaimer</a>
            </div>
          </div>

          {/* Legal disclaimer */}
          <div className="mt-6 pt-6 border-t border-white/5">
            <p className="text-xs text-white/30 text-center max-w-4xl mx-auto leading-relaxed">
              Informasi di website ini bersifat umum dan bukan merupakan legal advice. Konten yang disajikan
              tidak dimaksudkan untuk menciptakan hubungan advokat-klien. Konsultasikan situasi spesifik Anda
              dengan lawyer kami untuk advice yang sesuai dengan kebutuhan Anda.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
