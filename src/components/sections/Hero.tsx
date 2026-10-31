import { ArrowDown, Mail } from 'lucide-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section className="mx-auto flex min-h-[85vh] max-w-6xl items-center px-6 py-20">

            <div className="max-w-3xl">

                <p className="mb-6 flex items-center gap-3 text-sm font-medium tracking-wide text-accent">
                    JUNIOR FULL STACK DEVELOPER
                </p>

                <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
                    Ciao, sono Giulia.
                    <br />
                    <span className="text-accent">
                        Sviluppo esperienze digitali.
                    </span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-400">
                    Mi occupo di sviluppo web Full Stack, lavorando con tecnologie
                    come Angular, React, C# e .NET. Mi piace trasformare idee e
                    necessità in applicazioni web funzionali, curate e intuitive.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">

                    <Link
                        to="/projects"
                        className="rounded-lg bg-accent px-6 py-3 font-semibold text-background transition-all duration-200 hover:brightness-110"
                    >
                        Scopri i miei progetti
                    </Link>

                    <Link
                        to="/assets/giulia_abate_fullstackCV_1.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:border-accent hover:text-accent"
                    >
                        Scarica il CV
                    </Link>

                </div>

                <div className="mt-12 flex items-center gap-6">

                    <a
                        href="mailto:giulia.abate1101@gmail.com"
                        aria-label="Email"
                        className="text-gray-400 transition-colors hover:text-accent"
                    >
                        <Mail size={22} />
                    </a>

                    <a
                        href="https://github.com/GiuliaAbate"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="text-gray-400 transition-colors hover:text-accent"
                    >
                        <FontAwesomeIcon icon={faGithub} size="xl" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/giulia-abate/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="text-gray-400 transition-colors hover:text-accent"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="xl" />
                    </a>

                    <a
                        href="#about-preview"
                        aria-label="Scopri di più"
                        className="ml-2 flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-accent"
                    >
                        Scopri di più
                        <ArrowDown size={16} />
                    </a>

                </div>

            </div>

        </section>
    );
}

export default Hero;
