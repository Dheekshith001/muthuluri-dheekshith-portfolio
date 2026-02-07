
import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { Award, ShieldCheck } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-slate-900/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-100 mb-16 text-center">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.name} className="p-8 bg-slate-900 border border-slate-800 rounded-2xl relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <ShieldCheck size={80} className="text-blue-500" />
              </div>
              <Award className="text-blue-500 mb-6" size={40} />
              <h3 className="text-xl font-bold text-slate-100 mb-2">{cert.name}</h3>
              <p className="text-slate-400 mb-4">{cert.provider}</p>
              <span className="text-sm text-slate-500 font-medium">{cert.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
