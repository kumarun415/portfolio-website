    import "./Footer.css";

    function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };

    return (
        <footer className="footer">
        <div className="footer-container">

            {/* Brand */}
            <div className="footer-brand">
            <h2>
                Arun<span>.dev</span>
            </h2>

            <p>
                B.Tech IT student and aspiring software developer passionate
                about DSA, web development and building useful projects.
            </p>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
            <h3>Quick Links</h3>

            <button onClick={() => document.getElementById("home")?.scrollIntoView()}>
                Home
            </button>

            <button onClick={() => document.getElementById("about")?.scrollIntoView()}>
                About
            </button>

            <button onClick={() => document.getElementById("skills")?.scrollIntoView()}>
                Skills
            </button>

            <button onClick={() => document.getElementById("projects")?.scrollIntoView()}>
                Projects
            </button>

            <button onClick={() => document.getElementById("contact")?.scrollIntoView()}>
                Contact
            </button>
            </div>

            {/* Connect */}
            <div className="footer-connect">
            <h3>Let's Connect</h3>

            <a href="mailto:kumarun415@gmail.com">
                📧 Email
            </a>

            <a
                href="https://github.com/kumarun415"
                target="_blank"
                rel="noreferrer"
            >
                💻 GitHub
            </a>

            <a
                href="https://www.linkedin.com/in/arun-kumar-a8b310382"
                target="_blank"
                rel="noreferrer"
            >
                🔗 LinkedIn
            </a>
            </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">

            <p>
            © 2026 Arun Kumar. All rights reserved.
            </p>

            <p className="footer-tech">
            Built with <span>React</span> + <span>Vite</span>
            </p>

            <button
            className="back-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            >
            ↑
            </button>

        </div>
        </footer>
    );
    }

    export default Footer;