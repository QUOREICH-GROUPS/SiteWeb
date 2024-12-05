import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import FloatingCards from '../components/home/FloatingCards';
import TestimonialCarousel from '../components/home/TestimonialCarousel';
import AnimatedCounter from '../components/home/AnimatedCounter';
import XRAnimation from '../components/home/XRAnimation';

export default function Home() {
  return (
    <div className="bg-gray-900">
      <HeroSection />
      
      <section className="py-20 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Immersion XR/VR
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez nos solutions immersives pour transformer votre expérience digitale.
              De la réalité virtuelle à la réalité augmentée, explorez de nouvelles dimensions.
            </p>
          </motion.div>
          <XRAnimation />
        </motion.div>
      </section>

      <FloatingCards />

      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Notre Impact
            </h2>
            <p className="text-xl text-gray-300">
              Des résultats concrets pour votre transformation digitale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatedCounter value={1000} title="Professionnels Formés" />
            <AnimatedCounter value={50} title="Experts Formateurs" />
            <AnimatedCounter value={95} title="Satisfaction Client" />
            <AnimatedCounter value={200} title="Entreprises Partenaires" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Témoignages
            </h2>
          </motion.div>
          <TestimonialCarousel />
        </div>
      </section>
    </div>
  );
}