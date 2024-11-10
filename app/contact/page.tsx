'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import Input from '../components/ui/input';
import Textarea from '../components/ui/textarea';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100 relative">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-blue-900 to-transparent opacity-40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-400">
          Get in Touch
        </h1>
        <p className="text-center text-gray-400 mb-12">
          Have a question or want to work together? Fill out the form below.
        </p>

        <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name Field */}
            <div>
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-gray-700 border border-gray-600 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg px-4 py-2"
              />
            </div>

            {/* Email Field */}
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-gray-700 border border-gray-600 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg px-4 py-2"
              />
            </div>

            {/* Message Field */}
            <div>
              <Textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full bg-gray-700 border border-gray-600 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg px-4 py-2 h-32"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-all"
            >
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
