import { Card, CardContent } from "@/components/ui/card"
import { UsersIcon, TrophyIcon, TruckIcon, GlobeAltIcon } from "@heroicons/react/24/outline"

/**
 * Team Section Component
 * Purpose: Introduce leadership with elegant design
 * Content: Twin brothers leadership story
 * Features: Custom styling, Heroicons, professional layout
 * Colors: Only brand colors (BFAFA1, E9E4D5, FFFAF0) and font colors (7A9B91, 4C5B56, A3B5A1)
 */
export default function Team() {
  // Leadership expertise areas
  const expertiseAreas = [
    {
      icon: <TruckIcon className="h-10 w-10 text-font-dark" />,
      title: "Logistics Excellence",
      description: "Years of experience in supply chain management and international shipping",
    },
    {
      icon: <GlobeAltIcon className="h-10 w-10 text-font-dark" />,
      title: "Global Trade",
      description: "Deep understanding of international trade regulations and export procedures",
    },
    {
      icon: <TrophyIcon className="h-10 w-10 text-font-dark" />,
      title: "Quality Commitment",
      description: "Unwavering dedication to maintaining the highest quality standards",
    },
    {
      icon: <UsersIcon className="h-10 w-10 text-font-dark" />,
      title: "Customer Focus",
      description: "Customer satisfaction and long-term relationships are our top priorities",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-brand-cream/50 to-brand-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-font-dark mb-6">Meet Our Team</h2>
          <p className="text-xl md:text-2xl text-font-sage max-w-4xl mx-auto font-body leading-relaxed">
            Led by passionate entrepreneurs with extensive logistics expertise, bringing efficiency, quality, and
            customer satisfaction to the granite industry.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Leadership Story */}
          <div className="space-y-8">
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-20 h-20 bg-brand-beige rounded-3xl flex items-center justify-center">
                <UsersIcon className="h-10 w-10 text-font-dark" />
              </div>
              <div>
                <h3 className="font-display font-bold text-font-dark">Leadership</h3>
                <p className="text-font-sage font-display font-semibold text-lg">Twin Brothers - Founders</p>
              </div>
            </div>

            <div className="space-y-6 text-font-sage font-body text-lg leading-relaxed">
              <p>
                Tishya Exports is led by two passionate twin brothers who bring extensive logistics expertise to the
                granite industry. With years of experience in supply chain management, they have built a brand that
                seamlessly blends efficiency, quality, and customer satisfaction.
              </p>
              <p>
                Their deep understanding of global trade and commitment to excellence ensure that every shipment meets
                the highest standards. As a homegrown business, their dedication to sourcing and delivering top-tier
                granites has positioned Tishya Exports as a trusted name in the industry.
              </p>
            </div>
          </div>

          {/* Leadership Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border-4 border-brand-cream shadow-elegant">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Tishya Exports leadership team"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-brand-beige/20 rounded-full float-animation"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-cream/40 rounded-full"></div>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {expertiseAreas.map((area, index) => (
            <Card
              key={index}
              className="text-center border-2 border-brand-cream hover:border-brand-beige transition-all duration-300 bg-brand-ivory hover-lift shadow-soft hover:shadow-medium"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-brand-beige rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {area.icon}
                </div>
                <h4 className="font-display font-semibold text-font-dark mb-4">{area.title}</h4>
                <p className="text-font-sage font-body leading-relaxed">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Values */}
        <div className="bg-gradient-to-br from-font-dark via-font-dark to-font-dark rounded-3xl p-12 text-center shadow-elegant">
          <h3 className="font-display font-bold text-brand-ivory mb-8">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-brand-beige font-display font-semibold text-xl">Quality First</h4>
              <p className="text-brand-cream font-body leading-relaxed">
                Every stone undergoes rigorous quality checks to ensure international standards.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-brand-beige font-display font-semibold text-xl">Customer Centric</h4>
              <p className="text-brand-cream font-body leading-relaxed">
                Tailored solutions and personalized service for every client's unique needs.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-brand-beige font-display font-semibold text-xl">Global Vision</h4>
              <p className="text-brand-cream font-body leading-relaxed">
                Expanding India's stone heritage to markets worldwide with pride and precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
