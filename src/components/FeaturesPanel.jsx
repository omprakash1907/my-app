import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"

export default function FeaturesPanel() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-12 px-4 bg-[#EEEEEE]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div variants={item}>
            <Card className="h-full bg-gray-800 text-white">
              <CardHeader>
                <CardTitle>Buy Subscriptions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </CardContent>
              <CardFooter>
                <Link href="#" className="text-sm flex items-center gap-1 text-white/80 hover:text-white">
                  Explore all <ArrowRight className="h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="h-full bg-white">
              <CardHeader>
                <CardTitle>Why Us?</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <div className="relative h-[100px] w-[100px]">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Blue butterfly"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="h-full bg-gray-900 text-white">
              <CardHeader>
                <CardTitle>Feature Highlight</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
