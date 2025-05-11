"use client"

import { motion } from "framer-motion"

export default function KeyBenefits() {
  const benefits = [
    {
      number: "1",
      title: "This is a title this is a title",
      description: "Lorem ipsum dolor sit amet consectetur. Pretium porttitor elit in consequat. Diam a amet sit.",
    },
    {
      number: "2",
      title: "This is a title this is a title",
      description: "Lorem ipsum dolor sit amet consectetur. Pretium porttitor elit in consequat. Diam a amet sit.",
    },
    {
      number: "3",
      title: "This is a title this is a title",
      description: "Lorem ipsum dolor sit amet consectetur. Pretium porttitor elit in consequat. Diam a amet sit.",
    },
    {
      number: "4",
      title: "This is a title this is a title",
      description: "Lorem ipsum dolor sit amet consectetur. Pretium porttitor elit in consequat. Diam a amet sit.",
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2">Key Benefits</h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Lorem ipsum dolor sit amet consectetur. Duis tempus dolor vitae consectetur. Duis mattis est amet elit quis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-gray-800 text-sm font-medium">
                  {benefit.number}
                </div>
                <h3 className="font-medium">{benefit.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
