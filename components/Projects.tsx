
import React from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold text-slate-100 mb-4">Featured Projects</h2>
            <p className="text-slate-400">Selected academic and personal works</p>
          </div>
          <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2">
            View All GitHub <ExternalLink size={18} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.title} className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all group">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-slate-100">{project.title}</h3>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-full transition-colors">
                    <Github size={20} />
                  </a>
                </div>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-md text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
