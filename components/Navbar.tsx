
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'certifications', id: 'certifications' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${scrolled ? 'py-3 glass' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-black fira-code tracking-tighter group flex items-center transition-all duration-500 hover:scale-[1.05]"
        >
          <span className="text-slate-100 group-hover:text-cyan-400 transition-colors">&lt;/. </span>
          <span className="text-cyan-400 group-hover:text-white transition-colors">S</span>
          <span className="text-slate-100 group-hover:text-cyan-400 transition-colors">R</span>
          <span className="text-cyan-400 group-hover:text-white transition-colors">I</span>
          <span className="text-slate-100 group-hover:text-cyan-400 transition-colors">K</span>
          <span className="text-cyan-400 group-hover:text-white transition-colors">A</span>
          <span className="text-slate-100 group-hover:text-cyan-400 transition-colors">N</span>
          <span className="text-cyan-400 group-hover:text-white transition-colors">T</span>
          <span className="text-slate-100 group-hover:text-cyan-400 transition-colors">H</span>
          <span className="ml-0.5 text-cyan-400">.</span>
          <span className="text-slate-100 group-hover:text-cyan-400 transition-colors">/&gt;</span>
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="nav-link relative text-[10px] font-bold text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-[0.25em] fira-code"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="https://drive.google.com/file/d/1pIaUuRzxHJXpA0ySKr_BL3tLnmU_vMGE/view?usp=sharing"
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 bg-cyan-500/5 hover:bg-cyan-500 text-cyan-400 hover:text-slate-950 border border-cyan-500/20 rounded-lg text-[9px] font-bold uppercase tracking-widest transition-all duration-300"
          >
            Resume
          </a>
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-slate-100">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      <div className={`lg:hidden fixed inset-0 z-[-1] transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl" onClick={() => setMobileMenuOpen(false)}></div>
        <div className={`absolute right-0 top-0 h-full w-[80%] glass p-10 flex flex-col justify-center gap-8 transition-transform duration-500 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navItems.map((item, idx) => (
            <a key={item.id} href={`#${item.id}`} onClick={(e) => handleNavClick(e, item.id)} className="text-2xl font-black text-slate-100 flex items-center gap-4">
              <span className="text-[10px] fira-code text-cyan-500/40">0{idx + 1}.</span>
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
