import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/shared/CustomCursor';
import ScrollIndicator from './components/shared/ScrollIndicator';
import PageTransition from './components/shared/PageTransition';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Courses = lazy(() => import('./pages/Courses'));
const Services = lazy(() => import('./pages/Services'));
const CourseManager = lazy(() => import('./pages/admin/CourseManager'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
        <CustomCursor />
        <Navbar />
        <AnimatePresence mode="wait">
          <PageTransition>
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-screen">
                <div className="text-2xl text-white">Chargement...</div>
              </div>
            }>
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/admin/courses" element={<CourseManager />} />
                </Routes>
              </main>
            </Suspense>
          </PageTransition>
        </AnimatePresence>
        <ScrollIndicator />
        <Footer />
      </div>
    </Router>
  );
}

export default App;