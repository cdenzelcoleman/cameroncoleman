import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const { chatbotOpen, setChatbotOpen } = useUI();
  
  return (
    <AnimatePresence>
      {chatbotOpen && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className="fixed bottom-4 right-4 bg-black p-4 pixel-border"
        >
          <div className="chatbot-header flex items-center mb-4">
            <div className="w-8 h-8 bg-primary mr-2 pixel-art-sprite"></div>
            <h3 className="text-primary">ByteBuddy 3000</h3>
          </div>
          {/* Add chat interface here */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Chatbot;