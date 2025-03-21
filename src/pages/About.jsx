import Section from '../components/Section';

// Option 1: If using public assets
const About = () => (
  <Section id="about" className="bg-[url('/assets/pixel-bg.png')] bg-cover">
    <div className="p-8">
      <h1 className="text-4xl mb-4">About Me</h1>
      <p>
        Hi, I'm Cameron Coleman, a full-stack developer and creative technologist inspired by retro aesthetics and modern technology.
      </p>
    </div>
  </Section>
);

// Option 2: If using src/assets (import required)
// import bgImage from '../assets/pixel-bg.png';
// className={`bg-[url(${bgImage})]`}

export default About;