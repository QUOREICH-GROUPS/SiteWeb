import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

interface AnimatedCounterProps {
  value: number;
  title: string;
  duration?: number;
}

export default function AnimatedCounter({ value, title, duration = 2 }: AnimatedCounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, value, { duration });
    return animation.stop;
  }, [value, duration]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl"
    >
      <motion.span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        {rounded}
      </motion.span>
      <h3 className="text-lg font-semibold text-gray-300 mt-2">{title}</h3>
    </motion.div>
  );
}