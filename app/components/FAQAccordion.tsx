'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

interface FAQAccordionProps {
  faqs: FAQ[]
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg">
          <button
            className="flex justify-between items-center w-full p-4 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            <span className="font-medium text-gray-800 dark:text-white">{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500" />
            )}
          </button>
          {openIndex === index && (
            <div className="p-4 bg-gray-50 dark:bg-gray-700">
              <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default FAQAccordion

