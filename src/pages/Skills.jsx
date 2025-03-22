import Section from '../components/Section';
import { ReactFlow, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import { motion } from 'framer-motion';

const nodes = [
  // Core Technologies
  { 
    id: 'js', 
    position: { x: 0, y: 0 }, 
    data: { label: 'JavaScript' }, 
    style: { backgroundColor: '#f7df1e', color: '#000' }
  },
  { 
    id: 'python', 
    position: { x: 0, y: 100 }, 
    data: { label: 'Python' }, 
    style: { backgroundColor: '#3776ab', color: '#fff' }
  },

  // Frontend
  { 
    id: 'react', 
    position: { x: -300, y: 200 }, 
    data: { label: 'React Ecosystem' },
    style: { backgroundColor: '#61dafb', color: '#000' }
  },
  { 
    id: 'html', 
    position: { x: -400, y: 300 }, 
    data: { label: 'HTML5' }, 
    style: { backgroundColor: '#e34f26' }
  },
  { 
    id: 'css', 
    position: { x: -200, y: 300 }, 
    data: { label: 'CSS' }, 
    style: { backgroundColor: '#1572b6' }
  },

  // Backend
  { 
    id: 'node', 
    position: { x: 300, y: 200 }, 
    data: { label: 'Node.js' }, 
    style: { backgroundColor: '#8cc84b' }
  },
  { 
    id: 'django', 
    position: { x: 400, y: 300 }, 
    data: { label: 'Django' }, 
    style: { backgroundColor: '#092e20', color: '#fff' }
  },
  { 
    id: 'express', 
    position: { x: 200, y: 300 }, 
    data: { label: 'Express.js' }, 
    style: { backgroundColor: '#353535', color: '#fff' }
  },

  // Databases
  { 
    id: 'postgres', 
    position: { x: -300, y: 400 }, 
    data: { label: 'PostgreSQL/NEON' }, 
    style: { backgroundColor: '#336791' }
  },
  { 
    id: 'mongo', 
    position: { x: -100, y: 400 }, 
    data: { label: 'MongoDB' }, 
    style: { backgroundColor: '#47a248' }
  },

  // DevOps
  { 
    id: 'docker', 
    position: { x: 100, y: 400 }, 
    data: { label: 'Docker' }, 
    style: { backgroundColor: '#2496ed' }
  },
  { 
    id: 'kubernetes', 
    position: { x: 300, y: 400 }, 
    data: { label: 'Kubernetes' }, 
    style: { backgroundColor: '#326ce5' }
  },
  { 
    id: 'aws', 
    position: { x: 500, y: 400 }, 
    data: { label: 'AWS' }, 
    style: { backgroundColor: '#ff9900' }
  },

  // Mobile & AI
  { 
    id: 'react-native', 
    position: { x: -500, y: 100 }, 
    data: { label: 'React Native' }, 
    style: { backgroundColor: '#61dafb' }
  },
  { 
    id: 'openai', 
    position: { x: 500, y: 100 }, 
    data: { label: 'OpenAI API' }, 
    style: { backgroundColor: '#412571' }
  }
];

const edges = [
  // Core connections
  { id: 'js-react', source: 'js', target: 'react' },
  { id: 'js-node', source: 'js', target: 'node' },
  { id: 'py-django', source: 'python', target: 'django' },

  // Frontend flow
  { id: 'react-html', source: 'react', target: 'html' },
  { id: 'react-css', source: 'react', target: 'css' },
  { id: 'react-native', source: 'react', target: 'react-native' },

  // Backend flow
  { id: 'node-express', source: 'node', target: 'express' },
  { id: 'node-postgres', source: 'node', target: 'postgres' },
  { id: 'node-mongo', source: 'node', target: 'mongo' },

  // DevOps connections
  { id: 'node-docker', source: 'node', target: 'docker' },
  { id: 'docker-k8s', source: 'docker', target: 'kubernetes' },
  { id: 'k8s-aws', source: 'kubernetes', target: 'aws' },

  // AI integration
  { id: 'node-openai', source: 'node', target: 'openai' },
  { id: 'py-openai', source: 'python', target: 'openai' }
];

const Skills = () => (
  <Section id="skills">
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8 w-full h-[80vh]"
    >
      <h1 className="text-4xl mb-4 pixel-text">Tech Stack Architecture</h1>
      <ReactFlow 
        nodes={nodes}
        edges={edges}
        fitView
        className="pixel-border rounded-lg"
        nodeDragThreshold={0}
      >
        <Controls 
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            border: '2px solid #ff007f',
            borderRadius: '4px'
          }}
        />
      </ReactFlow>
    </motion.div>
  </Section>
);

export default Skills;