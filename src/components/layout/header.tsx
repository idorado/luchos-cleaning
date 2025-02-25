import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/navigation/main-nav"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-12">
            <Link href="/" className="font-bold text-2xl">
              Kathy Clean
            </Link>
            <MainNav />
          </div>
          <Button>Free Estimate</Button>
        </div>
      </div>
    </header>
  )
}
