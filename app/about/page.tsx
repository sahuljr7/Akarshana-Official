'use client'

import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

const teamMembers = [
  {
    name: 'Annkit Sarkar',
    role: 'Founder & Energy Consultant',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQGSyIPsjJTw9w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730098008599?e=1740009600&v=beta&t=5kyLAksPLDuWrqTzYP2HSQW5guNuSq0NYVWTFWq4UEM' 
  },
  {
    name: 'Tanishqa Gupta',
    role: 'Project Manager',
    image: 'https://global.discourse-cdn.com/openai1/optimized/4X/d/f/7/df77e327bf0024f176e51825513a3d061739e390_2_500x500.png'
  },
  {
    name: 'Subhankar Ghosh',
    role: 'CTO',
    image: 'https://png.pngtree.com/element_our/20190528/ourmid/pngtree-520-cute-groom-avatar-image_1153286.jpg'
  },
  {
    name: 'Sahul Kumar Parida',
    role: 'Technical Lead',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQH8ALWrijks2w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721230615203?e=1740614400&v=beta&t=oNHmIsk2BfQ_TQKG2XcVZMFZ47YECHpgj3wVfdwClMI'
  },
  {
    name: 'Saswat Kumar Panda',
    role: 'Technical Lead',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQG671-c6ua-Tw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721362133891?e=1740009600&v=beta&t=OJNdTCTCdHsiyAzd7tWDkiaP2HX18tb_Y7a-E8Zi75w'
  },
  {
    name: 'Subhadeep Sen',
    role: 'Control System Engineer',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQFmgjZZYaIxWg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1687241335657?e=1740614400&v=beta&t=i23nq3ZIuiduoMCjpdWm7JC4NLNUEt9qFMCMaCTEOMc'
  },
  {
    name: 'AVS Hemaditya',
    role: 'AI Engineer',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQEqnTy6mX7TmQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718295469311?e=1740614400&v=beta&t=d882g-iFfXmNQojbFL6Bt4-He6Xl6S7rDysSkVbyQa8'
  },
  {
    name: 'Revanth Goli',
    role: 'Researcher',
    image: 'https://img.freepik.com/free-photo/3d-rendering-boy-wearing-cap-with-letter-r_1142-40523.jpg'
  },
  {
    name: 'Shruti Bhushan',
    role: 'AI Engineer',
    image: 'https://media.licdn.com/dms/image/v2/D4D35AQHVUh-uI27JZw/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1728019899095?e=1735725600&v=beta&t=X8DS1BCCTqi9V1hB1prdygKrys_Ih3Xczjx6PQWO2gc'
  },
  {
    name: 'Marcelo Maciel Amaral',
    role: 'Research Scientist',
    image: 'https://media.licdn.com/dms/image/v2/C5603AQEfYAF7z50WQQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1525808547289?e=1740614400&v=beta&t=kX-7PDMfQwKzbLPUSs8D1_EG1VFS7tViWPmOSYqNCLs'
  },
  {
    name: 'Tony Barrera',
    role: 'Research Scientist',
    image: 'https://media.licdn.com/dms/image/v2/C4D03AQGO9aG2bL5XNg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1661448443936?e=1740614400&v=beta&t=xiUplclSy5U2WwuQaaStSOYIFkFzXoNjHFjVedXfXAU'
  },
]

const milestones = [
  { year: '2025', event: 'Formation of Akarshana' },
  { year: '2026', event: 'Trying to achieve Zeroth Principle' },
  { year: '2027', event: 'Strategic Alliances' },
  { year: '2028', event: 'Developing Strategies to reach goals' },
  { year: '2029', event: 'Integration of Technologies for providing better solutions' },
]

export default function About() {
  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white" data-aos="fade-up">
          About Akarshana
        </h1>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-white" data-aos="fade-up">Our Mission</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4" data-aos="fade-up" data-aos-delay="100">
            At Akarshana, we are committed to revolutionizing the energy sector through our innovative gravity-powered electrical energy generation system. Our mission is to provide sustainable, safe, and affordable energy solutions that contribute to a cleaner and greener future.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                Innovative Technology
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Developing cutting-edge gravity-powered systems for efficient energy generation.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                Safe and Reliable
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ensuring the highest standards of safety and reliability in our energy solutions.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                Cost-Effective
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Providing affordable energy solutions with lower lifetime costs.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-white" data-aos="fade-up">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-500"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md inline-block">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{milestone.year}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-white text-center" data-aos="fade-up">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="mb-4 relative w-32 h-32 mx-auto">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{member.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

