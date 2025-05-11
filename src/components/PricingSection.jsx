"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PricingSection() {
  const packages = [
    {
      name: "Plan 1",
      type: "Small",
      storage: "5 GB",
      price: "0.02",
      oldPrice: "0.04",
    },
    {
      name: "Plan 2",
      type: "Medium",
      storage: "10 GB",
      price: "0.02",
      oldPrice: "0.03",
    },
    {
      name: "Plan 3",
      type: "Large",
      storage: "15 GB",
      price: "0.0175",
      oldPrice: "0.025",
    },
    {
      name: "Plan 4",
      type: "X-Large",
      storage: "20 GB",
      price: "0.15",
      oldPrice: "0.20",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-2">Choose Your Package</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Lorem ipsum dolor sit amet consectetur. Duis tempus dolor vitae consectetur. Duis mattis est amet elit quis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 hover:border-gray-300 transition-all">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge variant="outline" className="mb-2 bg-red-50 text-red-600 border-red-200">
                        {pkg.type}
                      </Badge>
                      <h3 className="font-bold">{pkg.name}</h3>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-2 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-400"
                    >
                      <path d="M21 15V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9" />
                      <rect width="18" height="8" x="3" y="15" rx="2" />
                    </svg>
                    <span className="text-sm">{pkg.storage}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start pt-4 border-t">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold">USD {pkg.price}</span>
                    <span className="text-xs text-gray-500 line-through">$ {pkg.oldPrice}</span>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
