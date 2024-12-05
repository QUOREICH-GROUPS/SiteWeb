import { motion } from 'framer-motion';
import DraggableSlider from '../shared/DraggableSlider';

const cards = [
  {
    title: 'Machine Learning',
    icon: '🤖',
    color: 'from-blue-500 to-purple-500'
  },
  {
    title: 'Deep Learning',
    icon: '🧠',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Computer Vision',
    icon: '👁️',
    color: 'from-pink-500 to-red-500'
  },
  {
    title: 'Natural Language',
    icon: '💬',
    color: 'from-red-500 to-orange-500'
  },
  {
    title: 'Reinforcement Learning',
    icon: '🎮',
    color: 'from-orange-500 to-yellow-500'
  }
];

export default function FloatingCards() {
  const cardElements = cards.map((card, index) => (
    <motion.div
      key={card.title}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className={`p-8 rounded-2xl bg-gradient-to-br ${card.color} shadow-xl w-72`}
    >
      <div className="text-4xl mb-4">{card.icon}</div>
      <h3 className="text-xl font-bold text-white">{card.title}</h3>
    </motion.div>
  ));

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <DraggableSlider items={cardElements} className="py-8" />
    </div>
  );
}