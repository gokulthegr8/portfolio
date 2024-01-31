"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    // description: "Project 1 Description",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Angular/React"],
    gitUrl: "https://github.com/gokulthegr8/portfolio",
    previewUrl: "https://gokul-portfolio-tau.vercel.app/",
  },
  {
    id: 2,
    title: "Covid-19 Tracker Application",
    // description: "Project 2 Description",
    image: "/images/projects/covid19tracker.png",
    tag: ["All", "Angular/React"],
    gitUrl: "https://github.com/gokulthegr8/Gokul-CovidTracker-React",
    previewUrl: "https://goku-covid19tracker.web.app/",
  },
  {
    id: 3,
    title: "Blood Bank Application",
    // description: "Project 3 Description",
    image: "/images/projects/bloodbankapp.png",
    tag: ["All", "Angular/React"],
    gitUrl: "https://github.com/gokulthegr8/BloodBank-Application-Angular",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "GameMaker Project - Puzzle Game",
    // description: "Project 4 Description",
    image: "/images/projects/PuzzleGame.png",
    tag: ["All", "Game"],
    gitUrl: "https://github.com/gokulthegr8/GameMakerProject2",
    previewUrl:
      "https://drive.google.com/file/d/10EgRO2DbUXxlDJl1Blxa62wsKWrKJUQc/view",
  },
  {
    id: 5,
    title: "GameMaker Project - Action Game",
    // description: "Project 5 Description",
    image: "/images/projects/ActionGame.png",
    tag: ["All", "Game"],
    gitUrl: "https://github.com/gokulthegr8/GameMakerProject1",
    previewUrl: "https://youtu.be/ddKgUEweTzY?si=1Ij_yEFYFwVQ0nEE",
  },
  {
    id: 6,
    title: "Sorting Algorithms",
    // description: "Project 6 Description",
    image: "/images/projects/SortingAlgos.png",
    tag: ["All"],
    gitUrl: "https://github.com/gokulthegr8/Sorting-Algorithms",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Android - Task Application",
    // description: "Project 7 Description",
    image: "/images/projects/AndroidTaskApp.png",
    tag: ["All", "Android"],
    gitUrl: "https://github.com/gokulthegr8/Task-Android-Application",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Android - Contacts Application",
    // description: "Project 8 Description",
    image: "/images/projects/AndroidContactsApp.png",
    tag: ["All", "Android"],
    gitUrl: "https://github.com/gokulthegr8/Contacts-Android-Application",
    previewUrl: "/",
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Angular/React"
          isSelected={tag === "Angular/React"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Game"
          isSelected={tag === "Game"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Android"
          isSelected={tag === "Android"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial "}
            transition={{ duration: 0.5, delay: index * 0.5 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
