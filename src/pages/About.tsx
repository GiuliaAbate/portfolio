
const skillGroups = [
    {
        title: 'Frontend',
        skills: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    },
    {
        title: 'Backend',
        skills: ['C#', 'ASP.NET Core', 'REST API', 'Entity Framework Core'],
    },
    {
        title: 'Database',
        skills: ['SQL Server', 'MongoDB', 'Azure Data Studio'],
    },
    {
        title: 'Strumenti',
        skills: ['Git', 'GitHub', 'Visual Studio', 'VS Code', 'Postman', 'Figma', 'WordPress'],
    },
];

function About() {
    return (
        <div className="mx-auto min-h-screen max-w-6xl px-6 py-24">

            {/* INTRODUZIONE */}
            <section className="max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
                    Chi sono
                </p>

                <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                    Ciao, sono Giulia.
                    <br />
                    <span className="text-accent">
                        Sviluppatrice Full Stack.
                    </span>
                </h1>

                <div className="mt-8 space-y-5 text-base leading-relaxed text-gray-400">
                    <p>
                        Sono una Junior Full Stack Developer con una formazione
                        nell'ambito delle tecnologie digitali e della comunicazione.
                        Mi occupo di sviluppo di applicazioni web, lavorando sia
                        sulla parte frontend che su quella backend.
                    </p>

                    <p>
                        Nel mio percorso ho avuto modo di confrontarmi con progetti
                        e applicazioni di diversa natura, utilizzando tecnologie
                        come Angular, React, C# e .NET, oltre a database relazionali
                        e non relazionali.
                    </p>

                    <p>
                        Sono una persona curiosa e precisa, con interesse per
                        l'apprendimento continuo e la sperimentazione di nuove
                        tecnologie. Mi piace affrontare problemi diversi,
                        collaborare con gli altri e trovare soluzioni funzionali
                        e curate.
                    </p>
                </div>
            </section>

            {/* ESPERIENZA */}
            <section className="mt-24">
                <div className="mb-10 flex items-center gap-3">
                    <h2 className="text-2xl font-bold text-white md:text-3xl">
                        Esperienza professionale
                    </h2>
                </div>

                <div className="border-l border-accent/40 pl-6">
                    <div className="relative">
                        <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-accent" />

                        <p className="text-sm font-medium text-accent">
                            Settembre 2025 — Presente
                        </p>

                        <h3 className="mt-2 text-xl font-semibold text-white">
                            Junior Full Stack Developer
                        </h3>

                        <p className="mt-1 text-gray-400">
                            3E Informatica
                        </p>

                        <p className="mt-5 max-w-3xl leading-relaxed text-gray-400">
                            Lavoro nello sviluppo e nella manutenzione di applicazioni
                            web, occupandomi di attività sia frontend sia backend.
                            Durante questa esperienza ho avuto modo di lavorare su
                            soluzioni software in diversi ambiti, confrontandomi con
                            la gestione dei dati, lo sviluppo di funzionalità e
                            le esigenze dei clienti.
                        </p>

                        <p className="mt-4 font-medium text-gray-300">
                            Attività e tecnologie:
                        </p>

                        <ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-relaxed text-gray-400 marker:text-accent">
                            <li>Sviluppo e manutenzione di applicazioni web Full Stack.</li>
                            <li>Realizzazione e aggiornamento di funzionalità frontend e backend.</li>
                            <li>Gestione e integrazione di dati provenienti da diverse fonti.</li>
                            <li>Testing delle funzionalità e supporto alle attività di UAT con il cliente.</li>
                            <li>Utilizzo di Angular, C#, .NET e SQL Server.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* FORMAZIONE */}
            <section className="mt-24">
                <div className="mb-10 flex items-center gap-3">
                    <h2 className="text-2xl font-bold text-white md:text-3xl">
                        Formazione
                    </h2>
                </div>

                <div className="space-y-8 border-l border-accent/40 pl-6">


                    <div className="relative">
                        <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-accent" />

                        <p className="text-sm font-medium text-accent">
                            Marzo 2025 — Giugno 2025
                        </p>

                        <h3 className="text-lg font-semibold text-white">
                            Formazione Full Stack Development
                        </h3>

                        <p className="mt-1 text-gray-400">
                            Betacom — 500 ore
                        </p>

                        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-400">
                            Percorso formativo tecnico dedicato allo sviluppo
                            di applicazioni web Full Stack, con approfondimento
                            delle tecnologie .NET, C#, Angular e SQL Server.
                        </p>
                    </div>

                    <div className="relative">
                        <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-accent" />

                        <p className="text-sm font-medium text-accent">
                            Settembre 2021 — Novembre 2024
                        </p>

                        <h3 className="mt-2 text-lg font-semibold text-white">
                            Laurea in Innovazione Sociale, Comunicazione e Nuove Tecnologie
                        </h3>

                        <p className="mt-1 text-gray-400">
                            Università degli Studi di Torino
                        </p>

                        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-400">
                            Un percorso interdisciplinare che mi ha permesso di
                            approfondire il rapporto tra innovazione, comunicazione,
                            società e tecnologie digitali.
                        </p>
                    </div>


                </div>
            </section>

            {/* COMPETENZE */}
            <section className="mt-24">
                <div className="mb-10 flex items-center gap-3">
                    <h2 className="text-2xl font-bold text-white md:text-3xl">
                        Competenze tecniche
                    </h2>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                    {skillGroups.map((group) => (
                        <div
                            key={group.title}
                            className="rounded-xl border border-white/10 bg-surface p-6"
                        >
                            <h3 className="mb-5 font-semibold text-white">
                                {group.title}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}

export default About;