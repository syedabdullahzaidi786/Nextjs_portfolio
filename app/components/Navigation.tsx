'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-blue-400"
          >
            Syed Abdullah Zaidi
          </motion.h1>
        </Link>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`capitalize ${pathname === item.path ? 'text-blue-400' : 'text-gray-300 hover:text-gray-100'}`}
              >
                {item.name}
              </motion.a>
            </Link>
          ))}
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-300 hover:text-gray-100"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-900 pt-4 pb-8"
        >
          <div className="container mx-auto px-4 flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-xl capitalize ${pathname === item.path ? 'text-blue-400' : 'text-gray-300 hover:text-gray-100'}`}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}