import Link from "next/link"
import type { Metadata } from "next"
import { Mail, Github, Linkedin, Music } from "lucide-react"
import { profile } from "@/lib/profile"

export const metadata: Metadata = {
    title: "Contact",
    description: "Reach Brady Mitchelmore via email, GitHub, or LinkedIn.",
}

export default function ContactPage() {
    const links = [
        { href: `mailto:${profile.email}`, label: "Email", value: profile.email, icon: Mail, external: false },
        { href: profile.links.github, label: "GitHub", value: "Bmitch44", icon: Github, external: true },
        { href: profile.links.linkedin, label: "LinkedIn", value: "brady-mitchelmore", icon: Linkedin, external: true },
        { href: profile.links.music, label: "Music", value: "bmitchmusic.com", icon: Music, external: true },
    ]

    return (
        <main className="flex flex-col items-center py-12 md:py-16">
            <div className="container mx-auto max-w-2xl px-4 md:px-6 space-y-10">
                <header className="space-y-3">
                    <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl">Contact</h1>
                    <p className="text-muted-foreground">
                        Best place to reach me is email. Anything work-related, drop a line on LinkedIn.
                    </p>
                </header>

                <div className="grid gap-3 md:grid-cols-2">
                    {links.map((l) => (
                        <Link
                            key={l.label}
                            href={l.href}
                            target={l.external ? "_blank" : undefined}
                            className="flex items-center gap-4 p-4 border rounded-xl hover:bg-muted/50 transition-colors"
                        >
                            <l.icon className="h-6 w-6 shrink-0" />
                            <div className="min-w-0">
                                <div className="font-medium">{l.label}</div>
                                <div className="text-sm text-muted-foreground truncate">{l.value}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    )
}
