import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { profile, experience } from "@/lib/profile"
import { projects } from "@/lib/projects"

export default function Home() {
  const currentRole = experience[0]
  const featured = projects.filter((p) => p.featured)
  const currentYear = new Date().getFullYear()

  return (
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-3xl px-4 md:px-6 flex flex-col items-start space-y-6">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">
              {currentRole.title} · {currentRole.company}
            </p>
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
              {profile.name}.
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-[640px]">
              I build software, mostly with AI and automation in the mix. Recently graduated CS from Memorial University. Based in Newfoundland.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/projects">
              <Button size="lg">See Projects</Button>
            </Link>
            <Link href="/resume">
              <Button variant="outline" size="lg">Resume</Button>
            </Link>
            <Link href={profile.links.music} target="_blank">
              <Button variant="ghost" size="lg">Music →</Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator />

      {/* Featured projects */}
      <section className="w-full py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Selected Work</h2>
            <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              All projects →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <Card key={p.slug} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col gap-4">
                  <p className="text-sm text-muted-foreground">{p.blurb}</p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {p.stack.slice(0, 4).map((s) => (
                      <span key={s} className="text-xs px-2 py-0.5 rounded border border-border text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 text-sm">
                    {p.live && (
                      <Link href={p.live} target="_blank" className="hover:underline underline-offset-4">
                        Live
                      </Link>
                    )}
                    {p.repo && (
                      <Link href={p.repo} target="_blank" className="hover:underline underline-offset-4">
                        Repo
                      </Link>
                    )}
                    {p.video && (
                      <Link href={p.video} target="_blank" className="hover:underline underline-offset-4">
                        Video
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Footer */}
      <footer className="w-full py-8 bg-background">
        <div className="container mx-auto max-w-5xl px-4 md:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Brady Mitchelmore
          </p>
          <div className="flex gap-4 text-sm">
            <Link href={profile.links.github} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </Link>
            <Link href={profile.links.linkedin} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </Link>
            <Link href={profile.links.music} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
              Music
            </Link>
            <Link href={`mailto:${profile.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
              Email
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
