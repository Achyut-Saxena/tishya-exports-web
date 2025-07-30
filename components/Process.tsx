import { Card, CardContent } from "@/components/ui/card"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

/**
 * Process Section Component - "From Cradle to Gate"
 * Purpose: Show the complete workflow with elegant design
 * Features: Step-by-step process visualization with strict color palette
 * Colors: Only brand colors (BFAFA1, E9E4D5, FFFAF0) and font colors (7A9B91, 4C5B56, A3B5A1)
 */
export default function Process() {
  // Process steps - matches brochure content
  const processSteps = [
    {
      step: 1,
      title: "Raw Material Extraction",
      description:
        "Raw material is extracted from the finest quarries across Karnataka, Rajasthan, Andhra Pradesh, and Tamil Nadu.",
      icon: "⛏️",
    },
    {
      step: 2,
      title: "Factory Processing",
      description: "Quarry material comes to factory in form of blocks or slabs for initial processing.",
      icon: "🏭",
    },
    {
      step: 3,
      title: "Manual Splitting",
      description: "Splitting is done manually for accurate thickness and superior quality control.",
      icon: "🔨",
    },
    {
      step: 4,
      title: "Quality Processing",
      description: "Stones are inspected, cut, polished, honed & treated as required for specific applications.",
      icon: "✨",
    },
    {
      step: 5,
      title: "Quality Assurance",
      description: "Before packing, another round of comprehensive quality checks is performed.",
      icon: "🔍",
    },
    {
      step: 6,
      title: "Export & Delivery",
      description: "Neatly packed material is dispatched to port in crates and then shipped to destination.",
      icon: "🚢",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-font-dark via-font-dark to-font-dark text-brand-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-brand-ivory mb-6">From Cradle to Gate</h2>
          <p className="text-xl md:text-2xl text-brand-cream max-w-4xl mx-auto font-body leading-relaxed">
            Our comprehensive process ensures every stone meets international quality standards from extraction to your
            doorstep.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {processSteps.map((process, index) => (
            <Card
              key={process.step}
              className="bg-font-dark/50 border-2 border-brand-beige/20 hover:border-brand-beige/40 transition-all duration-300 backdrop-blur-sm hover-lift"
            >
              <CardContent className="p-8">
                {/* Step Number and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-beige rounded-2xl flex items-center justify-center">
                      <span className="font-display font-bold text-font-dark number-text">{process.step}</span>
                    </div>
                    <span className="text-3xl">{process.icon}</span>
                  </div>

                  {/* Arrow for flow indication (except last item) */}
                  {index < processSteps.length - 1 && (
                    <ArrowRightIcon className="h-6 w-6 text-brand-beige hidden lg:block" />
                  )}
                </div>

                {/* Step Title */}
                <h3 className="font-display font-semibold text-brand-ivory mb-4">{process.title}</h3>

                {/* Step Description */}
                <p className="text-brand-cream font-body leading-relaxed">{process.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quality Commitment */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-brand-beige/10 to-brand-cream/10 border-2 border-brand-beige/30 rounded-3xl p-12 max-w-5xl mx-auto backdrop-blur-sm">
            <h3 className="font-display font-bold text-brand-beige mb-6">Quality Commitment</h3>
            <p className="text-brand-cream font-body text-xl leading-relaxed">
              Every step of our process is designed to maintain the highest quality standards, ensuring that our clients
              receive premium natural stones that exceed expectations and stand the test of time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
