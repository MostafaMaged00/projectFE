import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-content">
        <p>&copy; 2025 Bookz. All rights reserved. Mostafa Maged </p>
        <div className="social-media-links">
            <a href="https://github.com/MostafaMaged00/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/mostafa-maged-7a2109318/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
        </div>
    </div>
</footer>
  )
}

export default Footer