import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState({ name: false, email: false, message: false });

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTouched({ name: false, email: false, message: false });
      setErrors({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (touched[name as keyof typeof touched]) {
      const newErrors = { ...errors };
      if (name === 'name') {
        newErrors.name = !value.trim() ? 'Name is required' : value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      } else if (name === 'email') {
        newErrors.email = !value.trim() ? 'Email is required' : !validateEmail(value) ? 'Please enter a valid email' : '';
      } else if (name === 'message') {
        newErrors.message = !value.trim() ? 'Message is required' : value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
      }
      setErrors(newErrors);
    }
  };

  const handleBlur = (field: keyof typeof touched) => {
    setTouched({ ...touched, [field]: true });
    validateForm();
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Enhanced Animated Background Effects */}
      <div className="absolute top-1/4 left-0 w-[350px] h-[350px] bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/4 w-[250px] h-[250px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none animate-pulse" style={{ animationDelay: '0.5s' }} />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }
      `}</style>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* Left Info Section - Enhanced */}
          <div className="lg:w-[38%] space-y-8 lg:sticky lg:top-32 text-center lg:text-left">
            <div className="space-y-4 animate-fade-in">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-900/60 backdrop-blur-md rounded-full border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-500">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold text-cyan-400/90">
                  Open to Opportunities
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter text-white">
                Initiate <br className="hidden lg:block" />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent animate-gradient">
                  Connection.
                </span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent rounded-full mx-auto lg:mx-0 animate-pulse" />
            </div>

            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 font-light">
              Looking for a dedicated entry-level AI developer? Let's connect and discuss how I can contribute to your roadmap.
            </p>

            {/* Enhanced Email Display with Copy Feature */}
            <div className="pt-4">
              <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-5 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 group cursor-pointer transform hover:scale-[1.02]"
                onClick={() => {
                  navigator.clipboard.writeText('srikanthmanio2@gmail.com');
                }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center text-cyan-400 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] border border-cyan-500/20 group-hover:rotate-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-1">
                      Direct Contact • Click to Copy
                    </p>
                    <p className="text-sm md:text-base font-bold text-slate-200 group-hover:text-cyan-400 transition-colors font-mono">
                      srikanthmanio2@gmail.com
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Enhanced Info Cards with Icons */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-4 border border-white/5 hover:border-cyan-500/20 transition-all duration-300 group transform hover:scale-[1.02]">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">Response Time</p>
                </div>
                <p className="text-lg font-black text-cyan-400 group-hover:text-cyan-300 transition-colors">24 Hours</p>
              </div>
              <div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-4 border border-white/5 hover:border-green-500/20 transition-all duration-300 group transform hover:scale-[1.02]">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">Availability</p>
                </div>
                <p className="text-lg font-black text-green-400 group-hover:text-green-300 transition-colors">Immediate</p>
              </div>
            </div>

            {/* Social Proof */}
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-2 text-slate-400 text-sm justify-center lg:justify-start">
                <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-medium">Typically responds within hours</span>
              </div>
            </div>
          </div>

          {/* Enhanced Form Section */}
          <div className="lg:w-[62%] w-full">
            <div className="bg-slate-900/60 backdrop-blur-xl p-8 md:p-12 rounded-[28px] relative overflow-hidden border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.15)] hover:shadow-[0_0_80px_rgba(6,182,212,0.25)] transition-all duration-700 transform hover:scale-[1.01]">
              {/* Animated gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
              
              <div className="relative z-10 space-y-7">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={() => handleBlur('name')}
                        placeholder="Enter your full name"
                        className={`w-full bg-slate-950/50 border-2 rounded-xl px-5 py-4 outline-none text-base text-white placeholder:text-slate-500 transition-all duration-300 hover:border-slate-600 ${
                          errors.name && touched.name
                            ? 'border-red-500/50 focus:border-red-400 focus:ring-4 focus:ring-red-400/20'
                            : 'border-slate-700/50 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20'
                        }`}
                      />
                      {errors.name && touched.name && (
                        <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.name}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={() => handleBlur('email')}
                        placeholder="your.email@example.com"
                        className={`w-full bg-slate-950/50 border-2 rounded-xl px-5 py-4 outline-none text-base text-white placeholder:text-slate-500 transition-all duration-300 hover:border-slate-600 ${
                          errors.email && touched.email
                            ? 'border-red-500/50 focus:border-red-400 focus:ring-4 focus:ring-red-400/20'
                            : 'border-slate-700/50 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20'
                        }`}
                      />
                      {errors.email && touched.email && (
                        <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-3">
                  <label htmlFor="message" className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    Your Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={() => handleBlur('message')}
                      placeholder="Tell me about your project or opportunity..."
                      className={`w-full bg-slate-950/50 border-2 rounded-xl px-5 py-4 outline-none text-base text-white placeholder:text-slate-500 transition-all duration-300 hover:border-slate-600 resize-none ${
                        errors.message && touched.message
                          ? 'border-red-500/50 focus:border-red-400 focus:ring-4 focus:ring-red-400/20'
                          : 'border-slate-700/50 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/20'
                      }`}
                    />
                    <div className="absolute bottom-4 right-4 text-xs text-slate-500">
                      {formData.message.length} characters
                    </div>
                    {errors.message && touched.message && (
                      <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting || submitted}
                  className={`w-full py-5 rounded-xl font-black transition-all transform flex items-center justify-center gap-3 text-sm uppercase tracking-widest shadow-2xl relative overflow-hidden group ${
                    submitted
                      ? 'bg-green-500 text-white cursor-default shadow-[0_0_30px_rgba(34,197,94,0.4)]'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer'
                  } ${isSubmitting ? 'cursor-wait' : ''}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ${submitted ? 'hidden' : ''}`} />
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : submitted ? (
                    <>
                      <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>

                {/* Enhanced Privacy Notice */}
                <div className="flex items-center justify-center gap-2 pt-2">
                  <svg className="w-4 h-4 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-xs text-slate-500">
                    Your information is secure and will never be shared with third parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;