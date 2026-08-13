    import { Download, Sun, Moon, ChevronDown } from "lucide-react";
    import { useEffect, useState } from "react";

    function Navbar() {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
        return savedTheme === "dark";
        }

        return true;
    });

    const [resumeOpen, setResumeOpen] = useState(false);

    useEffect(() => {
        document.body.classList.remove("dark-theme", "light-theme");

        document.body.classList.add(
        darkMode ? "dark-theme" : "light-theme"
        );

        localStorage.setItem(
        "theme",
        darkMode ? "dark" : "light"
        );
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode((previous) => !previous);
    };

    const resumes = [
        {
        title: "General Resume",
        file: "/resumes/Arun_Kumar_Resume.pdf",
        icon: "📄",
        },

        // Future resumes yahan add karna:
        // {
        //   title: "Full Stack Developer",
        //   file: "/resumes/Arun_Kumar_Full_Stack.pdf",
        //   icon: "💻",
        // },

        // {
        //   title: "Java Full Stack Developer",
        //   file: "/resumes/Arun_Kumar_Java_Full_Stack.pdf",
        //   icon: "☕",
        // },
    ];

    return (
        <header className="navbar">

        {/* Logo */}
        <div className="nav-logo">
            Arun<span>.dev</span>
        </div>


        {/* Navigation */}
        <nav className="nav-links">

            <a href="#home" className="active">
            Home
            </a>

            <a href="#about">
            About
            </a>

            <a href="#skills">
            Skills
            </a>

            <a href="#education">
            Education
            </a>

            <a href="#certificates">
            Certificates
            </a>

            <a href="#projects">
            Projects
            </a>

            <a href="#contact">
            Contact
            </a>

        </nav>


        {/* Actions */}
        <div className="nav-actions">

            {/* ================= RESUME DROPDOWN ================= */}

            <div className="resume-wrapper">

            <button
                className="resume-btn"
                onClick={() => setResumeOpen(!resumeOpen)}
            >
                <Download size={17} />

                Resume

                <ChevronDown
                size={15}
                className={resumeOpen ? "rotate-arrow" : ""}
                />
            </button>


            {/* Resume Menu */}

            {resumeOpen && (
                <div className="resume-menu">

                <div className="resume-menu-title">
                    Choose Resume
                </div>

                {resumes.map((resume, index) => (
                    <a
                    key={index}
                    href={resume.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-option"
                    onClick={() => setResumeOpen(false)}
                    >
                    <span className="resume-option-icon">
                        {resume.icon}
                    </span>

                    <span>
                        {resume.title}
                    </span>
                    </a>
                ))}

                </div>
            )}

            </div>


            {/* ================= THEME ================= */}

            <button
            className="theme-btn"
            onClick={toggleTheme}
            aria-label={
                darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            title={
                darkMode
                ? "Switch to Light Mode"
                : "Switch to Dark Mode"
            }
            >
            {darkMode ? (
                <Sun size={18} />
            ) : (
                <Moon size={18} />
            )}
            </button>

        </div>

        </header>
    );
    }

    export default Navbar;