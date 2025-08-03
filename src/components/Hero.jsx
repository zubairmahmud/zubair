import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start gap-6 pt-28">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Zubair Mahmud</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
        A passionate & detail-oriented software developer crafting modern, efficient, and scalable applications.
        I blend technology with creativity to deliver impactful digital experiences across web and mobile platforms.
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-200"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-200"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;// Hero section component code will go here
