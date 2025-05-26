import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, About, Services, Team, StrategicPartners, ContactUs } from './pages';
import { trackWebVitals, sendPerformanceMetrics, optimizeImageLoading, addResourceHints } from './utils/performance';

function App() {
  useEffect(() => {
    // Initialize performance monitoring
    trackWebVitals(sendPerformanceMetrics);
    
    // Optimize image loading
    optimizeImageLoading();
    
    // Add resource hints for better performance
    addResourceHints();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/strategic-partners" element={<StrategicPartners />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
