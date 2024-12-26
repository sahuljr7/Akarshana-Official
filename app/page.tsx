'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Zap, Battery, Maximize2, DollarSign, LineChart, Cloud, Monitor, Lightbulb, Target, Globe, Award, ZapOff } from 'lucide-react'
import { motion } from 'framer-motion'
import AboutUs from './components/AboutUs'
import BlogPreview from './components/BlogPreview'

// Animation variants for fade-in effect
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const environmentalStats = [
  {
    icon: ZapOff,
    title: "Carbon Reduction",
    stat: "500K",
    unit: "tons CO2/year",
    description: "Potential carbon reduction per installation"
  },
  {
    icon: Globe,
    title: "Global Reach",
    stat: "150+",
    unit: "potential markets",
    description: "Countries where our technology can be implemented"
  },
  {
    icon: Target,
    title: "Environmental Goals",
    stat: "4/17",
    unit: "SDGs addressed",
    description: "UN Sustainable Development Goals alignment"
  },
  {
    icon: Award,
    title: "Green Certification",
    stat: "100%",
    unit: "renewable",
    description: "Clean energy certification achievement"
  }
]

const sdgGoals = [
  {
    number: 7,
    title: "Affordable and Clean Energy"
  },
  {
    number: 9,
    title: "Industry, Innovation and Infrastructure"
  },
  {
    number: 11,
    title: "Sustainable Cities and Communities"
  },
  {
    number: 13,
    title: "Climate Action"
  }
]

