import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Certifications", id: "certifications" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 120);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300
      border border-slate-500/20 shadow-md
      ${
        scrolled
          ? "bg-slate-950/50 border-slate-400/30 shadow-lg"
          : "bg-slate-950/20 border-slate-500/10 shadow-sm"
      }`}
        style={{
          backdropFilter: scrolled ? "blur(15px)" : "blur(8px)",
          WebkitBackdropFilter: scrolled ? "blur(15px)" : "blur(8px)",
        }}
      >
        <div className="container mx-auto px-8 h-16 flex items-center justify-between">
          {/* ANIMATED LOGO */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center fira-code text-3xl font-black tracking-tight group relative"
          >
            {/* Glowing background effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-logo-glow"></span>
            
            <span className="relative flex items-center">
              <span className="text-slate-100 logo-char" style={{ animationDelay: '0s' }}>&lt;/. </span>
              <span className="text-cyan-400 logo-char" style={{ animationDelay: '0.1s' }}>S</span>
              <span className="text-slate-100 logo-char" style={{ animationDelay: '0.2s' }}>R</span>
              <span className="text-cyan-400 logo-char" style={{ animationDelay: '0.3s' }}>I</span>
              <span className="text-slate-100 logo-char" style={{ animationDelay: '0.4s' }}>K</span>
              <span className="text-cyan-400 logo-char" style={{ animationDelay: '0.5s' }}>A</span>
              <span className="text-slate-100 logo-char" style={{ animationDelay: '0.6s' }}>N</span>
              <span className="text-cyan-400 logo-char" style={{ animationDelay: '0.7s' }}>T</span>
              <span className="text-slate-100 logo-char" style={{ animationDelay: '0.8s' }}>H</span>
              <span className="text-cyan-400 logo-char" style={{ animationDelay: '0.9s' }}>.</span>
              <span className="text-slate-100 logo-char" style={{ animationDelay: '1s' }}>/&gt;</span>
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-lg font-semibold uppercase tracking-widest
                text-slate-300 hover:text-cyan-400 transition-colors fira-code relative group/nav"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover/nav:w-full transition-all duration-300"></span>
              </a>
            ))}

            {/* RESUME BUTTON */}
            <a
              href="https://drive.google.com/file/d/1pIaUuRzxHJXpA0ySKr_BL3tLnmU_vMGE/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-8 flex items-center justify-center
              text-lg font-semibold uppercase tracking-widest
              text-cyan-400 border border-cyan-500/40 rounded-lg
              hover:bg-cyan-500 hover:text-slate-950 transition-all
              hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105"
            >
              Resume
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-slate-100 hover:text-cyan-400 transition-colors"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
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
          ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >
          <div
            className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div
            className={`absolute right-0 top-0 h-full w-[85%] glass p-12
            flex flex-col justify-center gap-10 transition-transform duration-500
            ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            {navItems.map((item, idx) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-4xl font-black text-slate-100 flex items-center gap-5 hover:text-cyan-400 transition-colors group/mobile"
              >
                <span className="text-sm fira-code text-cyan-500/40 group-hover/mobile:text-cyan-400 transition-colors">
                  0{idx + 1}.
                </span>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <style>{`
        /* Logo character stagger animation on page load */
        @keyframes logo-fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .logo-char {
          display: inline-block;
          animation: logo-fade-in 0.5s ease-out both;
        }

        /* Continuous subtle pulse animation on hover */
        @keyframes logo-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .group:hover .logo-char {
          animation: logo-pulse 1s ease-in-out infinite;
        }

        /* Glowing effect animation */
        @keyframes logo-glow {
          0%, 100% {
            opacity: 0.5;
            transform: translateX(-100%);
          }
          50% {
            opacity: 1;
            transform: translateX(100%);
          }
        }

        .animate-logo-glow {
          animation: logo-glow 2s ease-in-out infinite;
        }

        /* Color shift animation on hover for cyan characters */
        @keyframes color-shift {
          0%, 100% {
            color: rgb(34, 211, 238);
          }
          50% {
            color: rgb(99, 102, 241);
          }
        }

        .group:hover .text-cyan-400 {
          animation: color-shift 1.5s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;