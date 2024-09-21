import "./Menu.css";

interface Props {
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
}

export default function Menu({ selectedLanguage, setSelectedLanguage }: Props) {
  const languages = [
    "React",
    "Ruby on Rails",
    "Vanilla JS",
    "CSS",
    "HTML",
    "SQL",
  ];

  return (
    <>
      <div className="container-menu">
        <ul className="inline-list">
          {languages.map((language) => (
            <li
              key={language}
              onClick={() => setSelectedLanguage(language)}
              className={selectedLanguage === language ? "active" : ""}
            >
              {language}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
