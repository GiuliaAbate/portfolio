import { projects } from '../data/projects';
import ProjectCard from '../components/ui/ProjectCard';

function Projects() {
    return (
        <section className="mx-auto min-h-screen max-w-6xl px-6 py-24">

            <div className="mb-16 max-w-2xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
                    Portfolio
                </p>

                <h1 className="text-4xl font-bold text-white md:text-5xl">
                    Progetti selezionati
                </h1>

                <p className="mt-6 leading-relaxed text-gray-400">
                    Una raccolta di alcuni dei progetti più significativi che ho
                    realizzato durante il mio percorso formativo e personale.
                    Dalle applicazioni Full Stack alla progettazione di piattaforme
                    digitali, ogni progetto rappresenta un'occasione per mettere
                    in pratica competenze e sperimentare nuove tecnologie.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>

        </section>
    );
}

export default Projects;