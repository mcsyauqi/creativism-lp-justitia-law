import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Video, Building2 } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const contactInfo = [
  {
    icon: Phone,
    label: 'Telepon',
    value: '021-555-LEGAL',
    link: 'tel:021555LEGAL',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'consult@justitiapartners.co.id',
    link: 'mailto:consult@justitiapartners.co.id',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '0812-JUSTITIA',
    link: 'https://wa.me/62812JUSTITIA',
  },
];

const categories = [
  'Corporate & M&A',
  'Litigation & Arbitration',
  'Employment Law',
  'Intellectual Property',
  'Startup & Tech',
  'Lainnya',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: '',
    description: '',
    method: 'online',
    datetime: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-light relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-pattern opacity-30" />

      <div className="container-custom relative z-10">
        <SectionHeader
          title="Jadwalkan Konsultasi"
          subtitle="30 menit konsultasi awal GRATIS untuk membahas kebutuhan hukum Anda. Tidak ada commitment, tidak ada tekanan."
        />

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
                <div className="w-20 h-20 bg-forest-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-forest-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-heading">
                  Permintaan Diterima!
                </h3>
                <p className="text-gray-600 mb-6">
                  Terima kasih telah menghubungi kami. Tim kami akan segera menghubungi Anda
                  dalam waktu 1x24 jam untuk mengkonfirmasi jadwal konsultasi.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                >
                  Kirim Permintaan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input-field"
                      required
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Perusahaan (jika ada)
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nomor Telepon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field"
                      required
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Kategori Kebutuhan *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="input-field"
                      required
                    >
                      <option value="">Pilih kategori...</option>
                      {categories.map((cat, index) => (
                        <option key={index} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred date/time */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Waktu yang Diinginkan
                    </label>
                    <input
                      type="datetime-local"
                      name="datetime"
                      value={formData.datetime}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>

                  {/* Description */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Deskripsi Singkat Kebutuhan *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={4}
                      className="input-field resize-none"
                      placeholder="Ceritakan singkat tentang kebutuhan hukum Anda..."
                      required
                    />
                  </div>

                  {/* Consultation method */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Metode Konsultasi yang Diinginkan *
                    </label>
                    <div className="flex flex-wrap gap-4">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="method"
                          value="online"
                          checked={formData.method === 'online'}
                          onChange={handleChange}
                          className="w-4 h-4 text-navy-900 focus:ring-navy-900"
                        />
                        <Video className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-700">Online Video Call</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="method"
                          value="office"
                          checked={formData.method === 'office'}
                          onChange={handleChange}
                          className="w-4 h-4 text-navy-900 focus:ring-navy-900"
                        />
                        <Building2 className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-700">Tatap Muka di Kantor</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="mt-8">
                  <button type="submit" className="btn-primary w-full md:w-auto">
                    <Send className="w-5 h-5 mr-2" />
                    Kirim Permintaan Konsultasi
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact info sidebar */}
          <div className="space-y-6">
            {/* Quick contact */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-navy-900 mb-4 font-heading">
                Hubungi Kami Langsung
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="flex items-center gap-4 p-3 bg-gray-50 hover:bg-navy-900/5 rounded-xl transition-colors"
                  >
                    <div className="w-10 h-10 bg-navy-900/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-navy-900" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">{item.label}</div>
                      <div className="font-semibold text-navy-900">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Office location */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-navy-900 mb-4 font-heading">
                Lokasi Kantor
              </h3>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-gold-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <div className="font-semibold text-navy-900 mb-1">
                    Justitia & Partners
                  </div>
                  <p className="text-gray-600 text-sm">
                    Plaza Kuningan, Menara Selatan Lt. 25<br />
                    Jl. HR Rasuna Said Kav. C11-14<br />
                    Jakarta 12940
                  </p>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="h-48 bg-gray-200 rounded-xl flex items-center justify-center">
                <span className="text-gray-500 text-sm">Google Maps</span>
              </div>
            </div>

            {/* Office hours */}
            <div className="bg-navy-900 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-gold-400" />
                <h3 className="text-lg font-bold font-heading">Jam Operasional</h3>
              </div>
              <div className="space-y-2 text-white/80">
                <div className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span className="font-semibold text-white">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu</span>
                  <span className="font-semibold text-white">09:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Minggu</span>
                  <span className="text-white/50">Tutup</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-sm text-gold-400">
                  24/7 Legal Hotline untuk emergency
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