export default function Home() {
  const features = [
    { 
      title: 'Sustainable Power Generation', 
      description: 'Harnessing gravity for clean energy production.',
      icon: Zap,
      explanation: 'Our system converts gravitational potential energy into electricity, providing a constant and renewable power source.'
    },
    { 
      title: 'Reliable Energy Supply', 
      description: 'Consistent power output for uninterrupted service.',
      icon: Battery,
      stats: '99.9% uptime with minimal maintenance required'
    },
    { 
      title: 'Scalable and Versatile', 
      description: 'Adaptable to various energy needs and environments.',
      icon: Maximize2,
      areas: ['Urban centers', 'Rural communities', 'Industrial complexes', 'Off-grid locations']
    },
    { 
      title: 'Cost-Effective Solution', 
      description: 'Affordable energy generation for long-term savings.',
      icon: DollarSign,
      costComparison: '30% lower lifetime costs compared to traditional energy methods'
    },
  ]

  const challenges = [
    {
      icon: LineChart,
      title: 'High Energy Costs',
      description: 'Traditional energy sources lead to increasing costs for consumers',
      stat: '32%',
      statDescription: 'Average annual increase in energy costs'
    },
    {
      icon: Cloud,
      title: 'Environmental Impact',
      description: 'Conventional power generation contributes to climate change',
      stat: '36.3B',
      statDescription: 'Metric tons of CO2 emissions annually'
    },
    {
      icon: Monitor,
      title: 'Energy Reliability',
      description: 'Grid instability and frequent power outages',
      stat: '4.5hrs',
      statDescription: 'Average downtime per month'
    },
    {
      icon: Lightbulb,
      title: 'Resource Dependency',
      description: 'Heavy reliance on finite fossil fuel resources',
      stat: '84%',
      statDescription: 'Global energy from non-renewable sources'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="Innovative energy concept"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4" data-aos="fade-up">
            Elevate. Innovate. Levitate.
          </h1>
          <p className="text-xl sm:text-2xl mb-8" data-aos="fade-up" data-aos-delay="200">Lifting dreams, grounding reality</p>
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-150 ease-in-out hover:scale-105 active:bg-green-800"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Learn More
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <AboutUs />

      {/* Global Energy Challenges Section */}
      <section className="py-16 bg-white dark:bg-gray-900" id="challenges">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white" data-aos="fade-up">
              Global Energy Challenges
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              The world faces critical energy challenges that demand innovative solutions. Our gravity-powered system addresses these challenges head-on.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover-effect-challenges"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-[#085548]/10 dark:bg-[#085548]/30">
                    <challenge.icon className="h-8 w-8 text-green-600 dark:text-green-400]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {challenge.description}
                  </p>
                  <div className="mt-auto">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                      {challenge.stat}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {challenge.statDescription}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem-Solution Approach */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white" data-aos="fade-up">
            Addressing Global Energy Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div data-aos="fade-right" className="hover-effect-addressing-challenges p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Current Energy Limitations</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>High carbon emissions from fossil fuels</li>
                <li>Intermittency issues with solar and wind</li>
                <li>Limited scalability of hydroelectric power</li>
                <li>Safety concerns with nuclear energy</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover-effect-addressing-challenges" data-aos="fade-left">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Akarshana's Solution</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our gravity-powered system offers a sustainable, reliable, and scalable alternative that addresses these challenges:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Zero carbon emissions during operation</li>
                <li>Consistent power generation, independent of weather</li>
                <li>Adaptable to various geographical locations</li>
                <li>Safe and low-risk technology</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Showcase */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white" data-aos="fade-up">
            Key Benefits of Akarshana
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover-effect hover-effect-home"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <feature.icon className="h-12 w-12 text-green-600 dark:text-green-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
                {feature.explanation && <p className="text-sm text-gray-500 dark:text-gray-400">{feature.explanation}</p>}
                {feature.stats && <p className="text-sm font-semibold text-green-600 dark:text-green-400">{feature.stats}</p>}
                {feature.areas && (
                  <ul className="text-sm text-gray-500 dark:text-gray-400 list-disc list-inside">
                    {feature.areas.map((area, i) => <li key={i}>{area}</li>)}
                  </ul>
                )}
                {feature.costComparison && <p className="text-sm font-semibold text-green-600 dark:text-green-400">{feature.costComparison}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white" data-aos="fade-up">
            Environmental Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div data-aos="fade-right" className="hover-effect-environmental-impact p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Carbon Reduction</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our gravity-powered system can significantly reduce carbon emissions compared to traditional energy sources:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Up to 90% reduction in CO2 emissions</li>
                <li>Zero air pollutants during operation</li>
                <li>Minimal environmental disturbance</li>
              </ul>
            </div>
            <div data-aos="fade-left" className="hover-effect-environmental-impact p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Global Impact</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If widely adopted, Akarshana's technology could contribute to:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Meeting 20% of global energy demand by 2050</li>
                <li>Reducing global carbon emissions by 15%</li>
                <li>Supporting 7 out of 17 UN Sustainable Development Goals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact Stats Section */}
      <section className="py-16 bg-green-50 dark:bg-gray-800" id="environmental-impact-stats">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white" data-aos="fade-up">
              Environmental Impact Stats
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Our gravity-powered solution contributes significantly to global sustainability goals while reducing environmental impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {environmentalStats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover-effect-impact-stats"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-green-100 dark:bg-green-900">
                    <stat.icon className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                    {stat.title}
                  </h3>
                  <div className="mt-2">
                    <div className="text-4xl font-bold text-green-600 dark:text-green-400">
                      {stat.stat}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {stat.unit}
                    </p>
                  </div>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UN Sustainable Development Goals Alignment Section */}
      <section className="py-16 bg-white dark:bg-gray-900" id="sdg-alignment">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white" data-aos="fade-up">
              UN Sustainable Development Goals Alignment
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdgGoals.map((goal, index) => (
              <motion.div
                key={index}
                className="bg-green-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover-effect-sdg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    SDG {goal.number}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {goal.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <BlogPreview />

      {/* Call to Action */}
      <section className="py-16 bg-green-600 dark:bg-green-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white" data-aos="fade-up">
            Join the Gravity-Powered Revolution
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 transition duration-150 ease-in-out"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Get in Touch
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

