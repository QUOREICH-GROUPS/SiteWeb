import { motion } from 'framer-motion';
import DraggableSlider from '../shared/DraggableSlider';

const testimonials = [
  {
    name: "Jean Dupont",
    role: "CTO, TechCorp",
    content: "La formation en IA de QUOREICH a transformé notre approche du développement produit.",
    avatar: "👨‍💼"
  },
  {
    name: "Marie Claire",
    role: "Data Scientist",
    content: "Une expérience d'apprentissage exceptionnelle avec des formateurs experts.",
    avatar: "👩‍💼"
  },
  {
    name: "Pierre Martin",
    role: "Entrepreneur",
    content: "Grâce à QUOREICH, j'ai pu intégrer l'IA dans ma startup avec succès.",
    avatar: "👨‍💻"
  },
  {
    name: "Sophie Lambert",
    role: "Lead Developer",
    content: "Une formation complète qui m'a permis de monter en compétence rapidement.",
    avatar: "👩‍💻"
  }
];

export default function TestimonialCarousel() {
  const testimonialElements = testimonials.map((testimonial, index) => (
    <motion.div
      key={index}
      className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl w-96"
    >
      <div className="text-6xl mb-6 text-center">{testimonial.avatar}</div>
      <p className="text-gray-300 text-lg italic mb-6 text-center">
        "{testimonial.content}"
      </p>
      <div className="text-center">
        <h4 className="font-semibold text-white">{testimonial.name}</h4>
        <p className="text-blue-400">{testimonial.role}</p>
      </div>
    </motion.div>
  ));

  return (
    <div className="relative max-w-7xl mx-auto">
      <DraggableSlider items={testimonialElements} className="py-8" />
    </div>
  );
}