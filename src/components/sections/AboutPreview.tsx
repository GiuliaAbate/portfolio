import { Code2, Database, Layers3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function AboutPreview() {
    const areas = [
        {
            icon: <Code2 size={22} />,
            title: 'Frontend',
            description: 'Realizzazione di interfacce web con Angular, React e TypeScript.',
        },
        {
            icon: <Database size={22} />,
            title: 'Backend',
            description: 'Sviluppo di API e gestione della logica applicativa con C# e .NET.',
        },
        {
            icon: <Layers3 size={22} />,
            title: 'Database',
            description: 'Progettazione e gestione di database relazionali con SQL Server.',
        },
    ];

    return (
        <section
            id="about-preview"
            className="border-t border-white/10 bg-surface/40"
        >
            <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">

                {/* Testo introduttivo */}
                <div>
                    <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
                        Chi sono
                    </p>

                    <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                        Dalla progettazione allo sviluppo,
                        <span className="text-accent"> con curiosità e attenzione ai dettagli.</span>
                    </h2>

                    <p className="mt-6 leading-relaxed text-gray-400">
                        Sono una Junior Full Stack Developer e mi occupo di sviluppo
                        di applicazioni web, lavorando sia sul frontend sia sul backend.
                        Nel mio percorso ho avuto modo di utilizzare diverse tecnologie
                        e di confrontarmi con le varie fasi della realizzazione
                        di un'applicazione.
                    </p>

                    <p className="mt-4 leading-relaxed text-gray-400">
                        Mi piace imparare, sperimentare nuove soluzioni e migliorare
                        continuamente le mie competenze, con particolare attenzione
                        all'esperienza utente.
                    </p>

                    <Link
                        to="/about"
                        className="mt-8 inline-flex items-center gap-2 font-semibold text-accent transition-all hover:gap-3"
                    >
                        Scopri di più
                        <ArrowRight size={18} />
                    </Link>
                </div>

                {/* Aree di competenza */}
                <div className="flex flex-col gap-4">
                    {areas.map((area) => (
                        <div
                            key={area.title}
                            className="rounded-xl border border-white/10 bg-surface p-6 transition-all duration-300 hover:border-accent/40"
                        >
                            <div className="flex items-start gap-4">
                                <div className="rounded-lg bg-accent/10 p-3 text-accent">
                                    {area.icon}
                                </div>

                                <div>
                                    <h3 className="font-semibold text-white">
                                        {area.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                                        {area.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default AboutPreview;