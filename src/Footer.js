export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Esraa | All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/esraa369-cpu" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:your-email@example.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </footer>
  );
}

