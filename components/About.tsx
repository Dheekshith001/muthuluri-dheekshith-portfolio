
import React from 'react';
import { User, Code, Database, Brain, Rocket } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0f1e]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 group overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60 z-20" />
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800" 
                alt="Workspace" 
                className="rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-700 w-full object-cover aspect-square md:aspect-video lg:aspect-square"
              />
              <div className="absolute bottom-8 left-8 z-30">
                <div className="flex items-center gap-3 bg-blue-600 text-white px-4 py-2 rounded-xl font-bold shadow-lg">
                  <Rocket size={18} />
                  <span>3+ Years Coding</span>
                </div>
              </div>
            </div>
            {/* Background Frames */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-slate-800 rounded-3xl -z-10 rotate-3" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-blue-500/20 rounded-3xl -z-10 -rotate-3" />
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-blue-500" />
              <span className="text-blue-500 font-bold uppercase tracking-[0.2em] text-sm">Discover My Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Turning Complex Problems into <span className="text-blue-500">Elegant Code</span>
            </h2>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                I am a dedicated Computer Science student based in Bangalore, driven by the challenge of creating impactful digital experiences. My expertise spans across <span className="text-slate-200 font-semibold">Java Full-Stack development</span> and <span className="text-slate-200 font-semibold">Machine Learning</span>.
              </p>
              <p>
                Whether it's optimizing backend systems with Spring Boot or designing predictive models using Python, I focus on performance, scalability, and user-centric design.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                { icon: <Code className="text-blue-500" />, title: "Clean Code" },
                { icon: <Database className="text-emerald-500" />, title: "Scalable Data" },
                { icon: <Brain className="text-purple-500" />, title: "AI/ML Logic" },
                { icon: <Rocket className="text-orange-500" />, title: "Fast Delivery" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-blue-500/30 transition-all hover:bg-slate-900">
                  <div className="p-2 bg-slate-800 rounded-lg">{item.icon}</div>
                  <span className="font-semibold text-slate-200">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
