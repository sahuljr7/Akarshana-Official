import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Zap, Battery, Maximize2, DollarSign } from 'lucide-react'

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <Image
          src="/placeholder.svg"
          alt="Innovative energy concept"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Elevate. Innovate. Levitate.
          </h1>
          <p className="text-xl sm:text-2xl mb-8">Lifting dreams, grounding reality</p>
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-150 ease-in-out"
          >
            Learn More
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Problem-Solution Approach */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Addressing Global Energy Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Current Energy Limitations</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>High carbon emissions from fossil fuels</li>
                <li>Intermittency issues with solar and wind</li>
                <li>Limited scalability of hydroelectric power</li>
                <li>Safety concerns with nuclear energy</li>
              </ul>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Key Benefits of Akarshana
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105"
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
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Environmental Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
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
            <div>
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

      {/* Call to Action */}
      <section className="py-16 bg-green-600 dark:bg-green-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">
            Join the Gravity-Powered Revolution
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 transition duration-150 ease-in-out"
          >
            Get in Touch
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

