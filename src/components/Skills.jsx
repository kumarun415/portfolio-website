    const Skills = () => {
    const skillCategories = [
        {
        icon: "💻",
        title: "Programming",
        description: "Languages I use for problem solving.",
        skills: [
            { name: "Java", level: "Comfortable", dots: 4 },
            { name: "Python", level: "Learning", dots: 3 },
            { name: "JavaScript", level: "Learning", dots: 3 },
            { name: "C", level: "Familiar", dots: 2 },
        ],
        },

        {
        icon: "🌐",
        title: "Web Development",
        description: "Building modern web experiences.",
        skills: [
            { name: "HTML", level: "Comfortable", dots: 4 },
            { name: "CSS", level: "Familiar", dots: 3 },
            { name: "JavaScript", level: "Learning", dots: 3 },
            { name: "React", level: "Learning", dots: 2 },
        ],
        },

        {
        icon: "🗄️",
        title: "Database",
        description: "Working with structured data.",
        skills: [
            { name: "MySQL", level: "Familiar", dots: 3 },
            { name: "SQL", level: "Learning", dots: 3 },
            { name: "MongoDB", level: "Learning", dots: 2 },
        ],
        },

        {
        icon: "🧠",
        title: "DSA & Core CS",
        description: "Strengthening my computer science fundamentals.",
        skills: [
            { name: "Data Structures", level: "Learning", dots: 3 },
            { name: "Algorithms", level: "Learning", dots: 3 },
            { name: "OOP", level: "Comfortable", dots: 4 },
            { name: "DBMS", level: "Familiar", dots: 3 },
        ],
        },

        {
        icon: "🛠️",
        title: "Developer Tools",
        description: "Tools I use during development.",
        skills: [
            { name: "Git", level: "Learning", dots: 3 },
            { name: "GitHub", level: "Comfortable", dots: 4 },
            { name: "VS Code", level: "Comfortable", dots: 4 },
            { name: "Postman", level: "Learning", dots: 2 },
        ],
        },

        {
        icon: "🚀",
        title: "Currently Exploring",
        description: "Technologies I'm curious about.",
        skills: [
            { name: "Generative AI", level: "Exploring", dots: 2 },
            { name: "AI Tools", level: "Exploring", dots: 2 },
            { name: "Node.js", level: "Learning", dots: 2 },
            { name: "Cloud", level: "Exploring", dots: 1 },
        ],
        },
    ];

    return (
        <section id="skills" className="skills-section">

        <div className="section-heading">
            <span>02 / SKILLS</span>

            <h2>
            What I <em>Work With</em>
            </h2>

            <p>
            Technologies I'm learning, building with, and exploring.
            </p>
        </div>

        <div className="skills-grid">

            {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>

                <div className="skill-category-header">

                <div className="skill-category-icon">
                    {category.icon}
                </div>

                <div>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                </div>

                </div>

                <div className="skill-list">

                {category.skills.map((skill, skillIndex) => (
                    <div className="skill-item" key={skillIndex}>

                    <div className="skill-info">

                        <span>{skill.name}</span>

                        <small className={skill.level
                        .toLowerCase()
                        .replace(" ", "-")}
                        >
                        {skill.level}
                        </small>

                    </div>

                    <div className="skill-dots">

                        {[1, 2, 3, 4, 5].map((dot) => (
                        <span
                            key={dot}
                            className={dot <= skill.dots ? "active" : ""}
                        ></span>
                        ))}

                    </div>

                    </div>
                ))}

                </div>

            </div>
            ))}

        </div>

        </section>
    );
    };

    export default Skills;