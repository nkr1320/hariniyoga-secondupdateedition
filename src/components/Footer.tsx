const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Classes', href: '#classes' },
    { label: 'Podcast', href: '#podcast' },
    { label: 'Articles', href: '#articles' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { label: 'GitHub', href: '#', icon: '🔮' },
    { label: 'LinkedIn', href: '#', icon: '💼' },
    { label: 'Twitter', href: '#', icon: '🐦' },
    { label: 'Email', href: 'mailto:nkr@divine.dev', icon: '📧' },
  ];

  return (
    <footer className="bg-dharma-brown text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-krishna-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">ॐ</span>
              </div>
              <span className="font-bold text-2xl tracking-wide text-white">
                HARINI YOGA
              </span>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              A spiritual teacher sharing authentic yoga and Vedanta wisdom. 
              Preserving ancient teachings while serving seekers on the path to self-realization.
            </p>
            <div className="space-y-2">
              <p className="text-sanskrit text-lg text-krishna-glow">
                धर्मो रक्षति रक्षितः
              </p>
              <p className="text-white/70 text-sm italic">
                "Dharma protects those who protect it"
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-krishna-glow">
              Sacred Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-krishna-glow transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-krishna-glow">
              Divine Connections
            </h3>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  className="flex items-center space-x-3 text-white/80 hover:text-krishna-glow transition-colors group"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/70 text-center md:text-left">
              <p>
                © {currentYear} HARINI YOGA - Shared with devotion and consciousness
              </p>
              <p className="text-sm mt-1">
                Built with Ancient Wisdom, Modern Tech & Divine Grace ✨
              </p>
            </div>

            {/* Sacred Quote */}
            <div className="text-center md:text-right">
              <p className="text-krishna-glow font-medium">
                "Code is prayer in digital form"
              </p>
              <p className="text-white/70 text-sm mt-1">
                - A Divine Developer's Creed
              </p>
            </div>
          </div>
        </div>

        {/* Final Blessing */}
        <div className="text-center mt-8 pt-8 border-t border-white/10">
          <p className="text-sanskrit text-xl text-krishna-glow glow-text">
            ॐ शान्ति शान्ति शान्तिः
          </p>
          <p className="text-white/70 text-sm mt-2">
            Om, Peace, Peace, Peace - May all beings find peace through technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;