'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const updates = [
  {
    id: 1,
    title: 'Mohali: Students come up with cost-effective model to generate power',
    description: 'Claim patented prototype also offers more production than existing systems',
    date: '2024-12-22',
    image: 'https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYWI5YzZmMDYwLWEzYjctMTFlZi1hNjI2LWQ5ZDRhZTViZWQ1Ni5qcGc=',
    link: 'https://www.tribuneindia.com/news/chandigarh/mohali-students-come-up-with-cost-effective-model-to-generate-power/'
  },
  {
    id: 2,
    title: 'From Research to Reality - CU Students’ Breakthrough in Gravity-Driven Power Generation',
    description: 'Revolutionizing Energy Production with Gravity',
    date: '2024-11-18',
    image: 'https://media.licdn.com/dms/image/v2/D5612AQFEsHvD5M41eA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1731926648922?e=1740614400&v=beta&t=dgauLwBB88k9SU2f5gbrFObd9yDtImR33Y_heAxzr7M',
    link: 'https://www.linkedin.com/pulse/from-research-reality-cu-students-breakthrough-ahr3c/?trackingId=1U0brf6HkO%2F8JU%2BQNldP3w%3D%3D'
  }
]

export default function Updates() {
  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white" data-aos="fade-up">
          Latest Updates
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {updates.map((update) => (
            <motion.div
              key={update.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              data-aos="fade-up"
              data-aos-delay={update.id * 100}
            >
              <Link href={update.link}>
                <div className="relative h-48 md:h-64">
                  <Image
                    src={update.image}
                    alt={update.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                    {update.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {update.description}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {update.date}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

