import Section from '../components/Section';
import { ReactFlow, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

const projectNodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { 
      label: 'Project Cameron',
      tech: 'React/Tailwind',
      year: '2024'
    },
    style: { backgroundColor: '#00dfff', width: 200 }
  },
];

const Projects = () => (
  <Section id="projects">
    <div className="max-w-6xl mx-auto p-6 sm:p-8 lg:p-12 w-full">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-8 pixel-text">Project Network</h1>
      <div className="w-full h-[70vh] sm:h-[80vh]">
        <ReactFlow
          nodes={projectNodes}
          className="pixel-border"
          fitView
        >
          <Controls />
        </ReactFlow>
      </div>
    </div>
  </Section>
);

export default Projects;