import React from 'react';

export default function Contact() {
  const socialLinks = [
    {
      icon: '📸',
      href: "https://instagram.com/nardos",
      label: "Instagram",
    },
    {
      icon: '🎵',
      href: "https://tiktok.com/@nardos",
      label: "TikTok",
    },
    {
      icon: '💼',
      href: "https://linkedin.com/in/nardos",
      label: "LinkedIn",
    },
  ];

  const downloadCompCard = () => {
    alert('Comp card download will be available soon.');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600">
            Ready to work together? Let's create something amazing.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex items-center">
                <span style={{ marginRight: 12 }}>✉️</span>
                <a
                  href="mailto:hello@nardosberhane.com"
                  className="text-gray-600 hover:text-gold transition-colors duration-200 underline"
                >
                  hello@nardosberhane.com
                </a>
              </div>
              <div className="flex items-center">
                <span style={{ marginRight: 12 }}>📞</span>
                <a
                  href="tel:+251912345678"
                  className="text-gray-600 hover:text-gold transition-colors duration-200 underline"
                >
                  +251 912 345 678
                </a>
              </div>
              <div className="flex items-center">
                <span style={{ marginRight: 12 }}>📍</span>
                <span className="text-gray-600">Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>
          {/* Social & Download */}
          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-charcoal mb-4">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-charcoal text-white rounded-full flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all duration-200 transform hover:scale-110"
                    style={{ fontSize: '1.5rem', textDecoration: 'none' }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">
                Professional Materials
              </h3>
              <button
                onClick={downloadCompCard}
                className="bg-charcoal text-white hover:bg-charcoal/90 transition-all duration-200 px-4 py-2 rounded"
                style={{ border: 'none', outline: 'none', cursor: 'pointer' }}
              >
                <span style={{ marginRight: 8 }}>⬇️</span>
                Download Comp Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 