"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="py-16 px-4 relative overflow-hidden bg-[#EEEEEE]">
      <div className="container mx-auto max-w-6xl relative">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              everyone<span className="text-black">.</span>
            </h1>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8">Start</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mt-8 md:mt-0"
          >
            <div className="relative h-[300px] w-full">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Blue butterfly"
                width={400}
                height={300}
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
