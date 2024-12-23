'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Lightbulb, Zap, Battery, Atom, FlaskRoundIcon as Telescope } from 'lucide-react'

const researchAreas = [
  { icon: Zap, title: 'Energy Conversion Efficiency', description: 'Optimizing the conversion of gravitational potential energy into electrical energy.' },
  { icon: Battery, title: 'Energy Storage Integration', description: 'Developing systems to efficiently store and distribute generated energy.' },
  { icon: Atom, title: 'Material Science', description: 'Researching advanced materials for improved durability and performance.' },
  { icon: Telescope, title: 'Environmental Impact Assessment', description: 'Studying the long-term environmental effects of gravity-based energy systems.' },
]

const recentDiscoveries = [
  { 
    title: 'Novel Composite Materials for Weight Systems',
    description: 'Our team has developed a new composite material that increases the efficiency of our gravity-based energy system by 15%, while reducing overall system weight by 20%.'
  },
  {
    title: 'AI-Powered Predictive Maintenance',
    description: 'We\'ve implemented an AI algorithm that can predict maintenance needs with 95% accuracy, significantly reducing downtime and improving system reliability.'
  },
  {
    title: 'Micro-Scale Gravity Generator',
    description: 'A breakthrough in miniaturization has led to the development of a micro-scale gravity generator, opening up new possibilities for portable and emergency power solutions.'
  },
]

export default function ResearchAndDevelopment() {
  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white" data-aos="fade-up">
          Research & Development
        </h1>

        {/* Research Areas Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white" data-aos="fade-up">Our Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center mb-4">
                  <area.icon className="h-8 w-8 text-green-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{area.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Recent Discoveries Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white" data-aos="fade-up">Recent Discoveries</h2>
          <div className="space-y-8">
            {recentDiscoveries.map((discovery, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                  <Lightbulb className="h-6 w-6 text-yellow-500 mr-2" />
                  {discovery.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{discovery.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* State-of-the-Art Lab Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white" data-aos="fade-up">Our State-of-the-Art Lab</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              data-aos="fade-right"
            >
              <Image
                src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
                alt="State-of-the-art research lab"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Cutting-Edge Facilities</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our state-of-the-art laboratory is equipped with the latest technology and tools to push the boundaries of gravity-powered energy research. From advanced computer simulations to precision testing equipment, we have everything we need to turn innovative ideas into reality.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>High-precision gravity simulation chambers</li>
                <li>Advanced materials testing facilities</li>
                <li>Quantum computing cluster for complex calculations</li>
                <li>Environmental impact assessment tools</li>
                <li>Prototype development and testing area</li>
              </ul>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}

