import { useState } from "react";
import Card from "./Card";
import "./Cards.css";

const projects = [
  { image: "images/project-cambio.png", language: "React" },
  { image: "images/project-bouldering.png", language: "Ruby on Rails" },
  { image: "images/project-mariane.png", language: "Ruby on Rails" },
  { image: "images/project-golf.png", language: "Ruby on Rals" },
  { image: "images/project-cambio.png", language: "React" },
  { image: "images/project-cambio.png", language: "React" },
  { image: "images/project-bouldering.png", language: "Ruby on Rails" },
  { image: "images/project-mariane.png", language: "Ruby on Rails" },
  { image: "images/project-golf.png", language: "Ruby on Rals" },
  { image: "images/project-cambio.png", language: "React" },
];

export default function Cards({ selectedLanguage }) {
  function filterProject() {
    projects.filter((project) => {
      project.language == selectedLanguage;
    });
  }

  const filteredProjects = selectedLanguage ? filterProject : projects;

  return (
    <div className="cards">
      {projects.map((project) => {
        <Card style={{ backgroundImage = project.image }} />;
      })}
    </div>
  );
}
