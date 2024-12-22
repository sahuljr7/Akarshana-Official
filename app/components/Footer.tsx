import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Home</Link></li>
              <li><Link href="/features" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Features</Link></li>
              <li><Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Contact Us</h3>
            <p className="text-gray-600 dark:text-gray-400">Chandigarh University, Gharuan, The Kharar, District Mohali, Punjab, 140413</p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Email: akarshanaspace@gmail.com</p>
            <p className="text-gray-600 dark:text-gray-400">Phone: +91 8697319384</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">&copy; 2024 Akarshana. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

