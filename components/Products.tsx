import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

/**
 * Products Section Component
 * Purpose: Showcase product categories with elegant design
 * Products: Granite, Quartz, Marble, Sandstone
 * Features: Strict color palette usage, Heroicons, hover effects
 * Colors: Only brand colors (BFAFA1, E9E4D5, FFFAF0) and font colors (7A9B91, 4C5B56, A3B5A1)
 */
export default function Products() {
  // Product categories - easily expandable
  const products = [
    {
      name: "Granite",
      description:
        "Premium quality granite from India's finest quarries, perfect for countertops, flooring, and architectural applications.",
      applications: ["Kitchen Countertops", "Flooring", "Wall Cladding", "Monuments"],
      image: "/placeholder.svg?height=400&width=500",
      gradient: "from-brand-cream to-brand-beige",
    },
    {
      name: "Quartz",
      description:
        "Engineered quartz surfaces offering durability, non-porosity, and consistent patterns for modern spaces.",
      applications: ["Bathroom Vanities", "Kitchen Islands", "Commercial Surfaces", "Backsplashes"],
      image: "/placeholder.svg?height=400&width=500",
      gradient: "from-brand-ivory to-brand-cream",
    },
    {
      name: "Marble",
      description:
        "Luxurious marble varieties with unique veining patterns, ideal for high-end residential and commercial projects.",
      applications: ["Luxury Flooring", "Sculptures", "Decorative Elements", "Premium Interiors"],
      image: "/placeholder.svg?height=400&width=500",
      gradient: "from-brand-beige to-brand-cream",
    },
    {
      name: "Sandstone",
      description:
        "Natural sandstone with excellent weather resistance, perfect for exterior applications and landscaping.",
      applications: ["Exterior Cladding", "Garden Landscaping", "Paving Stones", "Architectural Features"],
      image: "/placeholder.svg?height=400&width=500",
      gradient: "from-brand-cream to-brand-ivory",
    },
  ]

  return (
    <section id="products" className="py-24 bg-gradient-to-br from-brand-cream/30 to-brand-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-font-dark mb-6">Our Products</h2>
          <p className="text-xl md:text-2xl text-font-sage max-w-4xl mx-auto font-body leading-relaxed">
            Discover our comprehensive range of premium natural stones, sourced from India's finest quarries and
            processed to international quality standards.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <Card
              key={product.name}
              className="group hover:shadow-elegant transition-all duration-500 border-2 border-brand-cream hover:border-brand-beige overflow-hidden bg-brand-ivory hover-lift"
            >
              {/* Product Image with Gradient Overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={`${product.name} samples from Tishya Exports`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-40 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl font-display font-bold text-font-dark">{product.name}</h3>
                </div>
              </div>

              <CardContent className="p-8">
                {/* Product Description */}
                <p className="text-font-sage mb-6 font-body leading-relaxed">{product.description}</p>

                {/* Applications List */}
                <div className="mb-6">
                  <h4 className="font-display font-semibold text-font-dark mb-3">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app) => (
                      <span
                        key={app}
                        className="px-3 py-1 bg-brand-beige/30 text-font-sage font-body text-sm rounded-full border border-brand-beige/50"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Discover Button */}
                <Button className="w-full btn-primary shadow-elegant hover:shadow-strong">
                  Discover <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action - Download Brochure Button - FIXED */}
        <div className="text-center">
          <a
            href="app/public/brochure/tishya-exports-brochure.pdf"
            download="Tishya-Exports-Brochure.pdf"
            className="inline-block"
          >
            <Button size="lg" className="btn-primary text-xl px-12 py-6 shadow-elegant hover:shadow-strong">
              Download Brochure <ArrowRightIcon className="ml-3 h-6 w-6" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
