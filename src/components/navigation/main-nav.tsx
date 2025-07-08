"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { 
    href: "#", 
    label: "Services",
    subItems: [
      { href: "/residential", label: "Residential Cleaning" },
      { href: "/commercial", label: "Commercial Cleaning" },
      { href: "/windows", label: "Window Cleaning" },
      { href: "/emergency", label: "Emergency Cleaning" },
    ]
  },
  { href: "/service-areas", label: "Locations" },
  { href: "/about-us", label: "About Us" },
  { href: "/work-with-us", label: "Work With Us" },
];

export function MainNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <div key={item.href} className="relative group">
            {item.subItems ? (
              <>
                <button
                  className={cn(
                    "flex items-center gap-1 hover:text-primary transition-colors",
                    pathname === item.href && "font-medium text-primary"
                  )}
                >
                  {item.label}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link
                href={item.href}
                className={cn(
                  "hover:text-primary transition-colors",
                  pathname === item.href && "font-medium text-primary"
                )}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
      
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background z-50 p-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
            <div key={item.href} className="w-full">
              {item.subItems ? (
                <div className="space-y-2">
                  <div className="font-medium px-2 py-1">{item.label}</div>
                  <div className="pl-4 space-y-1">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={cn(
                          "block hover:text-primary transition-colors p-2",
                          pathname === subItem.href && "font-medium text-primary bg-accent/50 rounded-md"
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "block hover:text-primary transition-colors p-2",
                    pathname === item.href && "font-medium text-primary bg-accent/50 rounded-md"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          </nav>
        </div>
      )}
    </>
  );
}
