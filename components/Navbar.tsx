import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 
      ${scrolled ? 'py-4 glass' : 'py-7 bg-transparent'}`}
    >
      <div className="container mx-auto px-8 flex justify-between items-center">

        {/* LOGO */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-3xl font-black fira-code tracking-tight group flex items-center transition-all duration-500 hover:scale-105"
        >
          <span className="text-slate-100 group-hover:text-cyan-400">&lt;/. </span>
          <span className="text-cyan-400 group-hover:text-white">S</span>
          <span className="text-slate-100 group-hover:text-cyan-400">R</span>
          <span className="text-cyan-400 group-hover:text-white">I</span>
          <span className="text-slate-100 group-hover:text-cyan-400">K</span>
          <span className="text-cyan-400 group-hover:text-white">A</span>
          <span className="text-slate-100 group-hover:text-cyan-400">N</span>
          <span className="text-cyan-400 group-hover:text-white">T</span>
          <span className="text-slate-100 group-hover:text-cyan-400">H</span>
          <span className="ml-1 text-cyan-400">.</span>
          <span className="text-slate-100 group-hover:text-cyan-400">/&gt;</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center space-x-12">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="nav-link relative text-sm font-bold text-slate-400 
              hover:text-cyan-400 uppercase tracking-[0.3em] fira-code transition-colors"
            >
              {item.name}
            </a>
          ))}

          <a
            href="https://drive.google.com/file/d/1pIaUuRzxHJXpA0ySKr_BL3tLnmU_vMGE/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-cyan-500/10 hover:bg-cyan-500 
            text-cyan-400 hover:text-slate-950 border border-cyan-500/30 
            rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300"
          >
            Resume
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-3 text-slate-100"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden fixed inset-0 transition-all duration-500 
        ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <div
          className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl"
          onClick={() => setMobileMenuOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[85%] glass p-12 
          flex flex-col justify-center gap-10 transition-transform duration-500
          ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {navItems.map((item, idx) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="text-3xl font-black text-slate-100 flex items-center gap-5"
            >
              <span className="text-sm fira-code text-cyan-500/40">
                0{idx + 1}.
              </span>
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
