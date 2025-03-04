import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';

const projects = [
  {
    title: 'MERN-BookShala', // ✅ Matches the GitHub repo name
    description: 'A comprehensive MERN Book store platform for students',
    image: '/assets/project1.png',
    link: 'https://github.com/Techno-Bishal/MERN-BookShala', // ✅ Correct GitHub link
    tags: ['React', 'Node.js', 'MongoDB', 'ExpressJs'],
  },
  {
    title: 'DevNest', // ✅ Matches the GitHub repo name
    description: 'AI based SaaS landing page with eye-catching designs',
    image: '/assets/project2.png',
    link: 'https://github.com/Techno-Bishal/DevNest', // ✅ Correct GitHub link
    tags: ['TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Resto-website', // ✅ Matches the GitHub repo name
    description: 'Restaurant website that showcases menu items and sticky images with catchy animation',
    image: '/assets/project4.png',
    link: 'https://github.com/Techno-Bishal/Resto-website', // ✅ Correct GitHub link
    tags: ['React', 'Tailwind CSS', 'TypeScript'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Projects</SectionTitle>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
