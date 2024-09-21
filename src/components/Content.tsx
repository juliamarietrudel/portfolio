import Cards from "./Cards";
import Menu from "./Menu";
import "./Content.css";
import { useState } from "react";

export default function Content() {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  function handleSelectedLanguage(language: string) {
    if (language === selectedLanguage) {
      setSelectedLanguage("");
    } else {
      setSelectedLanguage(language);
    }
  }

  return (
    <div className="container-content">
      <Menu
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={handleSelectedLanguage}
      />
      {selectedLanguage ? (
        <Cards selectedLanguage={selectedLanguage} />
      ) : (
        <p className="select-language-message">Select a language</p>
      )}
    </div>
  );
}
