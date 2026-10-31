import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

function ProjectDetail() {
    const { slug } = useParams();

    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return (
            <div className="mx-auto max-w-6xl px-6 py-24">
                <h1 className="text-3xl font-bold text-white">
                    Progetto non trovato
                </h1>

                <Link to="/projects" className="mt-6 inline-flex text-accent">
                    Torna ai progetti
                </Link>
            </div>
        );
    }

    return (
        <section className="mx-auto min-h-screen max-w-6xl px-6 py-24">

            <Link
                to="/projects"
                className="mb-12 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-accent"
            >
                <ArrowLeft size={17} />
                Tutti i progetti
            </Link>

            <div className="max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
                    {project.category}
                </p>

                <h1 className="text-4xl font-bold text-white md:text-5xl">
                    {project.name}
                </h1>

                <p className="mt-6 text-lg leading-relaxed text-gray-400">
                    {project.description}
                </p>
            </div>

            <div className="mt-12 aspect-video max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-accent/15 via-surface to-background">
                {project.video ? (
                    <img src={project.video} alt={`Anteprima di ${project.name}`} className="h-full w-full object-contain" />
                ) : (
                    <div className="flex h-full items-center justify-center">
                        <span className="text-4xl font-bold text-white/70">{project.name}<span className="text-accent">.</span></span>
                    </div>
                )}
            </div>

            <div className="mt-12 max-w-3xl">
                <h2 className="text-2xl font-bold text-white">
                    Tecnologie utilizzate
                </h2>

                <div className="mt-5 flex flex-wrap gap-3">
                    {project.technologies.map((technology) => (
                        <span
                            key={technology}
                            className="rounded-lg border border-white/10 bg-surface px-4 py-2 text-sm text-gray-300"
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </div>

            <Link
                to="/projects"
                className="mt-12 inline-flex items-center gap-2 font-medium text-accent hover:gap-3"
            >
                Torna ai progetti
                <ArrowUpRight size={18} />
            </Link>

        </section>
    );
}

export default ProjectDetail;
