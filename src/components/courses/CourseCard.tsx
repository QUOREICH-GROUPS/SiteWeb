import { motion } from 'framer-motion';
import { Course } from '../../types';

interface CourseCardProps {
  course: Course;
  index: number;
}

export default function CourseCard({ course, index }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-blue-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300"
    >
      <div className="flex flex-col h-full">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {course.title}
        </h3>
        <p className="text-gray-600 mb-6 flex-grow">
          {course.description}
        </p>
        <div className="border-t border-blue-200 pt-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">Durée: {course.duration}</span>
            <span className="text-sm text-gray-500">Niveau: {course.level}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-blue-600">{course.price}€</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              S'inscrire
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}