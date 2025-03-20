import React from 'react';
import Section from '../components/Section';

const Contact = () => (
    <Section id="contact">
        <div className="p-8">
        <h1 className="text-4xl mb-4">Contact</h1>
        <p>
            Let's get in touch! You can reach me at
            <a href="mailto:cameron
            @cameroncoleman.dev" className="hover:text-primary">Blah Blah Blah</a>
        </p>
        </div>
    </Section>
);

export default Contact;