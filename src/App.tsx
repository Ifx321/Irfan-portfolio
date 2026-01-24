import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Experience } from './pages/Experience';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';
import { Education } from './pages/Education';
import { Contact } from './pages/Contact';
import { ECommerceProject } from './pages/projects/ECommerce';
import { DeforestationProject } from './pages/projects/Deforestation';
import { VideoGamesProject } from './pages/projects/VideoGames';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/ecommerce" element={<ECommerceProject />} />
          <Route path="/projects/deforestation" element={<DeforestationProject />} />
          <Route path="/projects/videogames" element={<VideoGamesProject />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
