'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from './components/ui/button'; // Ensure correct path
import { ChevronRight } from 'react-feather'; // Correct import

export default function Home() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between">
        {/* Text and Button Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-blue-400">Crafting Digital Experiences</h1>
          <p className="text-xl mb-8 text-gray-300">
            I am a full-stack developer passionate about creating innovative and user-centric web solutions.
          </p>
          <Button className="bg-blue-500 text-white hover:bg-blue-600 text-lg px-8 py-3 flex items-center">
            View My Work <ChevronRight className="ml-2" />
          </Button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg"
        >
          <Image
            src="/my.jpg"
            alt="Syed Abdullah Zaidi"
            fill
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
