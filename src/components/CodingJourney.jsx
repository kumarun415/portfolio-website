const CodingJourney = () => {
  const platforms = [
    {
      icon: "🧩",
      name: "LeetCode",
      description: "DSA problems & coding practice",
      stat: "300+ Problems Solved",
      className: "leetcode",
      link: "https://leetcode.com/u/arun-k____2311/",
    },
    {
      icon: "🟢",
      name: "GeeksforGeeks",
      description: "Learning concepts & solving problems",
      stat: "Practice & Learn",
      className: "gfg",
      link: "https://www.geeksforgeeks.org/profile/kumarun415",
    },
    {
      icon: "💻",
      name: "GitHub",
      description: "Projects & development journey",
      stat: "Projects & Code",
      className: "github",
      link: "https://github.com/kumarun415",
    },
    {
      icon: "💼",
      name: "LinkedIn",
      description: "Professional profile & networking",
      stat: "Connect With Me",
      className: "linkedin",
      link: "https://www.linkedin.com/in/arun-kumar-a8b310382",
    },
  ];

  return (
    <section id="coding" className="coding-section">

      <div className="section-heading">
        <span>03 / CODING JOURNEY</span>

        <h2>
          Learning Through <em>Practice</em>
        </h2>

        <p>
          Building consistency by solving problems, creating projects,
          and continuously learning.
        </p>
      </div>

      <div className="coding-main-card">

        <div className="coding-stat">

          <div className="coding-number">
            300+
          </div>

          <div className="coding-label">
            Problems Solved
          </div>

          <p>
            Consistently practicing Data Structures
            and Algorithms on coding platforms.
          </p>

        </div>

        <div className="coding-content">

          <div className="coding-title">
            <span className="coding-dot"></span>

            <h3>
              My Coding Journey
            </h3>
          </div>

          <p>
            I believe that problem solving improves with
            consistent practice. I use coding platforms to
            strengthen my Data Structures, Algorithms,
            programming fundamentals, and logical thinking.
          </p>

          <div className="coding-platforms">

            {platforms.map((platform, index) => (
              <a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`platform-card ${platform.className}`}
                key={index}
              >

                <div className="platform-icon">
                  {platform.icon}
                </div>

                <div className="platform-info">

                  <h4>
                    {platform.name}
                  </h4>

                  <p>
                    {platform.description}
                  </p>

                  <span>
                    {platform.stat}
                  </span>

                </div>

                <div className="platform-arrow">
                  ↗
                </div>

              </a>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default CodingJourney;