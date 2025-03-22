import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useUI } from '../context/UIContext';

gsap.registerPlugin(ScrollTrigger);

const backgrounds = {
  about: '/assets/bg-level1.png',
  projects: '/assets/bg-level2.png',
  skills: '/assets/bg-level3.png',
  contact: '/assets/bg-level4.png',
  bonus: '/assets/bg-level5.png'
};

export default function BackgroundManager() {
  const { activeSection } = useUI();
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.to(bgRef.current, {
      backgroundImage: `url(${backgrounds[activeSection]})`,
      duration: 1.5,
      ease: 'power2.inOut'
    });

    ScrollTrigger.create({
      trigger: ".section",
      start: "top center",
      end: "bottom center",
      onEnter: self => {
        const sectionId = self.trigger.id;
        gsap.to(bgRef.current, {
          opacity: 0.7,
          duration: 1,
          ease: 'power2.inOut'
        });
      },
      onLeaveBack: self => {
        gsap.to(bgRef.current, {
          opacity: 1,
          duration: 1,
          ease: 'power2.inOut'
        });
      }
    });
  }, [activeSection]);

  return (
    <div 
      ref={bgRef}
      className="fixed top-0 left-0 w-screen h-full bg-cover bg-center z-0 pointer-events-none"
      style={{
        backgroundImage: `url(${backgrounds.about})`,
        opacity: 1
      }}
    />
  );
}