// src/pages/Projects.jsx
import Section from '../components/Section';
import { ReactFlow, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import { useCallback } from 'react';

const projectNodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { 
      label: 'The Campaign', 
      tech: 'React/Node.js/OpenAI',
      year: '2024',
      image: 'https://placehold.co/600x400/000000/00dfff?text=AI+RPG',
      link: '#'
    },
    style: { 
      backgroundColor: '#000',
      border: '3px solid #00dfff',
      width: 300,
      overflow: 'hidden'
    }
  },
  {
    id: '2',
    position: { x: 400, y: 150 },
    data: { 
      label: 'Code Arena', 
      tech: 'React/Tailwind/GSAP',
      year: '2024',
      image: 'https://placehold.co/600x400/000000/ff007f?text=Code+Battle',
      link: '#'
    },
    style: { 
      backgroundColor: '#000',
      border: '3px solid #ff007f',
      width: 300
    }
  },
  {
    id: '3',
    position: { x: -400, y: 150 },
    data: { 
      label: 'Pixel Portfolio', 
      tech: 'React/Three.js',
      year: '2024',
      image: 'https://placehold.co/600x400/000000/00ff00?text=3D+Portfolio',
      link: '#'
    },
    style: { 
      backgroundColor: '#000',
      border: '3px solid #00ff00',
      width: 300
    }
  },
  {
    id: '4',
    position: { x: 0, y: 400 },
    data: { 
      label: 'Byte Market', 
      tech: 'Next.js/Stripe',
      year: '2024',
      image: 'https://placehold.co/600x400/000000/ffd700?text=E-Commerce',
      link: '#'
    },
    style: { 
      backgroundColor: '#000',
      border: '3px solid #ffd700',
      width: 300
    }
  },
  {
    id: '5',
    position: { x: -400, y: 600 },
    data: { 
      label: 'Neon Chat', 
      tech: 'Socket.io/Express',
      year: '2024',
      image: 'https://placehold.co/600x400/000000/00dfff?text=Chat+App',
      link: '#'
    },
    style: { 
      backgroundColor: '#000',
      border: '3px solid #00dfff',
      width: 300
    }
  },
  {
    id: '6',
    position: { x: 400, y: 600 },
    data: { 
      label: 'Pixel Puzzler', 
      tech: 'Phaser.js',
      year: '2024',
      image: 'https://placehold.co/600x400/000000/ff007f?text=Browser+Game',
      link: '#'
    },
    style: { 
      backgroundColor: '#000',
      border: '3px solid #ff007f',
      width: 300
    }
  },
];

const projectEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e1-4', source: '1', target: '4' },
  { id: 'e2-5', source: '2', target: '5' },
  { id: 'e3-6', source: '3', target: '6' },
];

// Custom Node Component
const CustomNode = ({ data }) => {
  const handleClick = useCallback(() => {
    window.open(data.link, '_blank');
  }, [data.link]);

  return (
    <div 
      className="pixel-border cursor-pointer hover:scale-105 transition-transform"
      onClick={handleClick}
    >
      <div className="relative">
        <img 
          src={data.image} 
          alt={data.label} 
          className="w-full h-48 object-cover pixel-art-filter"
        />
        <div className="p-4 bg-black/90">
          <h3 className="text-primary text-xl mb-2">{data.label}</h3>
          <div className="flex justify-between text-secondary text-sm">
            <span>{data.tech}</span>
            <span>{data.year}</span>
          </div>
        </div>
        <div className="absolute top-2 right-2 bg-primary px-2 py-1 text-black text-sm">
          Click to View
        </div>
      </div>
    </div>
  );
};

const nodeTypes = {
  projectNode: CustomNode,
};

const Projects = () => (
  <Section id="projects">
    <div className="max-w-6xl mx-auto p-6 sm:p-8 lg:p-12 w-full">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-8 pixel-text">Project Network</h1>
      <div className="w-full h-[70vh] sm:h-[80vh]">
        <ReactFlow
          nodes={projectNodes.map(node => ({
            ...node,
            type: 'projectNode',
          }))}
          edges={projectEdges}
          nodeTypes={nodeTypes}
          className="pixel-border bg-black/50"
          fitView
        >
          <Controls 
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              border: '2px solid #ff007f',
              borderRadius: '4px'
            }}
          />
        </ReactFlow>
      </div>
    </div>
  </Section>
);

export default Projects;