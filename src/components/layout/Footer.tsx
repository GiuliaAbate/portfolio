import { Mail } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="border-t border-white/10 px-6 py-8">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
                <p className="text-sm text-gray-500">© {new Date().getFullYear()} Giulia Abate</p>
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
                    <a href="mailto:giulia.abate1101@gmail.com" className="inline-flex items-center gap-2 transition-colors hover:text-accent">
                        <Mail size={16} /> Email
                    </a>
                    <a href="https://github.com/GiuliaAbate" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-accent">
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/giulia-abate/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-accent">
                        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                    </a>
                    <a href="/assets/giulia_abate_fullstackCV.pdf" download="giulia_abate_fullstackCV.pdf" className="transition-colors hover:text-accent">
                        Scarica CV
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
