"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroimage from "@/assets/image/Butterfly-image.png";

export default function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#EEEEEE] h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 relative overflow-hidden">
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
              <div className="flex gap-4">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8">
                  Start
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-800 text-gray-800 hover:bg-gray-200"
                >
                  Explore all plans
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -right-96 -top-40"
            >
              <img
                src={heroimage}
                alt="Blue butterfly"
                className="object-contain w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Panel */}
      <section className="pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Buy Subscriptions Card */}
            <motion.div variants={item}>
              <Card className="h-full bg-white">
                <CardHeader>
                  <CardTitle className="text-gray-800">
                    Buy Subscriptions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Lorem ipsum</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="text-sm flex items-center gap-1 text-gray-600 hover:text-gray-800"
                  >
                    Explore all <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Why Us? Card */}
            <motion.div variants={item}>
              <Card className="h-full bg-white">
                <CardHeader>
                  <CardTitle className="text-gray-800">Why Us?</CardTitle>
                </CardHeader>
                <CardContent>{/* Placeholder for content */}</CardContent>
              </Card>
            </motion.div>

            {/* Empty Card (for layout balance) */}
            <motion.div variants={item}>
              <Card className="h-full bg-white">
                <CardHeader>
                  <CardTitle className="text-gray-800">Feature</CardTitle>
                </CardHeader>
                <CardContent>{/* Placeholder for content */}</CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
