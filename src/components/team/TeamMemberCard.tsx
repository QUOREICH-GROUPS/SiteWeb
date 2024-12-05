import { motion } from 'framer-motion';
import { TeamMember } from '../../types';

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  return (
    <motion.div
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
  );
}