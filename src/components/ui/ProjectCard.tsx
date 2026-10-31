import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../../data/projects';

type ProjectCardProps = {
    project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">

            <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-accent/15 via-surface to-background">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={`Anteprima di ${project.name}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center">
                        <span className="text-4xl font-bold tracking-tight text-white/70">
                            {project.name}<span className="text-accent">.</span>
                        </span>
                    </div>
                )}

                <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-background/70 px-3 py-1 text-xs text-gray-300">
                    {project.category}
                </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-white">
                        {project.name}
                    </h3>

                    <Link
                        to={`/projects/${project.slug}`}
                        aria-label={`Scopri ${project.name}`}
                        className="text-gray-400 transition-colors group-hover:text-accent"
                    >
                        <ArrowUpRight size={21} />
                    </Link>
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400">
                    {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                        <span
                            key={technology}
                            className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-gray-400"
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;
