'use client';

import dynamic from 'next/dynamic';

// Dynamically import motion.div to ensure it's only rendered on the client side
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });

export default MotionDiv;
