import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Products from "@/components/Products"
import Process from "@/components/Process"
import Projects from "@/components/Projects"
import Team from "@/components/Team"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

/**
 * Main Home Page Component
 * This is the landing page that showcases all major sections of Tishya Exports
 * Sections included: Hero, About, Products, Process, Projects, Team, Contact
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Navigation Header - Fixed at top */}
      <Header />

      {/* Hero Section - First impression with company branding */}
      <Hero />

      {/* About Us Section - Company introduction and values */}
      <About />

      {/* Products Section - Showcase of granite, quartz, marble, sandstone */}
      <Products />

      {/* Process Section - From quarry to delivery workflow */}
      <Process />

      {/* Projects Section - Notable clients and completed work */}
      <Projects />

      {/* Team Section - Leadership and company culture */}
      <Team />

      {/* Contact Section - Get in touch information */}
      <Contact />

      {/* Footer - Additional links and company info */}
      <Footer />
    </main>
  )
}
