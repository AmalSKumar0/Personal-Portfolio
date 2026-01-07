import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isFading, setIsFading] = React.useState(false);

  React.useEffect(() => {
    // Logic moved to internal component timer + callback
  }, []);

  const handleLoadingComplete = () => {
    setIsFading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      {!isLoading && (
        <div className="min-h-screen bg-cream dark:bg-tech-black font-sans overflow-x-hidden selection:bg-flow-purple selection:text-flow-dark transition-colors duration-300 animate-fade-in">
          <Router>
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </Router>
        </div>
      )}
    </>
  );
};

export default App;