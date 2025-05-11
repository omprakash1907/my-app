"use client"

import { motion } from "framer-motion"

export default function LearnMore() {
  const articles = [
    {
      image: "/placeholder.svg?height=200&width=300",
      title: "What is Lorem?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/placeholder.svg?height=200&width=300",
      title: "What is Ipsum?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: "/placeholder.svg?height=200&width=300",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
          <h2 className="text-3xl font-bold mb-10">Learn more</h2>
          <p className="text-gray-600 mb-10">Lorem Ipsum</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{article.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{article.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
