"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export default function OutputValues() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-500 mb-1">Lorem Ipsum</p>
          <h2 className="text-3xl font-bold mb-10">Check Output Values</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Lorem Ipsum</p>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-500">Lorem Ipsum</p>
              <div className="flex items-center gap-2">
                <span className="text-xs">Off</span>
                <Slider defaultValue={[50]} max={100} step={1} className="flex-1" />
                <span className="text-xs">On</span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-500">Lorem Ipsum</p>
              <div className="flex items-center gap-2">
                <span className="text-xs">Off</span>
                <Slider defaultValue={[70]} max={100} step={1} className="flex-1" />
                <span className="text-xs">On</span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-500">Lorem Ipsum</p>
              <Input type="text" />
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-500">Lorem Ipsum</p>
              <Input type="text" value="00000" readOnly className="bg-gray-50" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-200 p-8 rounded-md"
          >
            <div className="flex flex-col h-full">
              <div className="flex-1 mb-8">
                <p className="text-sm text-gray-500 mb-2">Lorem Ipsum</p>
                <p className="text-4xl font-bold">00000</p>

                <div className="mt-8 relative h-[200px]">
                  <div className="absolute inset-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="10" />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#374151"
                        strokeWidth="10"
                        strokeDasharray="251.2"
                        strokeDashoffset="62.8"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Lorem Ipsum</p>
                  <p className="font-bold">00000</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Lorem Ipsum</p>
                  <p className="font-bold">00000</p>
                </div>
              </div>

              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Button</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
