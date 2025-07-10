import type { Project } from "@/types/project";


interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a 
      href={`/work/${project.slug}`}
      className="block group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.featuredImage} 
          alt={project.title} 
          className="w-full h-full object-cover" // Removed p-6 and rounded, added h-full object-cover
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;