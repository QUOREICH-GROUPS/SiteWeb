import { motion } from 'framer-motion';

const team = [
  {
    name: 'Sophie Martin',
    title: 'CEO & Fondatrice',
    image: '/team/sophie.jpg',
    description: 'Experte en IA avec 15 ans d\'expérience'
  },
  {
    name: 'Thomas Dubois',
    title: 'Directeur Technique',
    image: '/team/thomas.jpg',
    description: 'Architecte IA & Machine Learning'
  },
  {
    name: 'Marie Laurent',
    title: 'Responsable Formation',
    image: '/team/marie.jpg',
    description: 'Spécialiste en pédagogie numérique'
  }
];

export default function About() {
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
              À Propos de QUOREICH AI CORPORATE
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous sommes une entreprise leader dans le domaine de l'intelligence artificielle,
              dédiée à transformer la façon dont les entreprises abordent l'innovation numérique.
              Notre mission est de rendre l'IA accessible et compréhensible pour tous.
            </p>
          </motion.div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Notre Équipe
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300"
                >
                  <div className="aspect-w-1 aspect-h-1 mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full bg-blue-200 flex items-center justify-center">
                      <span className="text-4xl">👤</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 text-center mb-4">{member.title}</p>
                  <p className="text-gray-600 text-center">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-20 bg-blue-600 text-white rounded-xl p-8 shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">
              Notre Vision
            </h2>
            <p className="text-lg text-center">
              Devenir le partenaire de référence dans la transformation numérique
              des entreprises grâce à l'intelligence artificielle, tout en formant
              la prochaine génération d'experts en IA.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}