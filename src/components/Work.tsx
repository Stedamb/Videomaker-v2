import React from 'react';
import ProjectSection from './sections/ProjectSection';
interface WorkProps {
  projects: {
    source: string;
    title: string;
    description: string;
    link: string;
    preview: string;
    date: string;
  }[];
}
const Work: React.FC<WorkProps> = ({ projects }) => { 
  return (
    <div>
      {projects.map((project, index) => ( 
        <ProjectSection
          key={index}
          source={project.source}
          title={project.title}
          description={project.description}
          link={project.link}
          preview={project.preview}
          date={project.date}
        />
      ))}
    </div>
  );
};
export default Work;