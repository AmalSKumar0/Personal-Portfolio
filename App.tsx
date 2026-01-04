import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;