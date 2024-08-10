import "./Menu.css";

export default function Menu({ selectedLanguage }) {
  const languages = ["React", "Ruby on Rails", "Vanilla JS"];
  return (
    <>
      <div className="container-menu">
        <ul className="inline-list">
          {languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
