import { Button } from "@/components/ui/button"
import { ArrowRightIcon, GlobeAltIcon, TrophyIcon, TruckIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

/**
 * Hero Section Component with Video Background
 * Purpose: Create stunning first impression with centered company name
 * Features:
 * - Looping video background
 * - Centered company branding with Playfair Display
 * - Strict color palette usage
 * - Font colors (7A9B91, 4C5B56, A3B5A1)
 */
export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/placeholder.mp4" type="video/mp4" />
          {/* Fallback background image if video doesn't load */}
          <div className="w-full h-full bg-gradient-to-br from-brand-ivory via-brand-cream to-brand-beige"></div>
        </video>

        {/* Video Overlay */}
        <div className="absolute inset-0 video-overlay"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-12">
          {/* Centered Company Name - Prominent Display */}
          <div className="space-y-6">
            {/* Company Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-brand-beige/20 border-2 border-brand-beige/30 rounded-full backdrop-blur-sm">
              <TrophyIcon className="h-5 w-5 text-font-sage mr-3" />
              <span className="text-font-sage font-body font-medium">Premium Granite Experts</span>
            </div>

            {/* Main Company Name - Centered and Prominent */}
            <div className="space-y-4">
              <h1 className="font-display font-bold text-font-dark leading-none">
                <span className="block text-6xl md:text-8xl lg:text-9xl">TISHYA</span>
                <span className="block text-4xl md:text-6xl lg:text-7xl text-font-sage mt-2">EXPORTS</span>
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-font-sage max-w-4xl mx-auto">
                Premium Granite & Quartz Exports Worldwide
              </p>
            </div>
          </div>

          {/* Value Proposition */}
          <p className="text-xl md:text-2xl text-font-sage max-w-4xl mx-auto font-body leading-relaxed">
            Leading exporter of high-quality natural stones from India's finest quarries. We deliver superior
            craftsmanship, durability, and elegance to businesses worldwide with our premium granite, quartz, marble,
            and sandstone solutions.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="btn-primary text-lg px-10 py-5 shadow-elegant hover:shadow-strong" asChild>
              <Link href="#contact">
                Get Quote <ArrowRightIcon className="ml-3 h-6 w-6" />
              </Link>
            </Button>

            <Button size="lg" className="btn-secondary text-lg px-10 py-5" asChild>
              <Link href="#products">View Products</Link>
            </Button>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-4xl mx-auto">
            <div className="text-center space-y-3 p-6 bg-brand-ivory/60 backdrop-blur-sm rounded-2xl border border-brand-cream/50 hover-lift">
              <GlobeAltIcon className="h-12 w-12 text-font-sage mx-auto" />
              <div className="text-4xl font-display font-bold text-font-dark number-text">9+</div>
              <div className="text-lg font-body text-font-sage">Target Countries</div>
            </div>
            <div className="text-center space-y-3 p-6 bg-brand-ivory/60 backdrop-blur-sm rounded-2xl border border-brand-cream/50 hover-lift">
              <TrophyIcon className="h-12 w-12 text-font-sage mx-auto" />
              <div className="text-4xl font-display font-bold text-font-dark number-text">2+</div>
              <div className="text-lg font-body text-font-sage">Years Experience</div>
            </div>
            <div className="text-center space-y-3 p-6 bg-brand-ivory/60 backdrop-blur-sm rounded-2xl border border-brand-cream/50 hover-lift">
              <TruckIcon className="h-12 w-12 text-font-sage mx-auto" />
              <div className="text-4xl font-display font-bold text-font-dark number-text">4</div>
              <div className="text-lg font-body text-font-sage">Quarry Locations</div>
            </div>
          </div>

          {/* Floating Contact Information */}
          <div className="inline-flex items-center space-x-4 bg-brand-beige/90 backdrop-blur-sm border border-brand-cream rounded-2xl px-8 py-4 float-animation">
            <div className="text-center">
              <div className="text-sm font-body text-font-sage">Contact Us</div>
              <div className="font-display font-semibold text-lg text-font-dark">+91 99455 88363</div>
              <div className="text-sm font-body text-font-sage">Bengaluru, India</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-font-sage rounded-full flex justify-center">
          <div className="w-1 h-3 bg-font-sage rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
