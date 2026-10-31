function Footer() {
    return (
        <footer className="border-t border-white/10 px-6 py-6">
            <div className="mx-auto max-w-6xl text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Giulia Abate
            </div>
        </footer>
    );
}

export default Footer;