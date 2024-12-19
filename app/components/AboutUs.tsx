'use client'

import { motion } from 'framer-motion'
import { Leaf, Zap, Globe } from 'lucide-react'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            About Us: Empowering a Sustainable Future
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Renewable energy landscape"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                At Akarshana, we harness the natural power of gravity to revolutionize energy generation. Our mission is to create innovative, cost-effective, and sustainable solutions that address global energy challenges, ensuring a cleaner and brighter future for all.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Leaf className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-200">Commitment to sustainability</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Zap className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-200">Pioneering gravity-powered technology</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Globe className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-200">Empowering communities with renewable energy</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs

