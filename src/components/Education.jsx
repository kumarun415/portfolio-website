    const Education = () => {
    return (
        <section className="education-section" id="education">

        {/* Section Heading */}
        <div className="section-heading">
            <span>04 / EDUCATION</span>

            <h2>
            My <em>Learning Journey</em>
            </h2>

            <p>
            Education, practice, and continuous learning that shape my
            development journey.
            </p>
        </div>

        {/* Education Timeline */}
        <div className="education-timeline">

            {/* B.Tech */}
            <div className="education-item">

            <div className="education-icon">
                🎓
            </div>

            <div className="education-card">

                <div className="education-top">
                <span className="education-date">
                    2023 – Present
                </span>

                <span className="education-badge">
                    UNDERGRADUATE
                </span>
                </div>

                <h3>
                B.Tech in Information Technology
                </h3>

                <h4>
                Bachelor of Technology
                </h4>

                <p>
                Currently pursuing B.Tech in Information Technology with
                a strong interest in software development, Data Structures
                & Algorithms, web technologies, and emerging AI-powered
                technologies.
                </p>

                <div className="education-tags">

                <span>✓ Information Technology</span>

                <span>✓ Data Structures & Algorithms</span>

                <span>✓ Object-Oriented Programming</span>

                <span>✓ Database Management Systems</span>

                <span>✓ Web Development</span>

                </div>

            </div>
            </div>


            {/* Continuous Learning */}
            <div className="education-item">

            <div className="education-icon">
                🚀
            </div>

            <div className="education-card">

                <div className="education-top">

                <span className="education-date">
                    Academic Journey
                </span>

                <span className="education-badge">
                    LEARNING
                </span>

                </div>

                <h3>
                Continuous Learning
                </h3>

                <h4>
                Self Learning & Practice
                </h4>

                <p>
                Alongside academics, continuously improving programming
                and development skills through coding platforms, projects,
                documentation, and hands-on experimentation.
                </p>

                <div className="education-tags">

                <span>✓ 300+ Coding Problems</span>

                <span>✓ Web Development</span>

                <span>✓ Git & GitHub</span>

                <span>✓ Problem Solving</span>

                <span>✓ AI & New Technologies</span>

                </div>

            </div>

            </div>

        </div>


        {/* Learning Quote */}
        <div className="education-quote">

            <span>“</span>

            <p>
            Learning never stops. Every problem solved and every project
            built is another step toward becoming a better developer.
            </p>

            <span>”</span>

        </div>

        </section>
    );
    };

    export default Education;