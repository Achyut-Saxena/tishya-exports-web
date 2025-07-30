import { Button } from "@/components/ui/button"
import { ArrowRightIcon, GlobeAltIcon, TrophyIcon, TruckIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

/**
 * Hero Section Component with Blurred Video Background
 * Purpose: Create stunning first impression with centered company name
 * Features:
 * - Looping video background with subtle blur effect
 * - Responsive design optimized for all devices
 * - Enhanced readability with gradient overlay
 * - Performance optimized with proper video attributes
 * - Strict color palette usage (BFAFA1, E9E4D5, FFFAF0, 7A9B91, 4C5B56, A3B5A1)
 */
export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Container */}
      <div className="absolute inset-0 z-0">
        {/* Video Element with Blur Effect */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover scale-110 blur-sm"
          poster="/placeholder.svg?height=1080&width=1920&text=Granite+Quarry+Operations"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <img
            src="/placeholder.svg?height=1080&width=1920&text=Granite+Quarry+Operations"
            alt="Tishya Exports granite quarry operations"
            className="w-full h-full object-cover blur-sm"
          />
        </video>

        {/* Multi-layer Overlay for Enhanced Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-ivory/85 via-brand-cream/75 to-brand-beige/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-beige/60 via-transparent to-brand-ivory/40"></div>

        {/* Subtle Pattern Overlay for Texture */}
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-transparent via-brand-cream/30 to-transparent"></div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-12">
          {/* Centered Company Name - Prominent Display */}
          <div className="space-y-6">
            {/* Company Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-brand-beige/30 border-2 border-brand-beige/40 rounded-full backdrop-blur-md shadow-soft">
              <TrophyIcon className="h-5 w-5 text-font-sage mr-3" />
              <span className="text-font-sage font-body font-medium">Premium Granite Experts</span>
            </div>

            {/* Main Company Name - Enhanced for Readability */}
            <div className="space-y-4">
              <h1 className="font-display font-bold leading-none drop-shadow-lg">
                <span className="block text-6xl md:text-8xl lg:text-9xl text-font-dark">TISHYA</span>
                <span className="block text-4xl md:text-6xl lg:text-7xl text-font-sage mt-2">EXPORTS</span>
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-font-sage max-w-4xl mx-auto drop-shadow-md">
                Premium Granite & Quartz Exports Worldwide
              </p>
            </div>
          </div>

          {/* Value Proposition with Enhanced Background */}
          <div className="bg-brand-ivory/80 backdrop-blur-sm rounded-2xl p-8 mx-auto max-w-5xl border border-brand-cream/50 shadow-elegant">
            <p className="text-xl md:text-2xl text-font-sage font-body leading-relaxed">
              Leading exporter of high-quality natural stones from India's finest quarries. We deliver superior
              craftsmanship, durability, and elegance to businesses worldwide with our premium granite, quartz, marble,
              and sandstone solutions.
            </p>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="btn-primary text-lg px-10 py-5 shadow-elegant hover:shadow-strong backdrop-blur-sm"
              asChild
            >
              <Link href="#contact">
                Get Quote <ArrowRightIcon className="ml-3 h-6 w-6" />
              </Link>
            </Button>

            <Button size="lg" className="btn-secondary text-lg px-10 py-5 backdrop-blur-sm" asChild>
              <Link href="#products">View Products</Link>
            </Button>
          </div>

          {/* Key Statistics with Enhanced Glass Effect */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-4xl mx-auto">
            <div className="text-center space-y-3 p-6 bg-brand-ivory/70 backdrop-blur-md rounded-2xl border border-brand-cream/60 hover-lift shadow-soft hover:shadow-medium">
              <GlobeAltIcon className="h-12 w-12 text-font-sage mx-auto drop-shadow-sm" />
              <div className="text-4xl font-display font-bold text-font-dark number-text drop-shadow-sm">9+</div>
              <div className="text-lg font-body text-font-sage">Target Countries</div>
            </div>
            <div className="text-center space-y-3 p-6 bg-brand-ivory/70 backdrop-blur-md rounded-2xl border border-brand-cream/60 hover-lift shadow-soft hover:shadow-medium">
              <TrophyIcon className="h-12 w-12 text-font-sage mx-auto drop-shadow-sm" />
              <div className="text-4xl font-display font-bold text-font-dark number-text drop-shadow-sm">2+</div>
              <div className="text-lg font-body text-font-sage">Years Experience</div>
            </div>
            <div className="text-center space-y-3 p-6 bg-brand-ivory/70 backdrop-blur-md rounded-2xl border border-brand-cream/60 hover-lift shadow-soft hover:shadow-medium">
              <TruckIcon className="h-12 w-12 text-font-sage mx-auto drop-shadow-sm" />
              <div className="text-4xl font-display font-bold text-font-dark number-text drop-shadow-sm">4</div>
              <div className="text-lg font-body text-font-sage">Quarry Locations</div>
            </div>
          </div>

          {/* Floating Contact Information with Glass Effect */}
          <div className="inline-flex items-center space-x-4 bg-brand-beige/80 backdrop-blur-md border border-brand-cream/60 rounded-2xl px-8 py-4 float-animation shadow-elegant">
            <div className="text-center">
              <div className="text-sm font-body text-font-sage">Contact Us</div>
              <div className="font-display font-semibold text-lg text-font-dark drop-shadow-sm">+91 99455 88363</div>
              <div className="text-sm font-body text-font-sage">Bengaluru, India</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-font-sage rounded-full flex justify-center backdrop-blur-sm bg-brand-ivory/30">
          <div className="w-1 h-3 bg-font-sage rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Performance Optimization: Preload hint for video */}
      <link rel="preload" href="/hero-background.mp4" as="video" type="video/mp4" />
    </section>
  )
}
