import React from 'react';

// Mock certifications data
const CERTIFICATIONS = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
    icon: "☁️",
    certId: "AWS-12345",
    date: "Dec 2024",
    link: "#",
    verifyLink: "#"
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
    icon: "🧠",
    certId: "DL-67890",
    date: "Nov 2024",
    link: "#",
    verifyLink: "#"
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop",
    icon: "🔥",
    certId: "TF-54321",
    date: "Oct 2024",
    link: "#",
    verifyLink: "#"
  },
  {
    title: "Azure Data Scientist Associate",
    issuer: "Microsoft",
    imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&h=300&fit=crop",
    icon: "📊",
    certId: "AZ-13579",
    date: "Sep 2024",
    link: "#",
    verifyLink: "#"
  }
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 flex items-center gap-6">
            <span className="font-mono text-cyan-400 text-xl">02.</span>
            Certifications
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
            Professional validations and technical achievements that fuel my growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className="bg-slate-900/40 backdrop-blur-md rounded-[28px] border border-white/5 hover:border-cyan-500/60 transition-all duration-500 group overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
            >
              {/* IMAGE */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-90 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a101f] via-transparent to-transparent" />
                <div className="absolute top-5 right-5 bg-slate-900/60 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center text-2xl border border-white/10 group-hover:scale-105 transition-all">
                  {cert.icon}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 flex flex-col gap-4 flex-grow">
                <div>
                  <h4 className="text-base md:text-lg font-black text-slate-100 group-hover:text-cyan-400 transition-colors leading-snug mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-[10px] text-indigo-400 font-black uppercase tracking-[0.25em]">
                    {cert.issuer}
                  </p>
                </div>

                {/* META */}
                <div className="py-3 border-y border-white/5 space-y-2">
                  <div className="flex justify-between text-[10px] font-mono">
                    <span className="text-slate-600 font-bold uppercase">ID</span>
                    <span className="text-slate-400">{cert.certId}</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-mono">
                    <span className="text-slate-600 font-bold uppercase">Date</span>
                    <span className="text-slate-300">{cert.date}</span>
                  </div>
                </div>

                {/* ACTIONS – CENTER ALIGNED */}
                <div className="mt-auto flex justify-center gap-3 pt-3">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-28 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition flex items-center justify-center"
                  >
                    View
                  </a>

                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-28 py-2.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-slate-950 border border-cyan-500/20 hover:border-cyan-500 text-[10px] font-black uppercase tracking-widest transition flex items-center justify-center"
                  >
                    Verify
                  </a>
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