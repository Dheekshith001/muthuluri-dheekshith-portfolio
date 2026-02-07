
import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Sparkles, MousePointer2 } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse-slow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-8 animate-fade-in mx-auto lg:mx-0">
              <Sparkles size={16} className="text-blue-400" />
              <span>Available for Hire & Collaboration</span>
            </div>
            
            <div className="space-y-4 mb-8">
              <h2 className="text-2xl md:text-3xl text-slate-400 font-medium">Hello, I am</h2>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
            </div>

            <p className="text-lg md:text-2xl text-slate-400 max-w-2xl leading-relaxed mb-12 mx-auto lg:mx-0 font-medium">
              <span className="text-blue-500 font-bold tracking-widest uppercase text-sm block mb-4">Undergraduate Engineer</span>
              {PERSONAL_INFO.tagline}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-16">
              <a 
                href="#projects"
                className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold flex items-center gap-3 transition-all shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:-translate-y-1 active:scale-95 group"
              >
                View My Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                className="px-10 py-5 bg-slate-800/40 hover:bg-slate-800 text-slate-100 rounded-2xl font-bold flex items-center gap-3 transition-all border border-slate-700/50 backdrop-blur-md hover:-translate-y-1 active:scale-95"
              >
                <Download size={20} />
                Download Resume
              </button>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 justify-center lg:justify-start pt-8 border-t border-slate-800/50">
              <div className="flex gap-4">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all shadow-xl">
                  <Github size={28} />
                </a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all shadow-xl">
                  <Linkedin size={28} />
                </a>
              </div>
              <div className="text-slate-500 text-sm font-medium text-center md:text-left">
                Check out my professional <br /> profiles on GitHub & LinkedIn
              </div>
            </div>
          </div>

          {/* 3D Illustration Column */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center py-10 lg:py-0 perspective-1000">
            <div className="relative group animate-float preserve-3d w-full max-w-[450px]">
              
              {/* Massive Glow Effect */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[120px] group-hover:bg-blue-500/30 transition-all duration-1000" />
              
              {/* Reliable, High-Quality 3D Character Illustration */}
              <div className="relative z-10 preserve-3d transition-transform duration-700 hover:rotate-y-12">
                <img 
                  src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611734.png"
                  alt="3D Developer Avatar"
                  className="w-full h-auto drop-shadow-[0_50px_50px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:scale-105"
                  loading="eager"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://illustrations.popsy.co/white/coder.svg";
                  }}
                />
              </div>

              {/* Floating 3D Badges */}
              <div className="absolute top-10 -left-10 p-5 bg-slate-900/90 backdrop-blur-2xl rounded-3xl border border-slate-700/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float z-20 group-hover:scale-110 transition-transform" style={{animationDelay: '0s'}}>
                <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 font-black text-2xl shadow-inner">J</div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full animate-pulse border-4 border-slate-900" />
              </div>
              
              <div className="absolute bottom-10 -right-10 p-5 bg-slate-900/90 backdrop-blur-2xl rounded-3xl border border-slate-700/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float z-20 group-hover:scale-110 transition-transform" style={{animationDelay: '1s'}}>
                <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 font-black text-2xl shadow-inner">Py</div>
                <div className="absolute -top-1 -left-1 w-4 h-4 bg-emerald-500 rounded-full animate-pulse border-4 border-slate-900" />
              </div>

              <div className="absolute top-1/2 -right-16 hidden md:flex p-4 bg-slate-900/90 backdrop-blur-2xl rounded-2xl border border-slate-700/50 shadow-2xl animate-float z-20" style={{animationDelay: '2s'}}>
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-400 font-bold text-sm">SQL</div>
              </div>

              {/* Decorative Geometric Shapes */}
              <div className="absolute -top-20 -right-20 w-32 h-32 border-2 border-blue-500/20 rounded-full animate-pulse-slow -z-10" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 border border-purple-500/10 rounded-3xl rotate-12 animate-pulse-slow -z-10" style={{animationDelay: '3s'}} />
            </div>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition-opacity hidden lg:flex">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-500">Scroll Down</span>
          <div className="scroll-indicator"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
