import { useState } from "react";
import Card from "./Card";
import "./Cards.css";

const projects = [
  {
    image: "images/project-cambio.png",
    languages: ["HTML", "CSS"],
    key: "1",
    url: "",
  },
  {
    image: "images/project-bouldering.png",
    languages: ["Ruby on Rails", "CSS", "Vanilla JS"],
    key: "2",
    url: "https://github.com/juliamarietrudel/boulder-buddy",
  },
  {
    image: "images/project-mariane.png",
    languages: ["Ruby on Rails", "CSS"],
    key: "3",
    url: "https://marianegourdeau.com/",
  },
  {
    image: "images/project-calculator.png",
    languages: ["Vanilla JS", "HTML", "CSS"],
    key: "4",
    url: "",
  },
  {
    image: "images/project-golf.png",
    languages: ["Ruby on Rails", "SQL"],
    key: "5",
    url: "",
  },
];

interface Props {
  selectedLanguage: string;
}
export default function Cards({ selectedLanguage }: Props) {
  const filteredProjects =
    selectedLanguage === ""
      ? []
      : projects.filter((project) =>
          project.languages.includes(selectedLanguage)
        );
  return (
    <div className="cards">
      {filteredProjects.map((project) => {
        return (
          <a href={project.url} target="_blank">
            <Card
              key={project.key}
              style={{ backgroundImage: `url(${project.image})` }}
            />
          </a>
        );
      })}
    </div>
  );
}
