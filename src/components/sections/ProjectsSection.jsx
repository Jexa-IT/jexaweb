import  { memo } from 'react';
import ProjectCard from '../cards/ProjectCard';
import { PROJECTS } from '../../constants';

const ProjectsSection = memo(() => (
  <section id="projects" className="min-h-screen py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-16 text-white">Our Recent Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((p, i) => <ProjectCard key={i} {...p} />)}
      </div>
    </div>
  </section>
));

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;