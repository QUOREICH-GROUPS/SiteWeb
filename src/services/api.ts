import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export interface Course {
  id?: number;
  title: string;
  description: string;
  price: number;
  duration: string;
  level: string;
}

export const api = {
  getCourses: () => axios.get<Course[]>(`${API_URL}/courses`),
  createCourse: (course: Course) => axios.post<Course>(`${API_URL}/courses`, course),
  updateCourse: (id: number, course: Course) => axios.put<Course>(`${API_URL}/courses/${id}`, course),
  deleteCourse: (id: number) => axios.delete(`${API_URL}/courses/${id}`),
};