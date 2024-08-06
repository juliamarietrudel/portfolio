import { useState } from "react";
import Card from "./Card";
import "./Cards.css";

const images = [
  "images/project-cambio.png",
  "images/project-bouldering.png",
  "images/project-mariane.png",
  "images/project-golf.png",
  "images/project-cambio.png",
  "images/project-mariane.png",
  "images/project-cambio.png",
  "images/project-bouldering.png",
  "images/project-mariane.png",
  "images/project-golf.png",
  "images/project-cambio.png",
  "images/project-mariane.png",
];

export default function Cards() {
  const [activeState, setActiveState] = useState(new Array(3).fill(false));

  // function handleHover(index: number) {
  //   console.log("activeState:", activeState);
  //   const newActiveState = activeState.slice();
  //   console.log("NewActiveState:", newActiveState);
  //   if (newActiveState[index]) {
  //     newActiveState[index] = false;
  //   } else {
  //     newActiveState[index] = true;
  //   }
  //   setActiveState(newActiveState);
  // }

  return (
    <div className="cards">
      {images.map((image, index) => {
        return (
          <Card
            // onHover={() => handleHover(index)}
            active={activeState[index]}
            // change key
            key={index}
            style={{ backgroundImage: `url(${image})` }}
          />
        );
      })}
    </div>
  );
}
