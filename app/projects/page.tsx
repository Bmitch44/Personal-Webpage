import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { projects } from "@/lib/projects"

export const metadata: Metadata = {
    title: "Projects",
    description: "Selected projects by Brady Mitchelmore.",
}

export default function ProjectsPage() {
    const sorted = [...projects].sort((a, b) => b.year - a.year)

    return (
        <main className="flex flex-col items-center py-12 md:py-16">
            <div className="container mx-auto max-w-5xl px-4 md:px-6 space-y-10">
                <header className="space-y-3">
                    <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl">Projects</h1>
                    <p className="text-muted-foreground max-w-[640px]">
                        A mix of work, school, and side projects. Latest first.
                    </p>
                </header>

                <div className="grid gap-4 md:grid-cols-2">
                    {sorted.map((p) => (
                        <Card key={p.slug} className="flex flex-col">
                            <CardHeader>
                                <div className="flex items-baseline justify-between gap-3">
                                    <CardTitle className="text-lg">{p.title}</CardTitle>
                                    <span className="text-xs text-muted-foreground shrink-0">{p.year}</span>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col gap-4">
                                <p className="text-sm text-muted-foreground leading-relaxed">{p.blurb}</p>
                                <div className="flex flex-wrap gap-1.5 mt-auto">
                                    {p.stack.map((s) => (
                                        <span key={s} className="text-xs px-2 py-0.5 rounded border border-border text-muted-foreground">
                                            {s}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4 text-sm">
                                    {p.live && (
                                        <Link href={p.live} target="_blank" className="hover:underline underline-offset-4">
                                            Live →
                                        </Link>
                                    )}
                                    {p.repo && (
                                        <Link href={p.repo} target="_blank" className="hover:underline underline-offset-4">
                                            Repo →
                                        </Link>
                                    )}
                                    {p.video && (
                                        <Link href={p.video} target="_blank" className="hover:underline underline-offset-4">
                                            Video →
                                        </Link>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    )
}
