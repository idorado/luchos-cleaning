"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { Menu, X } from "lucide-react";

const locationList = [
  { name: "Castle Rock", slug: "castle-rock" },
  { name: "Centennial", slug: "centennial" },
  { name: "Denver", slug: "denver" },
  { name: "Englewood", slug: "englewood" },
  { name: "Greenwood Village", slug: "greenwood-village" },
  { name: "Highlands Ranch", slug: "highlands-ranch" },
  { name: "Littleton", slug: "littleton" },
  { name: "Lone Tree", slug: "lone-tree" },
  { name: "Parker", slug: "parker" },
];

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
  {
    label: "Locations",
    subItems: [
      { href: "/service-areas", label: "All Locations" },
      ...locationList.map(loc => ({
        href: `/cleaning-services-${loc.slug}`,
        label: loc.name
      }))
    ]
  },
  { href: "/about-us", label: "About Us" },
  { href: "/work-with-us", label: "Work With Us" },
];

export function MainNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  // Cerrar Locations dropdown al hacer click fuera
  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      const menu = document.getElementById('locations-dropdown');
      if (menu && !menu.contains(e.target as Node)) {
        setLocationsOpen(false);
      }
    }
    if (locationsOpen) {
      window.addEventListener('mousedown', handleClick);
    } else {
      window.removeEventListener('mousedown', handleClick);
    }
    return () => window.removeEventListener('mousedown', handleClick);
  }, [locationsOpen]);

  return (
    <>
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <div key={item.href || item.label} className="relative group">
            {item.label === "Locations" ? (
              <>
                <button
                  type="button"
                  onClick={() => setLocationsOpen(!locationsOpen)}
                  className="flex items-center gap-1 hover:text-primary transition-colors focus:outline-none"
                  aria-expanded={locationsOpen}
                  aria-haspopup="menu"
                >
                  {item.label}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </>
            ) : item.subItems ? (
              <>
                <button
                  type="button"
                  className={cn(
                    "flex items-center gap-1 hover:text-primary transition-colors focus:outline-none",
                    pathname === item.href && "font-medium text-primary"
                  )}
                  aria-haspopup="menu"
                  aria-expanded="false"
                >
                  {item.label}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50">
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
        
        {/* Menú de Locations renderizado de forma separada */}
        {locationsOpen && (
          <div 
            id="locations-dropdown" 
            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-[9999] border-4 border-red-500"
            style={{ top: '100%' }}
          >
            <div className="text-xs text-red-700 font-bold mb-2 px-4">MENÚ DE LOCATIONS (DEBUG)</div>
            {navItems
              .find(item => item.label === "Locations")?.subItems
              ?.map((subItem) => (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setLocationsOpen(false)}
                >
                  {subItem.label}
                </Link>
              ))}
          </div>
        )}
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
        {/* Debug: Elemento de prueba */}
        <div className="absolute top-16 left-0 right-0 bg-red-500 text-white p-4 z-[9999] border-4 border-yellow-500">
          DEBUG: Este es un elemento de prueba
        </div>
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
