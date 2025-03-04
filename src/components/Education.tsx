import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'Bachelor in Computer Science and Information Technology(CSIT) - Running',
    institution: 'Tribhuvan University , Kathmandu',
    period: '2023-present',
    score: 'Running',
  },
  {
    degree: 'NEB +2 (XII)',
    institution: 'Shree Adarsh Model Secondary School Dang',
    period: '2020-2022',
    score: '3.30/4.00 GPA',
  },
  {
    degree: 'NEB SEE (X)',
    institution: 'Shree Adarsh Model Secondary School Dang',
    period: '2017 - 2019',
    score: '3.78/4.00 GPA',
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Education</SectionTitle>
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu) => (
            <EducationCard key={edu.degree} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}