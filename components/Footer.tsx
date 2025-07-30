import Link from "next/link"
import { HomeModernIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline"

/**
 * Footer Component
 * Purpose: Provide comprehensive site navigation and company information
 * Features: Custom color palette, Heroicons, elegant typography
 * Design: Professional layout with brand consistency
 */
export default function Footer() {
  // Quick navigation links
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Projects", href: "#projects" },
  ]

  // Product categories for footer
  const products = [
    { name: "Granite", href: "#products" },
    { name: "Quartz", href: "#products" },
    { name: "Marble", href: "#products" },
    { name: "Sandstone", href: "#products" },
  ]

  // Export markets for footer
  const exportMarkets = ["USA", "UK", "South Africa", "China", "Poland", "UAE"]

  return (
    <footer className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-brand-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Information */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="p-2 bg-brand-beige rounded-xl">
                <HomeModernIcon className="h-8 w-8 text-stone-900" />
              </div>
              <div>
                <span className="text-2xl font-display font-bold">TISHYA</span>
                <span className="block text-sm font-display text-brand-beige -mt-1 tracking-wider">EXPORTS</span>
              </div>
            </Link>

            <p className="text-brand-cream font-body leading-relaxed">
              Leading exporter of premium granite, quartz, marble, and sandstone from India's finest quarries to global
              markets.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-brand-beige/20 rounded-xl flex items-center justify-center hover:bg-brand-beige/30 transition-colors"
              >
                <span className="text-brand-beige">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-brand-beige/20 rounded-xl flex items-center justify-center hover:bg-brand-beige/30 transition-colors"
              >
                <span className="text-brand-beige">in</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-brand-beige/20 rounded-xl flex items-center justify-center hover:bg-brand-beige/30 transition-colors"
              >
                <span className="text-brand-beige">ig</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-brand-beige mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-brand-cream hover:text-brand-beige transition-colors font-body"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/import-export"
                  className="text-brand-cream hover:text-brand-beige transition-colors font-body"
                >
                  Import/Export
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-brand-beige mb-6 text-lg">Our Products</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.name}>
                  <Link
                    href={product.href}
                    className="text-brand-cream hover:text-brand-beige transition-colors font-body"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Export Markets */}
            <div className="mt-8">
              <h5 className="font-display font-medium text-brand-beige mb-3">Export Markets</h5>
              <div className="flex flex-wrap gap-2">
                {exportMarkets.map((market) => (
                  <span key={market} className="px-2 py-1 bg-stone-700 text-brand-cream font-body text-xs rounded-lg">
                    {market}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-display font-semibold text-brand-beige mb-6 text-lg">Contact Info</h4>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-brand-beige" />
                <span className="text-brand-cream font-body">+91 99455 88363</span>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-brand-beige" />
                <span className="text-brand-cream font-body">info@tishyaexports.com</span>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-brand-beige mt-1" />
                <div className="text-brand-cream font-body">
                  <p>Sriven Skypark</p>
                  <p>Bengaluru, Karnataka 560076</p>
                  <p>India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-stone-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-brand-cream font-body">
              © {new Date().getFullYear()} Tishya Exports. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-8 font-body">
              <Link href="#" className="text-brand-cream hover:text-brand-beige transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-brand-cream hover:text-brand-beige transition-colors">
                Terms of Service
              </Link>
              <Link href="/import-export" className="text-brand-cream hover:text-brand-beige transition-colors">
                Import/Export Code
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-stone-500 font-body text-sm">
              Proudly exporting India's finest natural stones to the world | Quarries in Karnataka, Rajasthan, Andhra
              Pradesh & Tamil Nadu
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
