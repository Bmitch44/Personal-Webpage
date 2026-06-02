import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/profile"

import { MobileNav } from "@/components/mobile-nav"

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-14 items-center px-4">
                <MobileNav />
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="hidden font-bold sm:inline-block">
                            Brady Mitchelmore
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link href="/resume" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            Resume
                        </Link>
                        <Link href="/projects" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            Projects
                        </Link>
                        <Link href="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            Contact
                        </Link>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                    </div>
                    <nav className="flex items-center gap-2">
                        <Link href={profile.links.github} target="_blank" rel="noreferrer">
                            <Button variant="ghost" size="sm">
                                GitHub
                            </Button>
                        </Link>
                        <ModeToggle />
                    </nav>
                </div>
            </div>
        </header>
    )
}
