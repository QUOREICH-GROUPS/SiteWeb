import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

// Get all courses
app.get('/api/courses', async (req, res) => {
  const courses = await prisma.course.findMany();
  res.json(courses);
});

// Create a course
app.post('/api/courses', async (req, res) => {
  const { title, description, price, duration, level } = req.body;
  const course = await prisma.course.create({
    data: {
      title,
      description,
      price: parseFloat(price),
      duration,
      level,
    },
  });
  res.json(course);
});

// Update a course
app.put('/api/courses/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, price, duration, level } = req.body;
  const course = await prisma.course.update({
    where: { id: parseInt(id) },
    data: {
      title,
      description,
      price: parseFloat(price),
      duration,
      level,
    },
  });
  res.json(course);
});

// Delete a course
app.delete('/api/courses/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.course.delete({
    where: { id: parseInt(id) },
  });
  res.json({ message: 'Course deleted' });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});