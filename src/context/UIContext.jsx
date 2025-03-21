import { createContext, useContext, useState, useEffect } from 'react';


const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('about');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [chatbotOpen, setChatbotOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      setScrollProgress(scrollY / (fullHeight - windowHeight));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <UIContext.Provider value={{ 
      activeSection, 
      setActiveSection,
      scrollProgress,
      chatbotOpen, 
      setChatbotOpen 
    }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);