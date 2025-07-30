import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Shield, Globe, Award, Download, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Import/Export Page Component
 * Purpose: Display company's import/export credentials and certifications
 * Features: Import/Export code, certifications, compliance information
 * Note: Designed to accommodate future certificate additions
 */
export default function ImportExportPage() {
  // Compliance areas - easily expandable
  const complianceAreas = [
    {
      icon: <FileText className="h-8 w-8 text-amber-500" />,
      title: "Import/Export Code",
      description: "Valid IEC (Import Export Code) for international trade operations",
      status: "Active",
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-500" />,
      title: "Quality Certifications",
      description: "International quality standards and certifications for stone exports",
      status: "Certified",
    },
    {
      icon: <Globe className="h-8 w-8 text-amber-500" />,
      title: "Export Documentation",
      description: "Complete export documentation and customs clearance capabilities",
      status: "Compliant",
    },
    {
      icon: <Award className="h-8 w-8 text-amber-500" />,
      title: "Industry Standards",
      description: "Adherence to international stone industry standards and regulations",
      status: "Verified",
    },
  ]

  // Export markets with trade status
  const exportMarkets = [
    { country: "United States", status: "Active", code: "US" },
    { country: "United Kingdom", status: "Active", code: "UK" },
    { country: "South Africa", status: "Active", code: "ZA" },
    { country: "China", status: "Active", code: "CN" },
    { country: "Poland", status: "Active", code: "PL" },
    { country: "UAE", status: "Active", code: "AE" },
    { country: "Italy", status: "Active", code: "IT" },
    { country: "France", status: "Active", code: "FR" },
    { country: "Germany", status: "Active", code: "DE" },
  ]

  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      {/* Page Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Import/Export <span className="text-amber-500">Credentials</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tishya Exports maintains all necessary certifications and compliance requirements for seamless
              international trade operations.
            </p>
          </div>
        </div>
      </section>

      {/* Import/Export Code Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* IEC Information Card */}
          <Card className="max-w-4xl mx-auto mb-12 border-2 border-amber-500/20 bg-gradient-to-br from-amber-50 to-orange-50">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-black" />
              </div>
              <CardTitle className="text-2xl text-gray-900">Import Export Code (IEC)</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">IEC Number</h3>
                <p className="text-2xl font-bold text-amber-600 mb-2">[IEC CODE TO BE ADDED]</p>
                <p className="text-sm text-gray-600">
                  Valid for all import/export operations as per Government of India regulations
                </p>
              </div>

              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-green-700 font-medium">Active & Valid</span>
              </div>

              <p className="text-gray-700 max-w-2xl mx-auto">
                Our Import Export Code enables us to conduct international trade operations legally and efficiently.
                This certification ensures compliance with all government regulations for stone exports from India.
              </p>
            </CardContent>
          </Card>

          {/* Compliance Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {complianceAreas.map((area, index) => (
              <Card
                key={index}
                className="text-center border-2 border-gray-100 hover:border-amber-500/20 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="mb-4">{area.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{area.title}</h4>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{area.description}</p>
                  <Badge className="bg-green-100 text-green-800">{area.status}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Export Markets Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Authorized Export Markets</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are authorized to export our premium stone products to the following countries with full compliance to
              international trade regulations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {exportMarkets.map((market, index) => (
              <Card key={index} className="border border-gray-200 hover:border-amber-500/30 transition-colors">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">
                    {market.code === "US"
                      ? "🇺🇸"
                      : market.code === "UK"
                        ? "🇬🇧"
                        : market.code === "ZA"
                          ? "🇿🇦"
                          : market.code === "CN"
                            ? "🇨🇳"
                            : market.code === "PL"
                              ? "🇵🇱"
                              : market.code === "AE"
                                ? "🇦🇪"
                                : market.code === "IT"
                                  ? "🇮🇹"
                                  : market.code === "FR"
                                    ? "🇫🇷"
                                    : "🇩🇪"}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{market.country}</h4>
                  <Badge variant="outline" className="text-xs border-green-500 text-green-700">
                    {market.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Documents</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All necessary certifications and documentation for international stone exports. Additional certificates
              will be added as they become available.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-gray-200">
              <CardContent className="p-8 text-center">
                <Download className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Certificate Repository</h3>
                <p className="text-gray-600 mb-6">This section will be updated with relevant certificates including:</p>

                <div className="grid md:grid-cols-2 gap-4 text-left mb-6">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                      Quality Assurance Certificates
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                      Environmental Compliance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                      Mining Licenses
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                      Export Quality Certificates
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                      ISO Certifications
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                      Trade Association Memberships
                    </li>
                  </ul>
                </div>

                <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                  Request Certificate Copies
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Trade Inquiries */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Trade Inquiries</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            For specific trade documentation, export procedures, or compliance questions, contact our export team
            directly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold" asChild>
              <a href="tel:+919945588363">Call Export Team</a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black"
              asChild
            >
              <a href="mailto:exports@tishyaexports.com">Email Trade Dept</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
