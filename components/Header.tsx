"use client"

import { useState } from "react"
import Link from "next/link"
import { Bars3Icon, HomeModernIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

/**
 * Header Component - Elegant Navigation Bar
 * Features:
 * - Responsive design with mobile hamburger menu
 * - Strict color palette usage (BFAFA1, E9E4D5, FFFAF0)
 * - Font colors (7A9B91, 4C5B56, A3B5A1)
 * - Playfair Display font for branding
 * - Heroicons for visual elements
 */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  // Navigation menu items - easily customizable
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Projects", href: "#projects" },
    { name: "Gallery", href: "#gallery" },
    { name: "Import/Export", href: "/import-export" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 w-full bg-brand-ivory/95 backdrop-blur-md z-50 border-b border-brand-cream shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Company Logo and Name */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-brand-beige rounded-xl group-hover:bg-brand-cream transition-colors duration-300">
              <img src="public/logo/your-logo.png" alt="Tishya Exports Logo" className="h-8 w-8" />
            </div>
            <div>
              <span className="text-2xl font-display font-bold text-font-dark">TISHYA</span>
              <span className="block text-sm font-display text-font-sage -mt-1 tracking-wider">EXPORTS</span>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-font-sage hover:text-font-dark transition-colors duration-300 font-body font-medium text-lg relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-font-dark transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-font-sage hover:text-font-dark hover:bg-brand-cream/50"
              >
                <Bars3Icon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>

            {/* Mobile Menu Content */}
            <SheetContent side="right" className="bg-brand-ivory border-brand-cream">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-font-sage hover:text-font-dark transition-colors duration-300 font-body font-medium text-xl"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
