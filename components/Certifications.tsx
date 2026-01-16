import React from 'react';
import python from '../src/assets/python.png';
import sql from '../src/assets/sql.png';
import ds from '../src/assets/ds.png';
import Bi from '../src/assets/Bi.png';
import html from '../src/assets/html_and_css.jpeg';
import figma from '../src/assets/figma.jpeg';
import researc from '../src/assets/research.png';
// Mock certifications data
const CERTIFICATIONS = [
  {
    title: "python for Data Science",
    issuer: "360DigiTMG",
    imageUrl: python,
    icon: "🐍",
    certId: "360DTMGIN46174",
    date: "Jun 23 2025",
    link: "https://drive.google.com/file/d/1RPaeda-l0gJ8vTgW-G4wcMf-wa9Tkot4/view?usp=sharing",
    verifyLink: "https://360digitmg.com/aispry-ind-verify"
  },
  {
    title: "SQL",
    issuer: "360DigiTMG",
    imageUrl: sql,
    icon: "💾",
    certId: "360DTMGIN46871",
    date: "August 20, 2025",
    link: "https://drive.google.com/file/d/18QtoNIfJsbk_R_CRpOIrvWOn740bUZkA/view?usp=sharing",
    verifyLink: "https://360digitmg.com/aispry-ind-verify"
  },
  {
    title: "Power BI",
    issuer: "360DigiTMG",
    imageUrl: Bi,
    icon: "📊",
    certId: "360DTMGIN46871",
    date: "September 2, 2025",
    link: "https://drive.google.com/file/d/1gIKjUyk_-RiG8xPO9hWTm_aRPelz-jal/view?usp=sharing",
    verifyLink: "https://360digitmg.com/aispry-ind-verify"
  },
  {
    title: "Data Science",
    issuer: "360DigiTMG",
    imageUrl: ds,
    icon: "📊",
    certId: "360DTMGIN47671",
    date: "October 4, 2025",
    link: "https://drive.google.com/file/d/1iekiWByYN8ok1VPnE8-v8soWjc6Y1cAn/view?usp=sharing",
    verifyLink: "https://360digitmg.com/aispry-ind-verify"
  },
  {
    title: "HTML & CSS",
    issuer: "Guvi",
    imageUrl: html,
    icon: "📊",
    certId: "3n9123z47g69j51A4m5",
    date: "September 17 2024",
    link: "https://www.linkedin.com/posts/srikanth-m1_im-happy-to-share-that-ive-obtained-a-new-activity-7241654624514908160-hAgb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEI20KgBRrj9-b6wac7i0IdfRCi1HbnaP3A",
    verifyLink: "https://www.guvi.in/certificate?id=n9i23z47g69j51A4m5"
  },
  {
    title: "Figma",
    issuer: "Udemy",
    imageUrl: figma,
    icon: "📊",
    certId: "UC-c0457d78-59da-4e7-98db-dca3b0a6606c",
    date: "May 8, 2024",
    link: "https://drive.google.com/file/d/1iekiWByYN8ok1VPnE8-v8soWjc6Y1cAn/view?usp=sharing",
    verifyLink: "ude.my/UC-c0457d78-59da-41e7-98db-dca3b0a6606c"
  },
  {
    title: "Ai driven respiratory disease classification",
    issuer: "Harcourt Butler Technical University ",
    imageUrl: researc,
    icon: "📊",
    certId: "HBTU-RDC-2025-09",
    date: "Jan 1, 2025",
    link: "https://drive.google.com/file/d/1nbuNhT_DK8dSHxM1NeVN2MAS82HzA5mT/view?usp=drive_link",
    verifyLink: ""
  },
  {
    title: "AI driven Sperm Analysis and Grading System",
    issuer: "360DigiTMG",
    imageUrl:Bi ,
    icon: "📊",
    certId: "360DTMGIN47671",
    date: "October 4, 2025",
    link: "https://drive.google.com/file/d/1iekiWByYN8ok1VPnE8-v8soWjc6Y1cAn/view?usp=sharing",
    verifyLink: "https://360digitmg.com/aispry-ind-verify"
  }

];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        {/* SECTION HEADER */}
        <div className="mb-20 max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-black mb-6 flex items-center gap-4">
            <span className="font-mono text-cyan-400 text-2xl">02.</span>
            <span className="bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-transparent mb-6" />
          <p className="text-slate-400 text-lg leading-relaxed font-light">
            Professional validations and technical achievements that fuel my growth.
          </p>
        </div>

        {/* CERTIFICATIONS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-900/50 to-slate-950/30 backdrop-blur-sm rounded-2xl border border-slate-700/40 hover:border-cyan-500/50 transition-all duration-500 group overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1"
            >
              {/* IMAGE SECTION */}
              <div className="relative h-40 overflow-hidden bg-slate-800/50">
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 right-4 bg-slate-950/70 backdrop-blur-sm w-10 h-10 rounded-lg flex items-center justify-center text-xl border border-slate-600/50 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300">
                  {cert.icon}
                </div>
              </div>

              {/* CONTENT SECTION */}
              <div className="p-6 flex flex-col gap-4 flex-grow">
                {/* TITLE & ISSUER */}
                <div className="space-y-2">
                  <h3 className="text-sm md:text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-cyan-400/80 font-semibold uppercase tracking-wider">
                    {cert.issuer}
                  </p>
                </div>

                {/* DIVIDER */}
                <div className="h-px bg-gradient-to-r from-slate-700/20 to-transparent" />

                {/* METADATA */}
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-semibold uppercase tracking-wide">Cert ID</span>
                    <span className="text-slate-300 font-mono text-[10px] truncate ml-2">{cert.certId}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-semibold uppercase tracking-wide">Date</span>
                    <span className="text-slate-300 font-medium">{cert.date}</span>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="mt-auto pt-4 flex gap-2">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-lg bg-slate-800/60 hover:bg-slate-700 border border-slate-600/50 hover:border-slate-500 text-slate-300 hover:text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center"
                  >
                    View
                  </a>
                  {cert.verifyLink && (
                    <a
                      href={cert.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 hover:border-cyan-500/60 text-cyan-400 hover:text-cyan-300 text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center"
                    >
                      Verify
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;