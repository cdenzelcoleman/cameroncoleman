import { motion } from 'framer-motion';
import Section from '../components/Section';

const Contact = () => (
  <Section id="contact">
    <div className="p-8 max-w-md mx-auto">
      <motion.h1 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="text-4xl mb-4 pixel-text"
      >
        Contact Terminal
      </motion.h1>
      <form className="space-y-4 pixel-form">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 bg-black text-primary border-2 border-primary pixel-input"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 bg-black text-primary border-2 border-primary pixel-input"
        />
        <textarea
          placeholder="Message"
          className="w-full p-2 bg-black text-primary border-2 border-primary pixel-input"
          rows="4"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full p-2 bg-primary text-black font-bold pixel-button"
        >
          SEND TRANSMISSION
        </motion.button>
      </form>
    </div>
  </Section>
);

export default Contact;