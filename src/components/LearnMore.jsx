import { motion } from "framer-motion";
import learnmore1 from "@/assets/image/learnmore1.jpg"
import learnmore2 from "@/assets/image/learnmore2.jpg"
import learnmore3 from "@/assets/image/learnmore3.jpg"

export default function LearnMore() {
  const articles = [
    {
      image: learnmore1,
      title: "What is Lorem?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: learnmore2,
      title: "What is Ipsum?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: learnmore3,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto md:px-4">
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
              <div className="mb-4 overflow-hidden rounded-lg h-58">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
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
