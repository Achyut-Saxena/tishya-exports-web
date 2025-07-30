import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BuildingOfficeIcon, MapPinIcon, CalendarIcon } from "@heroicons/react/24/outline"

/**
 * Projects Section Component
 * Purpose: Showcase notable clients with elegant design
 * Content: Major projects with premium styling
 * Features: Heroicons, strict color palette usage, hover effects
 * Colors: Only brand colors (BFAFA1, E9E4D5, FFFAF0) and font colors (7A9B91, 4C5B56, A3B5A1)
 */
export default function Projects() {
  // Notable projects and clients - easily expandable
  const projects = [
    {
      client: "Infosys Bangalore",
      project: "Corporate Campus Flooring",
      location: "Bengaluru, Karnataka",
      year: "2023",
      description: "Premium granite flooring installation for corporate offices and common areas.",
      materials: ["Black Galaxy Granite", "Absolute Black"],
      image: "/placeholder.svg?height=400&width=500",
      category: "Corporate",
    },
    {
      client: "Kempegowda International Airport",
      project: "Terminal Interior Cladding",
      location: "Bengaluru, Karnataka",
      year: "2023",
      description: "High-quality granite wall cladding for airport terminal interiors.",
      materials: ["Kashmir White", "Steel Grey"],
      image: "/placeholder.svg?height=400&width=500",
      category: "Infrastructure",
    },
    {
      client: "WIPRO Bangalore",
      project: "Office Complex Renovation",
      location: "Bengaluru, Karnataka",
      year: "2022",
      description: "Complete granite renovation for office lobbies and conference areas.",
      materials: ["Tan Brown", "Coffee Brown"],
      image: "/placeholder.svg?height=400&width=500",
      category: "Corporate",
    },
    {
      client: "SOBHA Builders",
      project: "Residential Complex",
      location: "Multiple Locations",
      year: "2022-2023",
      description: "Granite supply for luxury residential projects including kitchens and bathrooms.",
      materials: ["Imperial Red", "Multicolor Red"],
      image: "/placeholder.svg?height=400&width=500",
      category: "Residential",
    },
    {
      client: "Prestige Builders",
      project: "Commercial Development",
      location: "Bengaluru, Karnataka",
      year: "2022",
      description: "Premium stone solutions for commercial building facades and interiors.",
      materials: ["Black Pearl", "Absolute Black"],
      image: "/placeholder.svg?height=400&width=500",
      category: "Commercial",
    },
  ]

  return (
    <section id="projects" className="py-24 bg-brand-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-font-dark mb-6">Our Projects</h2>
          <p className="text-xl md:text-2xl text-font-sage max-w-4xl mx-auto font-body leading-relaxed">
            Trusted by leading corporations and builders across India. Our portfolio showcases successful partnerships
            with industry leaders and premium project deliveries.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-all duration-500 border-2 border-brand-cream hover:border-brand-beige bg-brand-ivory hover-lift"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.client} project by Tishya Exports`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Category Badge */}
                <Badge className="absolute top-4 left-4 bg-brand-beige text-font-dark font-body font-medium px-3 py-1">
                  {project.category}
                </Badge>
              </div>

              <CardContent className="p-8">
                {/* Client Name */}
                <h3 className="font-display font-bold text-font-dark mb-2">{project.client}</h3>

                {/* Project Title */}
                <h4 className="font-display font-semibold text-font-sage mb-4">{project.project}</h4>

                {/* Project Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center font-body text-font-sage">
                    <MapPinIcon className="h-5 w-5 mr-3 text-font-light" />
                    {project.location}
                  </div>
                  <div className="flex items-center font-body text-font-sage">
                    <CalendarIcon className="h-5 w-5 mr-3 text-font-light" />
                    {project.year}
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-font-sage font-body mb-6 leading-relaxed">{project.description}</p>

                {/* Materials Used */}
                <div>
                  <h5 className="font-display font-semibold text-font-dark mb-3">Materials Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.materials.map((material) => (
                      <span
                        key={material}
                        className="px-3 py-1 bg-brand-cream text-font-sage font-body text-sm rounded-full border border-brand-beige/30"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Testimonial Section */}
        <div className="bg-gradient-to-br from-brand-cream to-brand-beige/30 rounded-3xl p-12 text-center shadow-elegant">
          <div className="w-16 h-16 bg-brand-beige rounded-2xl flex items-center justify-center mx-auto mb-6">
            <BuildingOfficeIcon className="h-8 w-8 text-font-dark" />
          </div>
          <h3 className="font-display font-bold text-font-dark mb-6">Trusted by Industry Leaders</h3>
          <p className="text-font-sage max-w-3xl mx-auto font-body text-lg leading-relaxed">
            Our commitment to quality and timely delivery has earned us the trust of major corporations, builders, and
            architects across India. We take pride in contributing to landmark projects that define modern architecture.
          </p>
        </div>
      </div>
    </section>
  )
}
