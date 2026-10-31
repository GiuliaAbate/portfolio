import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';

function ProjectsPreview() {
    const featuredProjects = projects.filter(
        (project) => project.featured
    );

    const secondaryProject = projects.find(
        (project) => !project.featured
    );

    return (
        <section className="border-t border-white/10">
            <div className="mx-auto max-w-6xl px-6 py-24">

                <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
                            Portfolio
                        </p>

                        <h2 className="text-3xl font-bold text-white md:text-4xl">
                            Alcuni dei miei progetti
                        </h2>

                        <p className="mt-4 max-w-xl text-gray-400">
                            Una selezione di progetti realizzati durante la formazione
                            e il mio percorso personale.
                        </p>
                    </div>

                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 font-medium text-accent transition-all hover:gap-3"
                    >
                        Scopri i progetti
                        <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>

                {secondaryProject && (
                    <div className="mt-6">
                        <div className="flex flex-col justify-between gap-5 rounded-2xl border border-white/10 bg-surface/50 p-6 md:flex-row md:items-center">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                                    Progetto personale
                                </p>

                                <h3 className="mt-2 text-xl font-semibold text-white">
                                    {secondaryProject.name}
                                </h3>

                                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-400">
                                    {secondaryProject.description}
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {secondaryProject.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-gray-400"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <Link
                                to={`/projects/${secondaryProject.slug}`}
                                className="inline-flex shrink-0 items-center gap-2 font-medium text-accent hover:gap-3"
                            >
                                Scopri di più
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}

export default ProjectsPreview;