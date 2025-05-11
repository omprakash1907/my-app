
import { Checkbox } from "@/components/ui/checkbox"
import { Facebook, Instagram, Twitter, X } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  const footerLinks = {
    products: ["Product 1", "Product 2", "Product 3", "Product 4"],
    solutionsByIndustry: ["Retail", "Healthcare", "Education", "Financial", "Transportation", "Construction"],
    solutionsByBusinessType: ["Small & Medium business", "Large enterprise", "Government entity", "Corporate entity"],
    solutionsByNeed: ["Small & Medium business", "Large enterprise"],
    helpAndSupport: ["Customer", "Technical support", "Report issue", "Find services"],
    aboutUs: ["Who we are", "News", "Media", "Careers"],
  }

  return (
    <footer className="bg-gray-100 pt-12 pb-4">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-medium text-sm mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-4">Solutions by industry</h3>
            <ul className="space-y-2">
              {footerLinks.solutionsByIndustry.map((link, index) => (
                <li key={index}>
                  <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-4">Solutions by business type</h3>
            <ul className="space-y-2">
              {footerLinks.solutionsByBusinessType.map((link, index) => (
                <li key={index}>
                  <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-4">Solutions by need</h3>
            <ul className="space-y-2">
              {footerLinks.solutionsByNeed.map((link, index) => (
                <li key={index}>
                  <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-medium text-sm mb-4">Help & support</h3>
            <ul className="space-y-2">
              {footerLinks.helpAndSupport.map((link, index) => (
                <li key={index}>
                  <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-sm mb-4">About us</h3>
            <ul className="space-y-2">
              {footerLinks.aboutUs.map((link, index) => (
                <li key={index}>
                  <Link href="#" className="text-xs text-gray-600 hover:text-gray-900">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-medium text-sm mb-4">Download our app</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <Link href="#" className="inline-block">
                <img
                  src="/placeholder.svg?height=40&width=120"
                  alt="App Store"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <Link href="#" className="inline-block">
                <img
                  src="/placeholder.svg?height=40&width=120"
                  alt="Google Play"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <Link href="#" className="inline-block">
                <img
                  src="/placeholder.svg?height=40&width=120"
                  alt="Huawei AppGallery"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            <h3 className="font-medium text-sm mb-4">Follow us on social media</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <X className="h-5 w-5" />
                <span className="sr-only">X</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <Checkbox id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-xs text-gray-600">
                I agree to the terms and conditions
              </label>
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-gray-600">
              <Link href="#" className="hover:underline">
                Change
              </Link>
              <Link href="#" className="hover:underline">
                Delete personal data
              </Link>
              <Link href="#" className="hover:underline">
                Privacy policy
              </Link>
              <Link href="#" className="hover:underline">
                Code of conduct
              </Link>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-gray-600">© Copyright 2023 CXBXC. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
