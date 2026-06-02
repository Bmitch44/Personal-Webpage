export const profile = {
    name: "Brady Mitchelmore",
    location: "Portugal Cove St. Phillip's, NL",
    email: "bradymitchelmore@gmail.com",
    links: {
        github: "https://github.com/Bmitch44",
        linkedin: "https://www.linkedin.com/in/brady-mitchelmore-1b3b11195/",
        music: "https://bmitchmusic.com",
    },
}

export type Role = {
    title: string
    company: string
    employmentType: string
    start: string
    end: string | "Present"
    location: string
    arrangement: "Remote" | "Hybrid" | "On-site"
    stack?: string[]
    summary?: string
}

export const experience: Role[] = [
    {
        title: "AI & Automation Architect",
        company: "AI Simplifier",
        employmentType: "Full-time",
        start: "Sep 2025",
        end: "Present",
        location: "Remote",
        arrangement: "Remote",
        stack: ["Python", "Microsoft Azure", "Claude", "MCP"],
        summary: "Build AI tools, agent skills, and automations for a company that helps entrepreneurs apply AI to their work.",
    },
    {
        title: "Full Stack Developer",
        company: "Play On! Canada",
        employmentType: "Contract, part-time",
        start: "May 2025",
        end: "Aug 2025",
        location: "Remote",
        arrangement: "Remote",
        stack: ["React", "TypeScript", "PostgreSQL"],
        summary: "Second contract season working on Play On!'s tournament platform.",
    },
    {
        title: "Software Development Student",
        company: "Verafin",
        employmentType: "Co-op",
        start: "Jan 2025",
        end: "Aug 2025",
        location: "St. John's, NL",
        arrangement: "Hybrid",
        stack: ["Java", "JavaScript"],
        summary: "Eight-month co-op term at a financial-crime detection software company.",
    },
    {
        title: "Full Stack Developer",
        company: "Play On! Canada",
        employmentType: "Contract, full-time",
        start: "May 2024",
        end: "Aug 2024",
        location: "Remote",
        arrangement: "Remote",
        stack: ["TypeScript", "React", "Node.js", "PostgreSQL"],
        summary: "Built event scheduling and score-keeping used by staff to run tournaments with 1,000+ players. Shipped an admin dashboard for registrations, user types, and real-time reports. Moved heavy data processing client-side to improve responsiveness.",
    },
    {
        title: "Automation Engineer",
        company: "Infomatix",
        employmentType: "Part-time",
        start: "Nov 2023",
        end: "May 2024",
        location: "St. John's, NL",
        arrangement: "Remote",
        stack: ["Microsoft Power Platform", "Swagger / OpenAPI"],
        summary: "Built Power Platform automations for small businesses. Reduced manual data entry by ~90% on a client's reporting workflow. Wrote custom connectors for API integrations.",
    },
    {
        title: "Software Development Student",
        company: "Verafin",
        employmentType: "Internship",
        start: "Jul 2021",
        end: "Jul 2021",
        location: "St. John's, NL",
        arrangement: "Hybrid",
        stack: ["Python"],
        summary: "Month-long high-school program: financial-crime and cybersecurity training, Python bootcamp, robotics maze challenge, and a command-line blackjack game.",
    },
    {
        title: "Window Cleaner",
        company: "Student Works",
        employmentType: "Seasonal",
        start: "May 2023",
        end: "Aug 2023",
        location: "St. John's, NL",
        arrangement: "On-site",
    },
    {
        title: "Order Fulfillment Associate",
        company: "Sport Chek",
        employmentType: "Part-time",
        start: "Aug 2022",
        end: "May 2023",
        location: "St. John's, NL",
        arrangement: "On-site",
    },
    {
        title: "Warehouse Associate",
        company: "Canadian Tire",
        employmentType: "Part-time",
        start: "Jun 2020",
        end: "Jun 2021",
        location: "St. John's, NL",
        arrangement: "On-site",
    },
]

export type Education = {
    school: string
    degree: string
    start: string
    end: string
    notes?: string
}

export const education: Education[] = [
    {
        school: "Memorial University of Newfoundland",
        degree: "B.Sc. Computer Science (Smart Systems)",
        start: "2021",
        end: "2026",
    },
]
