import { motion } from 'framer-motion';
import { services } from '../data/services';
import ServiceCard from '../components/services/ServiceCard';

export default function Services() {
  return (
    <div className="pt-20">
      <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-white mb-6">
              Nos Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des solutions innovantes pour votre transformation numérique
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}