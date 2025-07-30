"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline"

/**
 * Contact Section Component
 * Purpose: Provide an elegant contact interface
 * Palette-only colors:
 *   Brand — #BFAFA1 (beige)  #E9E4D5 (cream)  #FFFAF0 (ivory)
 *   Font  — #7A9B91 (sage)   #4C5B56 (dark)   #A3B5A1 (light)
 */
export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-font-dark mb-6">Contact Us</h2>
          <p className="text-xl md:text-2xl text-font-sage max-w-4xl mx-auto font-body leading-relaxed">
            Ready to discuss your granite and quartz requirements? Get in touch with our expert team for personalised
            solutions and competitive pricing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* CONTACT FORM */}
          <Card className="border-2 border-brand-cream shadow-elegant bg-brand-ivory">
            <CardHeader>
              <CardTitle className="font-display font-bold text-font-dark text-2xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-8">
                {/* NAME & EMAIL */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-display font-medium text-font-dark mb-3">
                      Full Name *
                    </label>
                    <Input id="name" type="text" placeholder="Your full name" className="form-input" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-display font-medium text-font-dark mb-3">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                {/* COMPANY & PHONE */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block font-display font-medium text-font-dark mb-3">
                      Company Name
                    </label>
                    <Input id="company" type="text" placeholder="Your company name" className="form-input" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-display font-medium text-font-dark mb-3">
                      Phone Number *
                    </label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="form-input" required />
                  </div>
                </div>

                {/* COUNTRY & PRODUCT */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="country" className="block font-display font-medium text-font-dark mb-3">
                      Country *
                    </label>
                    <Input id="country" type="text" placeholder="Your country" className="form-input" required />
                  </div>
                  <div>
                    <label htmlFor="product" className="block font-display font-medium text-font-dark mb-3">
                      Product Interest
                    </label>
                    <select id="product" className="form-input">
                      <option value="">Select a product</option>
                      <option value="granite">Granite</option>
                      <option value="quartz">Quartz</option>
                      <option value="marble">Marble</option>
                      <option value="sandstone">Sandstone</option>
                      <option value="multiple">Multiple Products</option>
                    </select>
                  </div>
                </div>

                {/* MESSAGE */}
                <div>
                  <label htmlFor="message" className="block font-display font-medium text-font-dark mb-3">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us about your project requirements..."
                    className="form-textarea"
                    required
                  />
                </div>

                {/* SUBMIT */}
                <Button type="submit" size="lg" className="w-full btn-primary text-lg py-4">
                  Send Message
                  <PaperAirplaneIcon className="ml-3 h-6 w-6" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* CONTACT INFO */}
          <div className="space-y-8">
            <Card className="border-2 border-brand-beige/30 bg-gradient-to-br from-brand-beige/10 to-brand-cream/20 shadow-elegant">
              <CardContent className="p-8">
                <h3 className="font-display font-bold text-font-dark mb-8 text-xl">Get in Touch</h3>

                <div className="space-y-6">
                  {/* PHONE */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-beige rounded-2xl flex items-center justify-center">
                      <PhoneIcon className="h-6 w-6 text-font-dark" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-font-dark">Phone</p>
                      <p className="text-font-sage font-body text-lg">+91 99455 88363</p>
                      <p className="font-body text-font-light">Available 9 AM – 6 PM IST</p>
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-beige rounded-2xl flex items-center justify-center">
                      <EnvelopeIcon className="h-6 w-6 text-font-dark" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-font-dark">Email</p>
                      <p className="text-font-sage font-body text-lg">info@tishyaexports.com</p>
                      <p className="font-body text-font-light">We reply within 24 hours</p>
                    </div>
                  </div>

                  {/* ADDRESS */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-beige rounded-2xl flex items-center justify-center">
                      <MapPinIcon className="h-6 w-6 text-font-dark" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-font-dark">Address</p>
                      <p className="text-font-sage font-body">
                        Sriven Skypark
                        <br />
                        Bengaluru 560076
                        <br />
                        India
                      </p>
                    </div>
                  </div>

                  {/* HOURS */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-beige rounded-2xl flex items-center justify-center">
                      <ClockIcon className="h-6 w-6 text-font-dark" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-font-dark">Business Hours</p>
                      <p className="text-font-sage font-body">
                        Mon–Sat 9:00 AM – 6:00 PM
                        <br />
                        Sunday Closed
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* QUICK CONTACT BUTTONS */}
            <div className="grid grid-cols-2 gap-6">
              <Button
                size="lg"
                className="bg-font-sage hover:bg-brand-beige text-brand-ivory font-display font-semibold py-4"
                asChild
              >
                <a href="https://wa.me/919945588363" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>

              <Button size="lg" className="btn-secondary py-4" asChild>
                <a href="tel:+919945588363">Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
