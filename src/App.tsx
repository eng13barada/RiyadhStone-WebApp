import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './site/pages/Home';
import About from './site/pages/About';
import SolutionsProducts from './site/pages/SolutionsProducts';
import Engineering from './site/pages/Engineering';
import ProjectSupports from './site/pages/ProjectSupports';
import ContactUs from './site/pages/ContactUs';

/** Scrolls to the top of the page on every pathname change. */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="noise-overlay" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions-products" element={<SolutionsProducts />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/project-supports" element={<ProjectSupports />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
