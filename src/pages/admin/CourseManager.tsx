import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { api, Course } from '../../services/api';

export default function CourseManager() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const response = await api.getCourses();
    setCourses(response.data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCourse) {
      if (editingCourse.id) {
        await api.updateCourse(editingCourse.id, editingCourse);
      } else {
        await api.createCourse(editingCourse);
      }
      await loadCourses();
      setEditingCourse(null);
      setIsFormOpen(false);
    }
  };

  const handleDelete = async (id: number) => {
    await api.deleteCourse(id);
    await loadCourses();
  };

  return (
    <div className="pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-4">Gestion des Formations</h1>
          <button
            onClick={() => {
              setEditingCourse({ title: '', description: '', price: 0, duration: '', level: '' });
              setIsFormOpen(true);
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Ajouter une formation
          </button>
        </motion.div>

        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 bg-white rounded shadow"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1">Titre</label>
                <input
                  type="text"
                  value={editingCourse?.title || ''}
                  onChange={e => setEditingCourse(prev => ({ ...prev!, title: e.target.value }))}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Description</label>
                <textarea
                  value={editingCourse?.description || ''}
                  onChange={e => setEditingCourse(prev => ({ ...prev!, description: e.target.value }))}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Prix</label>
                <input
                  type="number"
                  value={editingCourse?.price || ''}
                  onChange={e => setEditingCourse(prev => ({ ...prev!, price: parseFloat(e.target.value) }))}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Durée</label>
                <input
                  type="text"
                  value={editingCourse?.duration || ''}
                  onChange={e => setEditingCourse(prev => ({ ...prev!, duration: e.target.value }))}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Niveau</label>
                <select
                  value={editingCourse?.level || ''}
                  onChange={e => setEditingCourse(prev => ({ ...prev!, level: e.target.value }))}
                  className="w-full p-2 border rounded"
                >
                  <option value="">Sélectionner un niveau</option>
                  <option value="Débutant">Débutant</option>
                  <option value="Intermédiaire">Intermédiaire</option>
                  <option value="Avancé">Avancé</option>
                </select>
              </div>
              <div className="flex gap-2">
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                  Enregistrer
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEditingCourse(null);
                    setIsFormOpen(false);
                  }}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Annuler
                </button>
              </div>
            </form>
          </motion.div>
        )}

        <div className="grid gap-4">
          {courses.map(course => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-white rounded shadow"
            >
              <h2 className="text-xl font-bold mb-2">{course.title}</h2>
              <p className="mb-2">{course.description}</p>
              <div className="flex justify-between items-center">
                <div>
                  <p>Prix: {course.price}€</p>
                  <p>Durée: {course.duration}</p>
                  <p>Niveau: {course.level}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setEditingCourse(course);
                      setIsFormOpen(true);
                    }}
                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => course.id && handleDelete(course.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}