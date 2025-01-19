import React from "react";
import ScrollTransition from "./ScrollTransition";

const Project = () => {
  const projects = [
    {
      title: "Chatty",
      description:
        "Chatty is a real-time chat application built using React and WebSockets, designed to provide seamless communication with instant message delivery, supporting both private and group chats while demonstrating my ability to create interactive, user-friendly web applications",
      tags: [
        "MongoDB",
        "Express Js",
        "React Js",
        "Node Js",
        "Daisy UI",
        "Tailwind CSS",
        "Socket.io",
      ],
      image: "/images/chatty.png",
      gitLink: "https://github.com/ashwanthkumar10/Real-Time-Chat-App",
      projectLink: "/chatty", // Replace with the actual project page route
    },
    {
      title: "Product Store Application",
      description:
        "Product Store is a web application developed with React and a backend API to efficiently store, manage, and display products, showcasing my skills in building scalable solutions for product inventory management with a focus on user-friendly design and data handling.",
      tags: ["MongoDB", "Express Js", "React Js", "Node Js", "Tailwind CSS"],
      image: "/images/Product store.png",
      gitLink: "https://github.com/ashwanthkumar10/Product-Store-App",
      projectLink: "/product-store", // Replace with the actual project page route
    },
    {
      title: "Movies WatchList Application",
      description:
        "This Movie Watchlist application allows users to easily add, edit, and delete movies from their personalized watchlist, offering a seamless experience for managing movie preferences with a simple and intuitive interface.",
      tags: ["React.js", "RESTful API", "Tailwind CSS"],
      image: "/images/imdb.png",
      gitLink: "https://github.com/ashwanthkumar10/movies-watchlist-app",
      projectLink: "/movies-watchlist", // Replace with the actual project page route
    },
    {
      title: "To-Do List Application",
      description:
        "To-Do List application, built with React, allows users to easily add, view, and delete tasks. The app features a simple and intuitive interface, where users can manage their tasks dynamically using React's state management.",
      tags: ["React.js", "Tailwind CSS"],
      image: "/images/Todo.png",
      gitLink: "https://github.com/ashwanthkumar10/ToDoListReact",
      projectLink: "https://to-do-list-react-wfob.vercel.app/", // Replace with the actual project page route
    },
  ];

  return (
    <ScrollTransition id="projects">
      <div className="bg-black min-h-screen py-8 px-6 md:px-20">
        <div className="max-w-[1000px] mx-auto">
          <h1 className="text-3xl font-bold text-white mb-6">My Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-50 object-cover p-1"
                />
                <div className="p-6">
                  <h2 className="text-white text-xl font-semibold">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 text-sm mt-2">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-sm bg-gray-700 text-white px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 text-blue-400 hover:underline"
                  >
                    View on GitHub
                  </a>
                  <a
                    href={project.projectLink}
                    className="block mt-2 text-green-400 hover:underline"
                  >
                    View Project Page
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollTransition>
  );
};

export default Project;
