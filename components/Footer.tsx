
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950">
      <div className="container mx-auto px-6 text-center">
        <p className="text-slate-500 text-sm mb-4">
          Built with React & Tailwind CSS
        </p>
        <p className="text-slate-400 flex items-center justify-center gap-2">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. Made with <Heart size={16} className="text-red-500 fill-red-500" /> in Bangalore.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
