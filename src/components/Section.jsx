import React from 'react';

const Section = ({ id, children, className = '' }) => {
  return (
    <section 
      id={id} 
      className={`section ${className} w-full`}
      style={{ minHeight: '100vh' }}
    >
      {children}
    </section>
  );
};

export default Section;