
import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-100 mb-16 text-center">Academic Background</h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-slate-800 pb-2 hover:border-blue-500 transition-colors group">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-800 group-hover:bg-blue-500 group-hover:border-blue-500 transition-all" />
              <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-4 gap-4">
                <h3 className="text-2xl font-bold text-slate-100">{edu.school}</h3>
                <span className="flex items-center gap-2 text-blue-400 font-semibold bg-blue-500/10 px-4 py-1 rounded-full text-sm">
                  <Calendar size={14} />
                  {edu.period}
                </span>
              </div>
              <p className="text-xl text-slate-300 mb-4">{edu.degree}</p>
              <div className="flex flex-wrap gap-6 text-slate-500 text-sm">
                <span className="flex items-center gap-2">
                  <MapPin size={16} />
                  {edu.location}
                </span>
                <span className="flex items-center gap-2 text-emerald-500 font-medium">
                  <GraduationCap size={16} />
                  {edu.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
