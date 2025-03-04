import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Timeline } from './ui/Timeline';

const experiences = [
  {
    title: 'MERN stack Developer Intern',
    company: 'Lunar IT solutions pvt ltd',
    period: 'Jan 2025 - Feb 2025',
    description: 'Developing and maintaining web applications using MERN stack. Implemented key features that improved user engagement by 40%.',
  },
  {
    title: 'Frontend Developer',
    company: 'Brainwave Matrix Solutions',
    period: 'Dec 2024 - Feb 2025',
    description: 'Led a team of 4 developers in creating the college event management platform. Mentored junior developers in web technologies.',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Experience</SectionTitle>
        <Timeline items={experiences} />
      </div>
    </section>
  );
}