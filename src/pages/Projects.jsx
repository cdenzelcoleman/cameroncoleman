import Section from '../components/Section';
import { ReactFlow, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

const projectNodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { 
      label: 'Portfolio Site',
      tech: 'React/Tailwind',
      year: '2024'
    },
    style: { backgroundColor: '#00dfff', width: 200 }
  },
];

const Projects = () => (
  <Section id="projects">
    <div className="p-8 w-full h-[80vh]">
      <h1 className="text-4xl mb-4 pixel-text">Project Network</h1>
      <ReactFlow
        nodes={projectNodes}
        className="pixel-border"
        fitView
      >
        <Controls />
      </ReactFlow>
    </div>
  </Section>
);

export default Projects;