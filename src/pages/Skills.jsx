import React from 'react';
import { ReactFlow, Controls, useNodesState, useEdgesState } from 'reactflow';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import 'reactflow/dist/style.css';

const NODE_STYLES = {
  core: { background: '#f7df1e', color: '#000' },
  frontend: { background: '#61dafb', color: '#000' },
  backend: { background: '#8cc84b', color: '#000' },
  database: { background: '#336791', color: '#fff' },
  deployment: { background: '#ff9900', color: '#000' },
  mobile: { background: '#412571', color: '#fff' },
  service: { background: '#47a248', color: '#fff' }
};

const initialNodes = [
  // Core Languages
  { 
    id: 'javascript', 
    position: { x: 400, y: 20 }, 
    data: { label: 'JavaScript' }, 
    style: NODE_STYLES.core,
    type: 'core'
  },
  { 
    id: 'python', 
    position: { x: 600, y: 20 }, 
    data: { label: 'Python' }, 
    style: NODE_STYLES.core,
    type: 'core'
  },

  // Frontend
  { 
    id: 'html-css-js', 
    position: { x: 100, y: 100 }, 
    data: { label: 'HTML5/CSS/JS Foundation' }, 
    style: NODE_STYLES.frontend,
    type: 'frontend'
  },
  { 
    id: 'react', 
    position: { x: 100, y: 200 }, 
    data: { label: 'React Ecosystem\n(React, React Flow)' }, 
    style: NODE_STYLES.frontend,
    type: 'frontend'
  },

  // Backend
  { 
    id: 'nodejs', 
    position: { x: 400, y: 100 }, 
    data: { label: 'Node.js' }, 
    style: NODE_STYLES.backend,
    type: 'backend'
  },
  { 
    id: 'express', 
    position: { x: 400, y: 200 }, 
    data: { label: 'Express.js' }, 
    style: NODE_STYLES.backend,
    type: 'backend'
  },
  { 
    id: 'django', 
    position: { x: 600, y: 100 }, 
    data: { label: 'Django' }, 
    style: NODE_STYLES.backend,
    type: 'backend'
  },

  // Databases
  { 
    id: 'postgres-neon', 
    position: { x: 400, y: 300 }, 
    data: { label: 'PostgreSQL/NEON' }, 
    style: NODE_STYLES.database,
    type: 'database'
  },
  { 
    id: 'mongodb', 
    position: { x: 600, y: 300 }, 
    data: { label: 'MongoDB' }, 
    style: NODE_STYLES.database,
    type: 'database'
  },

  // Deployment & Hosting
  { 
    id: 'heroku', 
    position: { x: 200, y: 400 }, 
    data: { label: 'Heroku' }, 
    style: NODE_STYLES.deployment,
    type: 'deployment'
  },
  { 
    id: 'aws', 
    position: { x: 400, y: 400 }, 
    data: { label: 'AWS Ecosystem' }, 
    style: NODE_STYLES.deployment,
    type: 'deployment'
  },
  { 
    id: 'kubernetes', 
    position: { x: 600, y: 400 }, 
    data: { label: 'Kubernetes' }, 
    style: NODE_STYLES.deployment,
    type: 'deployment'
  },
  { 
    id: 'docker', 
    position: { x: 800, y: 400 }, 
    data: { label: 'Docker' }, 
    style: NODE_STYLES.deployment,
    type: 'deployment'
  },

  // Mobile
  { 
    id: 'react-native', 
    position: { x: 100, y: 300 }, 
    data: { label: 'React Native' }, 
    style: NODE_STYLES.mobile,
    type: 'mobile'
  },
  { 
    id: 'openai', 
    position: { x: 800, y: 200 }, 
    data: { label: 'OpenAI API' }, 
    style: NODE_STYLES.service,
    type: 'service'
  }
];

const initialEdges = [
  // Core Connections
  { id: 'react-js', source: 'react', target: 'javascript', label: 'Built With' },
  { id: 'django-py', source: 'django', target: 'python', label: 'Built With' },
  { id: 'express-node', source: 'express', target: 'nodejs', label: 'Runs On' },

  // Frontend Flow
  { id: 'react-foundation', source: 'react', target: 'html-css-js', label: 'Uses' },
  
  // Backend Connections
  { id: 'node-db', source: 'nodejs', target: 'postgres-neon', label: 'Connects To' },
  { id: 'django-db', source: 'django', target: 'postgres-neon', label: 'Connects To' },
  { id: 'node-mongo', source: 'nodejs', target: 'mongodb', label: 'Connects To' },

  // Deployment
  { id: 'heroku-docker', source: 'heroku', target: 'docker', label: 'Hosts' },
  { id: 'aws-k8s', source: 'aws', target: 'kubernetes', label: 'Manages' },
  { id: 'aws-docker', source: 'aws', target: 'docker', label: 'Supports' },
  { id: 'k8s-docker', source: 'kubernetes', target: 'docker', label: 'Orchestrates' },

  // Mobile
  { id: 'native-react', source: 'react-native', target: 'react', label: 'Extends' },
  { id: 'native-js', source: 'react-native', target: 'javascript', label: 'Uses' },

  // API
  { id: 'django-openai', source: 'django', target: 'openai', label: 'Integrates' },
  { id: 'node-openai', source: 'nodejs', target: 'openai', label: 'Integrates' },

  // Full-Stack Flow
  { id: 'front-back', source: 'react', target: 'nodejs', label: 'API Calls', style: { strokeDasharray: '5 5' } },
  { id: 'front-back-py', source: 'react', target: 'django', label: 'API Calls', style: { strokeDasharray: '5 5' } },
  { id: 'back-deploy', source: 'nodejs', target: 'heroku', label: 'Deploys To' },
  { id: 'back-deploy-py', source: 'django', target: 'aws', label: 'Deploys To' }
];

const CustomNode = ({ data, selected }) => (
  <motion.div
    className={`p-4 rounded-lg border-3 cursor-grab ${
      selected ? 'border-primary' : 'border-secondary'
    }`}
    style={{
      background: data.style?.background || '#333',
      color: data.style?.color || '#fff',
      borderColor: selected ? '#ff007f' : '#00dfff',
      boxShadow: '4px 4px 0 #00dfff'
    }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="text-center font-retro text-sm">
      {data.label.split('\n').map((line, i) => (
        <div key={i}>{line}</div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
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
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
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
};

export default Skills;