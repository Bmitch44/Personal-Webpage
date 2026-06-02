export type Project = {
    slug: string
    title: string
    blurb: string
    stack: string[]
    repo?: string
    live?: string
    video?: string
    featured?: boolean
    year: number
}

export const projects: Project[] = [
    {
        slug: "bmitchmusic",
        title: "BMITCHMusic",
        blurb: "My music site. Hand-built Next.js front-end pulling the latest tracks from my SoundCloud catalog.",
        stack: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
        repo: "https://github.com/Bmitch44/bmitchmusic",
        live: "https://bmitchmusic.com",
        featured: true,
        year: 2025,
    },
    {
        slug: "pycanvas",
        title: "PyCanvas",
        blurb: "Programmatically build Obsidian canvases from Python — useful for laying out generated mind maps and storyboards directly inside a vault.",
        stack: ["Python", "Obsidian"],
        repo: "https://github.com/Bmitch44/PyCanvas",
        featured: true,
        year: 2025,
    },
    {
        slug: "short-form-content-generator",
        title: "Short-Form Content Generator",
        blurb: "Full-stack app that pulls a YouTube clip, scripts and narrates it with an LLM, and composes a vertical short. Built end-to-end across Python and React.",
        stack: ["Python", "FastAPI", "React", "TypeScript", "yt-dlp", "OpenAI", "MoviePy"],
        video: "https://youtu.be/ok4H1P70TJ8",
        featured: true,
        year: 2024,
    },
    {
        slug: "teetimes",
        title: "Tee Times Tracker",
        blurb: "Tracks public tee times across local golf courses so I can find a slot without checking five different booking pages.",
        stack: ["Python"],
        repo: "https://github.com/Bmitch44/teetimes",
        year: 2025,
    },
    {
        slug: "textract-demo",
        title: "Textract PDF Chat",
        blurb: "Pipe a scanned PDF through AWS Textract, then chat with the contents via the OpenAI API. Built as a demo for a real client workflow.",
        stack: ["Python", "AWS Textract", "OpenAI", "Flask"],
        repo: "https://github.com/Bmitch44/textract-demo",
        video: "https://youtu.be/He9KpaIJ6_s",
        year: 2025,
    },
    {
        slug: "stock-prediction",
        title: "Stock Price Prediction Model",
        blurb: "LSTM trained on Yahoo Finance history that forecasts the next five days of a ticker. Exploratory project — not investment advice.",
        stack: ["Python", "Pandas", "TensorFlow"],
        repo: "https://github.com/Bmitch44/stock-prediction-model",
        year: 2024,
    },
]
