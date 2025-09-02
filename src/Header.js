export default function Header() {
  return (
    <header className="navbar">
      <h1 className="logo">Esraa’s Portfolio</h1>
      <nav className="nav-links">
        <a href="#projects">Projects</a>
        <a href="#about">About Me</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="social-links">
        <a href="https://github.com/esraa369-cpu" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </header>
  );
}


