import { motion } from 'framer-motion';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
    >
      <div className="flex flex-col h-full">
        <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 gradient-text">
          {service.title}
        </h3>
        <p className="text-gray-300 mb-6 flex-grow">
          {service.description}
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
        >
          En savoir plus
        </motion.button>
      </div>
    </motion.div>
  );
}