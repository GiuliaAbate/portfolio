export type Project = {
    slug: string;
    name: string;
    category: string;
    image: string | null;
    video?: string | null;
    description: string;
    technologies: string[];
    featured: boolean;
};

export const projects: Project[] = [
    {
        slug: 'ridewild',
        name: 'RideWild',
        category: 'E-commerce',
        image: '/assets/ridewild.png',
        video: '/assets/ridewild-preview.gif',
        description:
            'Piattaforma e-commerce dedicata alla vendita di biciclette e articoli per il ciclismo, sviluppata con un backend .NET e un frontend Angular.',
        technologies: [
            'Angular',
            'C#',
            '.NET Core',
            'Entity Framework',
            'SQL Server',
            'MongoDB',
        ],
        featured: true,
    },
    {
        slug: 'betauni',
        name: 'BetaUni',
        category: 'Applicazione web',
        image: '/assets/betauni.png',
        video: '/assets/betauni-preview.gif',
        description:
            'Gestionale universitario per la gestione di studenti, professori, dipartimenti, insegnamenti, esami e laboratori, con accessi e funzionalità differenziati in base al ruolo.',
        technologies: [
            'Angular',
            'C#',
            'ASP.NET Core',
            'Entity Framework Core',
            'SQL Server',
        ],
        featured: true,
    },
    {
        slug: 'gamenect',
        name: 'GameNect',
        category: 'Progetto di tesi',
        image: '/assets/gamenect.png',
        video: '/assets/gamenect-tesi.gif',
        description:
            'Progettazione di una piattaforma social dedicata ai videogiocatori italiani, sviluppata seguendo i principi dell’Interaction Design e un approccio orientato alle esigenze degli utenti.',
        technologies: [
            'Figma',
            'WordPress'],
        featured: true,
    },
    {
        slug: 'pomotime',
        name: 'PomoTime',
        category: 'Progetto personale',
        image: '/assets/pomotime.png',
        video: '/assets/pomotime-preview.gif',
        description:
            'Piccola applicazione per organizzare le task e gestire sessioni di lavoro e pausa attraverso un timer Pomodoro.',
        technologies: [
            'React',
            'TypeScript',
            'Tailwind CSS'],
        featured: false,
    },
];
