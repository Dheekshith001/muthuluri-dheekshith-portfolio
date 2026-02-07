
import React from 'react';
import { SKILLS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-100 mb-16 text-center">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((category) => (
            <div key={category.title} className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all group">
              <h3 className="text-xl font-bold text-blue-400 mb-6 group-hover:text-blue-300 transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <span 
                    key={skill}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm border border-slate-700 hover:bg-slate-700 transition-colors"
                  >
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
