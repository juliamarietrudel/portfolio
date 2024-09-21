import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <h1>
          JuliaMarie
          <br />
          Trudel
        </h1>
        <div className="navbar-info-container">
          <div className="navbar-contact-container">
            <p id="email">juliamarietrudel96@gmail.com</p>
            <p>+1 438 528 1629</p>
          </div>
          <div className="navbar-links-container">
            <a
              href="https://www.linkedin.com/in/juliamarietrudel/"
              target="_blank"
            >
              LinkedIn
              <br />
            </a>
            <a href="https://github.com/juliamarietrudel" target="_blank">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
