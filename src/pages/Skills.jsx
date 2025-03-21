import 'reactflow/dist/base.css';
import Section from '../components/Section';
import { ReactFlow, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import { motion } from 'framer-motion';

const nodes = [
  { id: 'js', position: { x: 0, y: 0 }, data: { label: 'JavaScript' }, style: { backgroundColor: '#ff007f' } },
  { id: 'react', position: { x: 150, y: 100 }, data: { label: 'React' }, style: { backgroundColor: '#00dfff' } },
  { id: 'node', position: { x: -150, y: 100 }, data: { label: 'Node.js' }, style: { backgroundColor: '#ff007f' } },
];

const edges = [
  { id: 'js-react', source: 'js', target: 'react' },
  { id: 'js-node', source: 'js', target: 'node' },
];

const Skills = () => (
  <Section id="skills">
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8 w-full h-[80vh]"
    >
      <h1 className="text-4xl mb-4 pixel-text">Skill Map</h1>
      <ReactFlow 
        nodes={nodes}
        edges={edges}
        fitView
        className="pixel-border"
      >
        <Controls />
      </ReactFlow>
    </motion.div>
  </Section>
);

export default Skills;