'use client';

import { motion, HTMLMotionProps } from 'framer-motion';

interface MotionDivProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
}

const MotionDiv: React.FC<MotionDivProps> = ({
  children,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.5 },
  ...props
}) => {
  return (
    <motion.div initial={initial} animate={animate} transition={transition} {...props}>
      {children}
    </motion.div>
  );
};

export default MotionDiv;
