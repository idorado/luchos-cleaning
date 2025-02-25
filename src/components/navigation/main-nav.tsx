import Link from "next/link"

const navItems = [
  { href: "/residential", label: "Residential" },
  { href: "/commercial", label: "Commercial" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
]

export function MainNav() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href} className="hover:text-primary transition-colors">
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
