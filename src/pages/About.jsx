import React from 'react'
import Section from '../components/Section'

const About = () => {
  return (
    <Section id="about" className="bg-[url('/src/assets/pixel-bg.png')] bg-cover">
      <div className="p-8">
        <h1 className="text-4xl mb-4">About Me</h1>
        <p>
          Hi, I'm Cameron Coleman, a full-stack developer and creative technologist inspired by retro aesthetics and modern technology.
        </p>
      </div>
    </Section>
  )
}

export default About
