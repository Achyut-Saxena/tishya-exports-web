import { Card, CardContent } from "@/components/ui/card"
import { MapPinIcon, UsersIcon, GlobeAltIcon, TrophyIcon } from "@heroicons/react/24/outline"

/**
 * About Us Section Component
 * Purpose: Establish credibility with elegant design
 * Features: Strict color palette usage, Heroicons, responsive cards
 * Typography: Playfair Display for headings, Frank Ruhl Libre for body
 * Colors: Only brand colors (BFAFA1, E9E4D5, FFFAF0) and font colors (7A9B91, 4C5B56, A3B5A1)
 */
export default function About() {
  // Quarry locations - easily editable
  const quarryLocations = ["Karnataka", "Rajasthan", "Andhra Pradesh", "Tamil Nadu"]

  // Target export markets - easily expandable
  const targetMarkets = ["USA", "UK", "South Africa", "China", "Poland", "UAE", "Italy", "France", "Germany"]

  return (
    <section id="about" className="py-24 bg-brand-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-font-dark mb-6">About Tishya Exports</h2>
          <p className="text-xl md:text-2xl text-font-sage max-w-4xl mx-auto font-body leading-relaxed">
            A leading name in premium granite exports, delivering high-quality natural stones to businesses worldwide
            with superior craftsmanship, durability, and elegance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Company Story */}
          <div className="space-y-8">
            <h3 className="font-display font-semibold text-font-dark">Our Story</h3>
            <div className="space-y-6 text-font-sage font-body text-lg leading-relaxed">
              <p>
                As a homegrown brand, we source the finest granites from India's rich landscapes, transforming them into
                refined surfaces that elevate spaces. Our customer-centric approach allows us to offer tailored
                solutions for architects, builders, and importers across the globe.
              </p>
              <p>
                We specialize in domestic and international exports, providing seamless logistics and competitive
                pricing. Whether for residential, commercial, or large-scale projects, Tishya Exports guarantees premium
                quality at the best rates, making us a preferred choice for global granite solutions.
              </p>
            </div>
          </div>

          {/* Company Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-elegant border-4 border-brand-cream">
              <img
                src="/placeholder.svg?height=500&width=700"
                alt="Tishya Exports granite processing facility"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-beige rounded-full opacity-20 float-animation"></div>
          </div>
        </div>

        {/* Key Information Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quarry Locations Card */}
          <Card className="border-2 border-brand-cream hover:border-brand-beige transition-all duration-300 hover-lift bg-brand-ivory shadow-soft hover:shadow-medium">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-brand-beige rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPinIcon className="h-8 w-8 text-font-dark" />
              </div>
              <h4 className="font-display font-semibold text-font-dark mb-4">Our Quarries</h4>
              <div className="space-y-2">
                {quarryLocations.map((location) => (
                  <div key={location} className="font-body text-font-sage">
                    {location}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Target Markets Card */}
          <Card className="border-2 border-brand-cream hover:border-brand-beige transition-all duration-300 hover-lift bg-brand-ivory shadow-soft hover:shadow-medium">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-brand-beige rounded-2xl flex items-center justify-center mx-auto mb-6">
                <GlobeAltIcon className="h-8 w-8 text-font-dark" />
              </div>
              <h4 className="font-display font-semibold text-font-dark mb-4">Export Markets</h4>
              <div className="font-body text-font-sage space-y-2">
                {targetMarkets.slice(0, 4).map((market) => (
                  <div key={market}>{market}</div>
                ))}
                <div className="text-font-light font-medium">+5 more</div>
              </div>
            </CardContent>
          </Card>

          {/* Experience Card */}
          <Card className="border-2 border-brand-cream hover:border-brand-beige transition-all duration-300 hover-lift bg-brand-ivory shadow-soft hover:shadow-medium">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-brand-beige rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrophyIcon className="h-8 w-8 text-font-dark" />
              </div>
              <h4 className="font-display font-semibold text-font-dark mb-4">Experience</h4>
              <div className="text-4xl font-display font-bold text-font-sage mb-3 number-text">2+</div>
              <div className="font-body text-font-sage">Years of Operational Excellence in Stone Exports</div>
            </CardContent>
          </Card>

          {/* Quality Assurance Card */}
          <Card className="border-2 border-brand-cream hover:border-brand-beige transition-all duration-300 hover-lift bg-brand-ivory shadow-soft hover:shadow-medium">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-brand-beige rounded-2xl flex items-center justify-center mx-auto mb-6">
                <UsersIcon className="h-8 w-8 text-font-dark" />
              </div>
              <h4 className="font-display font-semibold text-font-dark mb-4">Quality Focus</h4>
              <div className="font-body text-font-sage leading-relaxed">
                Superior craftsmanship and rigorous quality checks ensure every shipment meets international standards.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
