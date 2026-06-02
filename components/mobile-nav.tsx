"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet"
import { profile } from "@/lib/profile"

export function MobileNav() {
    const [open, setOpen] = React.useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 flex flex-col">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="px-7">
                    <Link
                        href="/"
                        className="flex items-center"
                        onClick={() => setOpen(false)}
                    >
                        <span className="font-bold text-2xl">Brady Mitchelmore</span>
                    </Link>
                </div>
                <div className="flex flex-col gap-4 py-8 px-7">
                    <Link
                        href="/resume"
                        className="text-lg font-medium text-foreground/60 transition-colors hover:text-foreground"
                        onClick={() => setOpen(false)}
                    >
                        Resume
                    </Link>
                    <Link
                        href="/projects"
                        className="text-lg font-medium text-foreground/60 transition-colors hover:text-foreground"
                        onClick={() => setOpen(false)}
                    >
                        Projects
                    </Link>
                    <Link
                        href="/contact"
                        className="text-lg font-medium text-foreground/60 transition-colors hover:text-foreground"
                        onClick={() => setOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
                <div className="mt-auto px-7 pb-8 flex flex-col gap-4">
                    <div className="text-sm text-muted-foreground">
                        Elsewhere
                    </div>
                    <div className="flex gap-4 flex-wrap">
                        <Link href={profile.links.github} target="_blank" className="text-foreground/60 hover:text-foreground transition-colors">
                            GitHub
                        </Link>
                        <Link href={profile.links.linkedin} target="_blank" className="text-foreground/60 hover:text-foreground transition-colors">
                            LinkedIn
                        </Link>
                        <Link href={profile.links.music} target="_blank" className="text-foreground/60 hover:text-foreground transition-colors">
                            Music
                        </Link>
                        <Link href={`mailto:${profile.email}`} className="text-foreground/60 hover:text-foreground transition-colors">
                            Email
                        </Link>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
