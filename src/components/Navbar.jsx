import {
  Download,
  Sun,
  Moon,
  ChevronDown,
  ChevronRight,
  Eye,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";
import resumesData from "../data/resumesData";

function Navbar() {
  // =====================================================
  // DARK / LIGHT MODE
  // =====================================================

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return true;
  });

  // =====================================================
  // RESUME STATES
  // =====================================================

  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  // Reference for outside click
  const resumeRef = useRef(null);

  // =====================================================
  // NAVIGATION SECTIONS
  // =====================================================

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Education", id: "education" },
    { name: "Certificates", id: "certificates" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const [currentSection, setCurrentSection] = useState("home");

  // =====================================================
  // THEME EFFECT
  // =====================================================

  useEffect(() => {
    document.body.classList.remove(
      "dark-theme",
      "light-theme"
    );

    document.body.classList.add(
      darkMode ? "dark-theme" : "light-theme"
    );

    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  // =====================================================
  // THEME TOGGLE
  // =====================================================

  const toggleTheme = () => {
    setDarkMode((previous) => !previous);
  };

  // =====================================================
  // RESUME CATEGORY TOGGLE
  // =====================================================

  const toggleSection = (index) => {
    setActiveSection((previous) =>
      previous === index ? null : index
    );
  };

  // =====================================================
  // CLOSE RESUME MENU
  // =====================================================

  const closeResumeMenu = () => {
    setResumeOpen(false);
    setActiveSection(null);
  };

  // =====================================================
  // OUTSIDE CLICK + ESC KEY
  // =====================================================

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        resumeRef.current &&
        !resumeRef.current.contains(event.target)
      ) {
        closeResumeMenu();
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeResumeMenu();
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );

      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  // =====================================================
  // ACTIVE SECTION ON SCROLL
  // =====================================================

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + 180;

      let activeId = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(
          item.id
        );

        if (!section) return;

        const sectionTop = section.offsetTop;

        const sectionBottom =
          sectionTop + section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionBottom
        ) {
          activeId = item.id;
        }
      });

      setCurrentSection(activeId);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  // =====================================================
  // NAVIGATION CLICK
  // =====================================================

  const handleNavClick = (id) => {
    setCurrentSection(id);
    closeResumeMenu();
  };

  // =====================================================
  // VIEW RESUME
  // =====================================================

  const handleViewResume = () => {
    closeResumeMenu();
  };

  // =====================================================
  // DOWNLOAD RESUME
  // =====================================================

  const handleDownloadResume = () => {
    closeResumeMenu();
  };

  // =====================================================
  // JSX
  // =====================================================

  return (
    <header className="navbar">

      {/* ================= LOGO ================= */}

      <div className="nav-logo">
        Arun<span>.dev</span>
      </div>

      {/* ================= NAVIGATION ================= */}

      <nav className="nav-links">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={
              currentSection === item.id
                ? "active"
                : ""
            }
            onClick={() =>
              handleNavClick(item.id)
            }
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* ================= ACTIONS ================= */}

      <div className="nav-actions">

        {/* ================= RESUME ================= */}

        <div
          className="resume-wrapper"
          ref={resumeRef}
        >
          <button
            className={`resume-btn ${
              resumeOpen
                ? "resume-btn-open"
                : ""
            }`}
            onClick={() => {
              setResumeOpen(
                (previous) => !previous
              );

              setActiveSection(null);
            }}
            aria-expanded={resumeOpen}
            aria-haspopup="true"
          >
            <Download size={17} />

            <span>Resume</span>

            <ChevronDown
              size={16}
              className={
                resumeOpen
                  ? "rotate-arrow"
                  : ""
              }
            />
          </button>

          {/* ================= RESUME MENU ================= */}

          {resumeOpen && (
            <div className="resume-menu">

              {/* ================= HEADER ================= */}

              <div className="resume-menu-header">

                <div className="resume-menu-title">
                  Choose Resume
                </div>

                <div className="resume-menu-subtitle">
                  Select a profile to continue
                </div>

              </div>

              {/* ================= CATEGORIES ================= */}

              <div className="resume-categories">

                {resumesData.map(
                  (
                    section,
                    sectionIndex
                  ) => {

                    const isActive =
                      activeSection ===
                      sectionIndex;

                    return (
                      <div
                        className={`resume-section ${
                          isActive
                            ? "resume-section-active"
                            : ""
                        }`}
                        key={sectionIndex}
                      >

                        {/* ================= CATEGORY BUTTON ================= */}

                        <button
                          className="resume-section-btn"
                          onClick={() =>
                            toggleSection(
                              sectionIndex
                            )
                          }
                          aria-expanded={
                            isActive
                          }
                        >

                          <span className="resume-section-left">

                            <span className="resume-section-icon">
                              {section.icon ||
                                "📄"}
                            </span>

                            <span className="resume-section-text">

                              <strong>
                                {section.section}
                              </strong>

                              <small>
                                {
                                  section
                                    .resumes
                                    .length
                                }{" "}

                                {section.resumes
                                  .length === 1
                                  ? "resume"
                                  : "resumes"}

                              </small>

                            </span>

                          </span>

                          <ChevronRight
                            size={17}
                            className={
                              isActive
                                ? "section-arrow-open"
                                : ""
                            }
                          />

                        </button>

                        {/* ================= SUBMENU ================= */}

                        {isActive && (
                          <div className="resume-submenu">

                            {section.resumes.map(
                              (
                                resume,
                                resumeIndex
                              ) => (

                                <div
                                  key={
                                    resumeIndex
                                  }
                                  className="resume-option"
                                >

                                  {/* Resume Icon */}

                                  <span className="resume-option-icon">
                                    {resume.icon ||
                                      "📄"}
                                  </span>

                                  {/* Resume Information */}

                                  <span className="resume-option-content">

                                    <strong>
                                      {
                                        resume.title
                                      }
                                    </strong>

                                    <small>
                                      {
                                        resume.description
                                      }
                                    </small>

                                  </span>

                                  {/* ================= ACTIONS ================= */}

                                  <span className="resume-option-actions">

                                    {/* VIEW */}

                                    <a
                                      href={
                                        resume.file
                                      }
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="resume-action-btn"
                                      title="View Resume"
                                      aria-label={`View ${resume.title}`}
                                      onClick={
                                        handleViewResume
                                      }
                                    >
                                      <Eye
                                        size={14}
                                      />
                                    </a>

                                    {/* DOWNLOAD */}

                                    <a
                                      href={
                                        resume.file
                                      }
                                      download
                                      className="resume-action-btn"
                                      title="Download Resume"
                                      aria-label={`Download ${resume.title}`}
                                      onClick={
                                        handleDownloadResume
                                      }
                                    >
                                      <Download
                                        size={14}
                                      />
                                    </a>

                                  </span>

                                </div>

                              )
                            )}

                          </div>
                        )}

                      </div>
                    );
                  }
                )}

              </div>

              {/* ================= FOOTER ================= */}

              <div className="resume-menu-footer">

                <span>📁</span>

                <span>
                  More resume versions can
                  be added anytime
                </span>

              </div>

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