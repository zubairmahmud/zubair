import React from 'react';

const projects = [
  {
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive React portfolio to showcase my skills, projects, and contact information.',
    link: 'https://zubairmahmud.github.io',
  },
  {
    title: 'ZUNUR Fashion Landing Page',
    description: 'A stylish landing page design concept for the ZUNUR fashion brand with animation and dark mode.',
    link: '#',
  },
  {
    title: 'SEO-Optimized Blog Design',
    description: 'A clean, blogspot-based design focused on performance and SEO for content creators.',
    link: 'https://zubayer-mahmud.blogspot.com',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-indigo-600 dark:text-indigo-400">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800"
          >
            <h3 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;// Projects section component code will go here
