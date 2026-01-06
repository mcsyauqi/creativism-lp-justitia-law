import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Scale } from 'lucide-react';

const navLinks = [
  { name: 'Beranda', href: '#hero' },
  { name: 'Mengapa Kami', href: '#why-us' },
  { name: 'Layanan', href: '#services' },
  { name: 'Tim', href: '#team' },
  { name: 'Track Record', href: '#cases' },
  { name: 'Proses', href: '#process' },
  { name: 'Biaya', href: '#fees' },
  { name: 'Insights', href: '#insights' },
  { name: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center">
              <Scale className="w-6 h-6 text-gold-600" />
            </div>
            <div>
              <span className={`font-heading font-bold text-xl ${isScrolled ? 'text-navy-900' : 'text-white'}`}>
                Justitia
              </span>
              <span className={`font-heading font-bold text-xl ${isScrolled ? 'text-gold-600' : 'text-gold-400'}`}>
                {' '}& Partners
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.slice(0, 5).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-navy-900'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="relative group">
              <button
                className={`text-sm font-medium transition-colors duration-200 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-navy-900'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                Lainnya
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {navLinks.slice(5).map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-navy-50 hover:text-navy-900 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:021555LEGAL"
              className={`flex items-center gap-2 text-sm font-medium ${
                isScrolled ? 'text-navy-900' : 'text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>021-555-LEGAL</span>
            </a>
            <a
              href="#contact"
              className="btn-gold px-6 py-2.5 text-sm"
            >
              Konsultasi Gratis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              isScrolled ? 'text-navy-900' : 'text-white'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t">
            <div className="container-custom py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-gray-700 hover:text-navy-900 font-medium border-b border-gray-100 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a
                  href="#contact"
                  className="btn-gold w-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Konsultasi Gratis
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
