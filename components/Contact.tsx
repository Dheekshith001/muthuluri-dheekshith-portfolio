
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-100 mb-16 text-center">Get In Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-slate-100">Let's build something amazing together</h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
              I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-6 p-4 rounded-2xl hover:bg-slate-900 transition-all border border-transparent hover:border-slate-800 group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Email</p>
                  <p className="text-slate-200 font-medium">{PERSONAL_INFO.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-6 p-4 rounded-2xl hover:bg-slate-900 transition-all border border-transparent hover:border-slate-800 group">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Phone</p>
                  <p className="text-slate-200 font-medium">+91 {PERSONAL_INFO.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-4 rounded-2xl hover:bg-slate-900 transition-all border border-transparent hover:border-slate-800 group">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Location</p>
                  <p className="text-slate-200 font-medium">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href={PERSONAL_INFO.github} className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-slate-700 transition-all">
                <Github size={24} />
              </a>
              <a href={PERSONAL_INFO.linkedin} className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-slate-700 transition-all">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <form className="space-y-6 bg-slate-900/50 p-8 rounded-3xl border border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Your Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-slate-100" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-slate-100" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Message</label>
              <textarea rows={6} placeholder="How can I help you?" className="w-full px-6 py-4 bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-slate-100 resize-none"></textarea>
            </div>
            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-500/20 active:scale-95">
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
