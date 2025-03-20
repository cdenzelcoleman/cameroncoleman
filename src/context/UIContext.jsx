import { createContext, useContext, useState } from 'react';

const UIContext = createContext();

export const UIProvider = ({ children }) => {
    const [activeSection, setActiveSection] = useState('about');
    const [chatbotOpen, setChatbotOpen] = useState(false);

    return (
        <UIContext.Provider value={{ activeSection, setActiveSection, chatbotOpen, setChatbotOpen }}>
            {children}
        </UIContext.Provider>
    );
}

export const useUI = () => useContext(UIContext);