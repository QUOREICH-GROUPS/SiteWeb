import { Course, TeamMember, Feature } from '../types';

export const courses: Course[] = [
  {
    title: "Introduction à l'IA",
    description: "Découvrez les fondamentaux de l'intelligence artificielle",
    price: 999,
    duration: "4 semaines",
    level: "Débutant"
  },
  {
    title: "Machine Learning Avancé",
    description: "Maîtrisez les algorithmes de machine learning",
    price: 1499,
    duration: "8 semaines",
    level: "Intermédiaire"
  },
  {
    title: "Deep Learning Expert",
    description: "Plongez dans les réseaux de neurones profonds",
    price: 1999,
    duration: "12 semaines",
    level: "Avancé"
  },
  {
    title: "IA pour le Business",
    description: "Appliquez l'IA à vos problématiques business",
    price: 1299,
    duration: "6 semaines",
    level: "Intermédiaire"
  }
];

export const team: TeamMember[] = [
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

export const features: Feature[] = [
  {
    title: "Formation Expert",
    description: "Des programmes de formation adaptés à tous les niveaux",
    icon: "🎓"
  },
  {
    title: "Innovation Continue",
    description: "Restez à la pointe de la technologie avec nos solutions",
    icon: "💡"
  },
  {
    title: "Support Personnalisé",
    description: "Une équipe dédiée pour vous accompagner",
    icon: "🤝"
  }
];