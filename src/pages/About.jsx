import Section from '../components/Section';

const About = () => (
    <Section id="about" className="bg-[url('/assets/pixel-bg.png')] bg-cover">
      <div className="max-w-6xl mx-auto p-8"> {/* Content container */}
        <h1 className="text-4xl mb-4">About Me</h1>
        <p>
          Hi, I'm Cameron Coleman, a full-stack developer...
        </p>
      </div>
    </Section>
  );

export default About;