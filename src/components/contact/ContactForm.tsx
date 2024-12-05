import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { ContactForm } from '../../types';

export default function ContactFormComponent() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    try {
      // Here you would typically send the data to your backend
      console.log(data);
      reset();
      alert('Message envoyé avec succès!');
    } catch (error) {
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border border-gray-700"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Nom complet
        </label>
        <input
          type="text"
          {...register('name', { required: true })}
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.name && (
          <span className="text-red-500 text-sm">Ce champ est requis</span>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          type="email"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">Email invalide</span>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
          Sujet
        </label>
        <input
          type="text"
          {...register('subject', { required: true })}
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.subject && (
          <span className="text-red-500 text-sm">Ce champ est requis</span>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Message
        </label>
        <textarea
          {...register('message', { required: true })}
          rows={6}
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.message && (
          <span className="text-red-500 text-sm">Ce champ est requis</span>
        )}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Envoyer
      </motion.button>
    </motion.form>
  );
}