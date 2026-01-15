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
        {/* LOGO */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center fira-code text-3xl font-black tracking-tight" // Increased font size here
        >
          <span className="text-slate-100">&lt;/. </span>
          <span className="text-cyan-400">S</span>
          <span className="text-slate-100">R</span>
          <span className="text-cyan-400">I</span>
          <span className="text-slate-100">K</span>
          <span className="text-cyan-400">A</span>
          <span className="text-slate-100">N</span>
          <span className="text-cyan-400">T</span>
          <span className="text-slate-100">H</span>
          <span className="text-cyan-400">.</span>
          <span className="text-slate-100">/&gt;</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="text-lg font-semibold uppercase tracking-widest
              text-slate-300 hover:text-cyan-400 transition-colors fira-code"
            >
              {item.name}
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
            hover:bg-cyan-500 hover:text-slate-950 transition-all"
          >
            Resume
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-slate-100"
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
              className="text-4xl font-black text-slate-100 flex items-center gap-5"
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
