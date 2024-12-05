import { motion } from 'framer-motion';

const courses = [
  {
    title: "Introduction à l'IA",
    description: "Découvrez les fondamentaux de l'intelligence artificielle",
    price: "999€",
    duration: "4 semaines",
    level: "Débutant"
  },
  {
    title: "Machine Learning Avancé",
    description: "Maîtrisez les algorithmes de machine learning",
    price: "1499€",
    duration: "8 semaines",
    level: "Intermédiaire"
  },
  {
    title: "Deep Learning Expert",
    description: "Plongez dans les réseaux de neurones profonds",
    price: "1999€",
    duration: "12 semaines",
    level: "Avancé"
  },
  {
    title: "IA pour le Business",
    description: "Appliquez l'IA à vos problématiques business",
    price: "1299€",
    duration: "6 semaines",
    level: "Intermédiaire"
  }
];

export default function Courses() {
  return (
    <div className="pt-20">
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Nos Formations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos formations professionnelles en intelligence artificielle,
              conçues pour tous les niveaux et adaptées aux besoins du marché.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
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
                      <span className="text-2xl font-bold text-blue-600">{course.price}</span>
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}