import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
        Contact Me
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl">
        Interested in working together or have any questions? Feel free to reach out via WhatsApp or send a direct message using the form below.
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/8801888655432?text=Hi%20Zubair"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition-all"
        >
          Message on WhatsApp
        </a>

        {/* Contact Form */}
        <form
          action="https://formsubmit.co/me.zubairmahmud@gmail.com"
          method="POST"
          className="flex flex-col gap-4 w-full md:w-1/2"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-transparent"
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;// Contact section component code will go here
