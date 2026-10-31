import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    const linkStyle = ({ isActive }: { isActive: boolean }) =>
        `transition-colors duration-200 hover:text-accent ${isActive ? 'text-accent' : 'text-gray-400'
        }`;

    return (
        <header className="border-b border-white/10">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

                <Link to="/" className="text-xl font-bold tracking-tight text-white">
                    Giulia<span className="text-accent">.</span>
                </Link>

                <div className="flex items-center gap-8 text-sm font-medium">
                    <NavLink to="/" className={linkStyle}>
                        Home
                    </NavLink>

                    <NavLink to="/about" className={linkStyle}>
                        Chi sono
                    </NavLink>

                    <NavLink to="/projects" className={linkStyle}>
                        Progetti
                    </NavLink>

                    <NavLink to="/contact" className={linkStyle}>
                        Contatti
                    </NavLink>
                </div>

            </nav>
        </header>
    );
}

export default Navbar;