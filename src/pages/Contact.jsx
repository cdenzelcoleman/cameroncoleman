import { motion } from 'framer-motion';
import Section from '../components/Section';

const Contact = () => (
  <Section id="contact">
    <div className="max-w-6xl mx-auto p-6 sm:p-8 lg:p-12">
      <div className="max-w-md mx-auto">
        <motion.h1 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-3xl sm:text-4xl lg:text-5xl mb-8 pixel-text"
        >
          Contact Terminal
        </motion.h1>
        <form className="space-y-6 pixel-form">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 sm:p-4 bg-black text-primary border-2 border-primary pixel-input text-sm sm:text-base"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 sm:p-4 bg-black text-primary border-2 border-primary pixel-input text-sm sm:text-base"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 sm:p-4 bg-black text-primary border-2 border-primary pixel-input text-sm sm:text-base"
            rows="4"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full p-3 sm:p-4 bg-primary text-black font-bold pixel-button text-sm sm:text-base"
          >
            SEND TRANSMISSION
          </motion.button>
        </form>
      </div>
    </div>
  </Section>
);

export default Contact;