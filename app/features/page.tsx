import { Lightbulb, Battery, Maximize, DollarSign } from 'lucide-react'
import FAQAccordion from '../components/FAQAccordion'
import Link from 'next/link'

const features = [
  {
    title: 'Sustainable Power Generation',
    description: 'Our innovative gravity-powered system generates clean, renewable energy without harmful emissions.',
    icon: Lightbulb,
    details: [
      'Utilizes the force of gravity to generate electricity',
      'Zero carbon emissions during operation',
      'Minimal environmental impact',
      'Continuous power generation, day and night'
    ]
  },
  {
    title: 'Reliable Energy Supply',
    description: 'Consistent power output ensures a stable and uninterrupted energy supply for your needs.',
    icon: Battery,
    details: [
      '99.9% uptime guarantee',
      'Weather-independent operation',
      'Minimal maintenance requirements',
      'Built-in redundancy for enhanced reliability'
    ]
  },
  {
    title: 'Scalable and Versatile',
    description: 'Easily adaptable to various energy requirements and environmental conditions.',
    icon: Maximize,
    details: [
      'Modular design for easy scaling',
      'Suitable for urban and rural environments',
      'Adaptable to different geographical locations',
      'Integrates with existing power infrastructure'
    ]
  },
  {
    title: 'Cost-Effective Solution',
    description: 'Lower operational costs and minimal maintenance lead to significant long-term savings.',
    icon: DollarSign,
    details: [
      '30% lower lifetime costs compared to traditional methods',
      'Reduced dependency on fuel price fluctuations',
      'Minimal operational expenses',
      'Potential for government incentives and tax benefits'
    ]
  },
]

const faqs = [
  {
    question: 'How does gravity-powered energy generation work?',
    answer: 'Gravity-powered energy generation utilizes the force of gravity to produce electricity. It involves lifting a heavy mass and then allowing it to descend slowly, driving a generator in the process. This creates a continuous cycle of energy production that can be sustained with minimal input.'
  },
  {
    question: 'Is Akarshana\'s technology environmentally friendly?',
    answer: 'Yes, our technology is environmentally friendly. It produces clean energy without emissions, making it a sustainable alternative to fossil fuels. The system has a minimal environmental footprint and does not require large-scale alterations to the natural landscape.'
  },
  {
    question: 'Can Akarshana\'s system be integrated with existing power grids?',
    answer: 'Absolutely. Our system is designed to be compatible with existing power infrastructures, allowing for seamless integration and complementing other renewable energy sources. It can function as a standalone system or as part of a larger energy network.'
  },
  {
    question: 'What maintenance does the Akarshana system require?',
    answer: 'Our system is designed for minimal maintenance. Regular inspections and occasional component replacements are typically all that\'s needed to keep the system running efficiently. The simplicity of the mechanical design contributes to its low maintenance requirements and high reliability.'
  },
  {
    question: 'How scalable is the Akarshana gravity-powered system?',
    answer: 'The Akarshana system is highly scalable. Its modular design allows for easy expansion to meet growing energy demands. Whether you need to power a small community or a large industrial complex, our system can be scaled accordingly without compromising efficiency.'
  },
  {
    question: 'What are the cost benefits of using Akarshana\'s technology?',
    answer: 'Akarshana\'s gravity-powered system offers significant cost benefits over its lifetime. While initial setup costs may be comparable to other renewable energy sources, the system\'s low operational and maintenance costs result in lower overall lifetime costs. Additionally, the system\'s reliability reduces the need for backup power sources, further contributing to cost savings.'
  },
]

export default function Features() {
  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white" data-aos="fade-up">
          What We Offer
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center mb-4">
                <feature.icon className="h-8 w-8 text-green-500 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{feature.title}</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                {feature.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-150 ease-in-out"
            data-aos="fade-up"
          >
            Contact Us to Learn More
          </Link>
        </div>

        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white" data-aos="fade-up">
          Frequently Asked Questions
        </h2>
        <FAQAccordion faqs={faqs} />
      </div>
    </div>
  )
}

