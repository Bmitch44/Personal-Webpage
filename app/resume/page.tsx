import Link from "next/link"
import type { Metadata } from "next"
import { Separator } from "@/components/ui/separator"
import { profile, experience, education } from "@/lib/profile"

export const metadata: Metadata = {
    title: "Resume",
    description: "Work experience, education, and stack for Brady Mitchelmore.",
}

export default function ResumePage() {
    return (
        <main className="flex flex-col items-center py-12 md:py-16">
            <div className="container mx-auto max-w-3xl px-4 md:px-6 space-y-12">
                {/* Header */}
                <header className="space-y-3">
                    <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl">Resume</h1>
                    <p className="text-muted-foreground">
                        {profile.location} ·{" "}
                        <Link href={`mailto:${profile.email}`} className="hover:underline underline-offset-4">
                            {profile.email}
                        </Link>
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        <Link href={profile.links.github} target="_blank" className="hover:underline underline-offset-4">
                            GitHub
                        </Link>
                        <Link href={profile.links.linkedin} target="_blank" className="hover:underline underline-offset-4">
                            LinkedIn
                        </Link>
                        <Link href={profile.links.music} target="_blank" className="hover:underline underline-offset-4">
                            Music
                        </Link>
                    </div>
                </header>

                <Separator />

                {/* Experience */}
                <section className="space-y-8">
                    <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
                    <ol className="space-y-8">
                        {experience.map((role, i) => (
                            <li key={`${role.company}-${role.start}-${i}`} className="grid gap-2 md:grid-cols-[160px_1fr] md:gap-6">
                                <div className="text-sm text-muted-foreground md:text-right">
                                    <div>{role.start} – {role.end}</div>
                                    <div className="text-xs">{role.arrangement}</div>
                                </div>
                                <div className="space-y-2">
                                    <div>
                                        <h3 className="font-semibold leading-tight">
                                            {role.title}{" "}
                                            <span className="text-muted-foreground font-normal">· {role.company}</span>
                                        </h3>
                                        <p className="text-xs text-muted-foreground">
                                            {role.employmentType} · {role.location}
                                        </p>
                                    </div>
                                    {role.summary && (
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {role.summary}
                                        </p>
                                    )}
                                    {role.stack && role.stack.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5 pt-1">
                                            {role.stack.map((s) => (
                                                <span key={s} className="text-xs px-2 py-0.5 rounded border border-border text-muted-foreground">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ol>
                </section>

                <Separator />

                {/* Education */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold tracking-tight">Education</h2>
                    <ul className="space-y-4">
                        {education.map((e) => (
                            <li key={e.school} className="grid gap-2 md:grid-cols-[160px_1fr] md:gap-6">
                                <div className="text-sm text-muted-foreground md:text-right">
                                    {e.start} – {e.end}
                                </div>
                                <div>
                                    <h3 className="font-semibold leading-tight">{e.school}</h3>
                                    <p className="text-sm text-muted-foreground">{e.degree}</p>
                                    {e.notes && <p className="text-sm text-muted-foreground">{e.notes}</p>}
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </main>
    )
}
