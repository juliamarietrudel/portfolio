import Cards from "./Cards";
import Menu from "./Menu";
import "./Content.css";
import { useState } from "react";

export default function Content() {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  function handleSelectedLanguage(language: string) {
    setSelectedLanguage(language);
  }

  return (
    <div className="container-content">
      <Menu
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={handleSelectedLanguage}
      />
      <Cards selectedLanguage={selectedLanguage} />
    </div>
  );
}
