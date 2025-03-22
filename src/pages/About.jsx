import Section from '../components/Section';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDocker } from 'react-icons/fa';
import { SiDjango, SiPostgresql, SiMongodb } from 'react-icons/si';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const About = () => {
  return (
    <Section id="about" className="bg-[url('/assets/pixel-bg.png')] bg-cover">
      <div className="max-w-6xl mx-auto p-6 sm:p-8 lg:p-12">
        {/* Profile Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="pixel-border bg-black/80 p-8 mb-12"
        >
          <h1 className="text-4xl sm:text-5xl mb-6 pixel-text-glow">Cameron Coleman</h1>
          <p className="text-secondary mb-4">
            Full-Stack Developer | Tech Innovator | Creative Problem Solver
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Professional Summary */}
            <div>
              <p className="mb-6">
                I'm Cameron Coleman, a proactive full-stack developer passionate about creating dynamic 
                digital experiences. I thrive on solving complex challenges with clean, efficient code—from 
                designing engaging front-end interfaces using React to building robust backends with Node.js 
                and Django. When I'm not coding, I'm spending time with my family, skateboarding, or 
                experimenting with innovative ideas that merge the past with the future.
              </p>
            </div>

            {/* Technical Expertise */}
            <motion.div 
              className="pixel-border p-6 bg-black/70"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
            >
              <h2 className="text-2xl mb-4 pixel-text">Core Stack</h2>
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { Icon: FaReact, label: 'React/Next' },
                  { Icon: FaNodeJs, label: 'Node.js' },
                  { Icon: FaPython, label: 'Python/Django' },
                  { Icon: SiPostgresql, label: 'PostgreSQL' },
                  { Icon: FaDocker, label: 'Docker' },
                  { Icon: SiMongodb, label: 'MongoDB' },
                ].map(({ Icon, label }, index) => (
                  <motion.div
                    key={label}
                    className="skill-card"
                    variants={itemVariants}
                  >
                    <Icon className="text-4xl mx-auto text-primary" />
                    <p className="mt-2">{label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Career Timeline */}
        <motion.div 
          className="pixel-border bg-black/80 p-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl mb-8 pixel-text-glow">Career Journey</h2>
          
          {/* Tech Experience */}
          <motion.div className="timeline-item" variants={itemVariants}>
            <div className="timeline-date">2024 - Present</div>
            <div className="timeline-content">
              <h3 className="text-xl pixel-text">Software Engineering Fellow</h3>
              <p className="text-secondary">General Assembly</p>
              <ul className="mt-4 pl-6 list-disc">
                {[
                  'Developed full-stack applications using React, Node.js, and Django',
                  'Integrated AI capabilities using OpenAI API',
                  'Implemented CI/CD pipelines for efficient workflows'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="mb-2"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Leadership Experience */}
          <motion.div className="timeline-item" variants={itemVariants}>
            <div className="timeline-date">2021-2023</div>
            <div className="timeline-content">
              <h3 className="text-xl pixel-text">Restaurant Manager</h3>
              <p className="text-secondary">Austin Marriott Downtown</p>
              <ul className="mt-4 pl-6 list-disc">
                {[
                  'Led team of 47 associates',
                  'Boosted sales revenue by 15%',
                  'Enhanced guest satisfaction by 26%'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="mb-2"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Projects Preview */}
        <motion.div 
          className="mt-12 pixel-border bg-black/80 p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl mb-8 pixel-text-glow">Featured Project</h2>
          <div className="project-card">
            <h3 className="text-xl pixel-text">The Campaign</h3>
            <p className="text-secondary mt-2">AI-Powered RPG Manager</p>
            <div className="tech-stack mt-4">
              {['React', 'Node.js', 'OpenAI API'].map((tech, index) => (
                <motion.span 
                  key={tech}
                  className="tech-badge"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <p className="mt-4">
              Fantasy RPG campaign manager with AI-generated narratives and character tracking
            </p>
          </div>
        </motion.div>

        {/* Personal Touch */}
        <motion.div 
          className="mt-12 pixel-border bg-black/80 p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl mb-6 pixel-text-glow">Beyond Coding</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { emoji: '🛹', label: 'Skateboarding' },
              { emoji: '📚', label: 'Comic Books' },
              { emoji: '👨👩👧', label: 'Family Time' },
              { emoji: '💡', label: 'Innovation' }
            ].map(({ emoji, label }, index) => (
              <motion.div
                key={label}
                className="hobby-card"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-4xl">{emoji}</span>
                <p>{label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;