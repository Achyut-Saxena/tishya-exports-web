"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PhotoIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline"

/**
 * Gallery Section Component
 * Purpose: Showcase company images in an elegant grid layout
 * Features:
 * - Responsive masonry-style grid
 * - Image categories and filtering
 * - Lightbox modal for full-size viewing
 * - Lazy loading for performance
 * - Strict color palette usage (BFAFA1, E9E4D5, FFFAF0, 7A9B91, 4C5B56, A3B5A1)
 */

interface GalleryImage {
  id: string
  src: string
  alt: string
  category: string
  title: string
  description?: string
}

export default function Gallery() {
  // Gallery images - automatically populated from directory structure
  const galleryImages: GalleryImage[] = [
    // Real Facility Image - Added First for Prominence
    {
      id: "facility-real-1",
      src: "/gallery/facilities/granite-processing-yard.jpg",
      alt: "Tishya Exports granite processing facility with large granite slabs",
      category: "Facilities",
      title: "Granite Processing Yard",
      description:
        "Our state-of-the-art granite processing facility with premium granite slabs ready for finishing and export",
    },

    // Quarry Operations
    {
      id: "quarry-1",
      src: "/gallery/quarry/granite-extraction-1.jpg",
      alt: "Granite extraction at Karnataka quarry",
      category: "Quarry Operations",
      title: "Granite Extraction",
      description: "Premium granite extraction from our Karnataka quarry site",
    },
    {
      id: "quarry-2",
      src: "/gallery/quarry/stone-cutting-process.jpg",
      alt: "Stone cutting and processing",
      category: "Quarry Operations",
      title: "Stone Processing",
      description: "Advanced stone cutting and processing techniques",
    },
    {
      id: "quarry-3",
      src: "/gallery/quarry/quarry-overview.jpg",
      alt: "Aerial view of granite quarry",
      category: "Quarry Operations",
      title: "Quarry Overview",
      description: "Aerial perspective of our granite quarry operations",
    },

    // Products
    {
      id: "product-1",
      src: "/gallery/products/granite-slabs-display.jpg",
      alt: "Premium granite slabs showcase",
      category: "Products",
      title: "Granite Slabs",
      description: "High-quality granite slabs ready for export",
    },
    {
      id: "product-2",
      src: "/gallery/products/quartz-collection.jpg",
      alt: "Engineered quartz collection",
      category: "Products",
      title: "Quartz Collection",
      description: "Premium engineered quartz surfaces",
    },
    {
      id: "product-3",
      src: "/gallery/products/marble-varieties.jpg",
      alt: "Luxury marble varieties",
      category: "Products",
      title: "Marble Varieties",
      description: "Exquisite marble collection with unique veining",
    },
    {
      id: "product-4",
      src: "/gallery/products/sandstone-textures.jpg",
      alt: "Natural sandstone textures",
      category: "Products",
      title: "Sandstone Textures",
      description: "Weather-resistant sandstone with natural textures",
    },

    // Projects
    {
      id: "project-1",
      src: "/gallery/projects/infosys-installation.jpg",
      alt: "Infosys corporate flooring project",
      category: "Projects",
      title: "Infosys Corporate Campus",
      description: "Premium granite flooring installation at Infosys Bangalore",
    },
    {
      id: "project-2",
      src: "/gallery/projects/airport-cladding.jpg",
      alt: "Airport terminal granite cladding",
      category: "Projects",
      title: "Airport Terminal Cladding",
      description: "High-quality granite wall cladding for Kempegowda International Airport",
    },
    {
      id: "project-3",
      src: "/gallery/projects/residential-kitchen.jpg",
      alt: "Luxury residential kitchen countertops",
      category: "Projects",
      title: "Residential Kitchen",
      description: "Premium granite countertops for luxury residential project",
    },

    // Additional Facilities
    {
      id: "facility-2",
      src: "/gallery/facilities/processing-plant.jpg",
      alt: "Modern stone processing facility",
      category: "Facilities",
      title: "Processing Plant",
      description: "State-of-the-art stone processing and finishing facility",
    },
    {
      id: "facility-3",
      src: "/gallery/facilities/quality-control.jpg",
      alt: "Quality control and inspection area",
      category: "Facilities",
      title: "Quality Control",
      description: "Rigorous quality control and inspection processes",
    },
    {
      id: "facility-4",
      src: "/gallery/facilities/export-packaging.jpg",
      alt: "Export packaging and shipping area",
      category: "Facilities",
      title: "Export Packaging",
      description: "Professional packaging for international shipping",
    },
  ]

  // State management
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(galleryImages.map((img) => img.category)))]

  // Filter images based on selected category
  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  // Open lightbox
  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image)
    setIsLightboxOpen(true)
    document.body.style.overflow = "hidden" // Prevent background scrolling
  }

  // Close lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false)
    setSelectedImage(null)
    document.body.style.overflow = "unset"
  }

  return (
    <section id="gallery" className="py-24 bg-gradient-to-br from-brand-cream/30 to-brand-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-font-dark mb-6">Our Gallery</h2>
          <p className="text-xl md:text-2xl text-font-sage max-w-4xl mx-auto font-body leading-relaxed">
            Explore our comprehensive collection showcasing quarry operations, premium products, completed projects, and
            state-of-the-art facilities.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-body font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-brand-beige text-font-dark shadow-medium"
                  : "bg-brand-ivory border-2 border-brand-cream text-font-sage hover:bg-brand-cream hover:text-font-dark"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredImages.map((image, index) => (
            <Card
              key={image.id}
              className={`group cursor-pointer overflow-hidden border-2 border-brand-cream hover:border-brand-beige transition-all duration-500 hover-lift bg-brand-ivory shadow-soft hover:shadow-elegant ${
                // Make the first real facility image (granite processing yard) larger
                image.id === "facility-real-1"
                  ? "md:col-span-2 md:row-span-2"
                  : index % 7 === 0
                    ? "md:col-span-2 md:row-span-2"
                    : ""
              }`}
              onClick={() => openLightbox(image)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                    image.id === "facility-real-1" ? "h-80 md:h-96" : "h-64 md:h-80"
                  }`}
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-font-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-brand-beige text-font-dark font-body font-medium mb-2">{image.category}</Badge>
                    <h3 className="font-display font-semibold text-brand-ivory mb-1">{image.title}</h3>
                    {image.description && (
                      <p className="font-body text-brand-cream text-sm leading-relaxed">{image.description}</p>
                    )}
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-brand-beige/90 rounded-full flex items-center justify-center">
                      <MagnifyingGlassIcon className="h-5 w-5 text-font-dark" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Upload Instructions */}
        <div className="bg-gradient-to-br from-brand-beige/10 to-brand-cream/20 rounded-3xl p-12 text-center shadow-elegant">
          <div className="w-16 h-16 bg-brand-beige rounded-2xl flex items-center justify-center mx-auto mb-6">
            <PhotoIcon className="h-8 w-8 text-font-dark" />
          </div>
          <h3 className="font-display font-bold text-font-dark mb-6">Gallery Management</h3>
          <p className="text-font-sage max-w-3xl mx-auto font-body text-lg leading-relaxed mb-6">
            To add new images to the gallery, upload them to the corresponding directories in the public/gallery folder:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-left max-w-4xl mx-auto">
            <div className="bg-brand-ivory/60 rounded-xl p-4 border border-brand-cream/50">
              <h4 className="font-display font-semibold text-font-dark mb-2">Quarry Operations</h4>
              <p className="font-body text-font-sage text-sm">/public/gallery/quarry/</p>
            </div>
            <div className="bg-brand-ivory/60 rounded-xl p-4 border border-brand-cream/50">
              <h4 className="font-display font-semibold text-font-dark mb-2">Products</h4>
              <p className="font-body text-font-sage text-sm">/public/gallery/products/</p>
            </div>
            <div className="bg-brand-ivory/60 rounded-xl p-4 border border-brand-cream/50">
              <h4 className="font-display font-semibold text-font-dark mb-2">Projects</h4>
              <p className="font-body text-font-sage text-sm">/public/gallery/projects/</p>
            </div>
            <div className="bg-brand-ivory/60 rounded-xl p-4 border border-brand-cream/50">
              <h4 className="font-display font-semibold text-font-dark mb-2">Facilities</h4>
              <p className="font-body text-font-sage text-sm">/public/gallery/facilities/</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-font-dark/90 backdrop-blur-sm">
          <div className="relative max-w-7xl max-h-[90vh] mx-4">
            {/* Close Button */}
            <Button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 bg-brand-beige hover:bg-brand-cream text-font-dark rounded-full p-2 z-10"
            >
              <XMarkIcon className="h-6 w-6" />
            </Button>

            {/* Image */}
            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-strong"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-font-dark/90 to-transparent rounded-b-2xl p-6">
              <Badge className="bg-brand-beige text-font-dark font-body font-medium mb-2">
                {selectedImage.category}
              </Badge>
              <h3 className="font-display font-bold text-brand-ivory mb-2 text-xl">{selectedImage.title}</h3>
              {selectedImage.description && (
                <p className="font-body text-brand-cream leading-relaxed">{selectedImage.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
