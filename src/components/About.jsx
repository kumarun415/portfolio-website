    import { Code2, Brain, Rocket, GraduationCap } from "lucide-react";
    import { motion } from "framer-motion";

    function About() {
    return (
        <section className="about-section" id="about">

        <div className="section-heading">
            <span>01 / ABOUT</span>
            <h2>About <em>Me</em></h2>
            <p>
            A little about who I am, what I do, and what I love building.
            </p>
        </div>

        <div className="about-container">

            {/* Left side */}
            <motion.div
            className="about-intro"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            >
            <div className="about-label">
                <span></span>
                GET TO KNOW ME
            </div>

            <h3>
                Turning ideas into
                <span> real-world solutions.</span>
            </h3>

            <p>
                I'm <strong>Arun Kumar</strong>, a B.Tech Information Technology
                student passionate about software development, problem solving,
                and modern web technologies.
            </p>

            <p>
                I enjoy building practical applications, exploring new
                technologies, and continuously improving my skills in
                <strong> Data Structures & Algorithms</strong>.
            </p>

            <p>
                My goal is to become a skilled software engineer and build
                technology that solves meaningful real-world problems.
            </p>

            <a href="#contact" className="about-button">
                Let's Work Together →
            </a>
            </motion.div>

            {/* Right side */}
            <motion.div
            className="about-cards"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            >

            <div className="about-card">
                <div className="about-icon">
                <Code2 />
                </div>

                <div>
                <h4>Development</h4>
                <p>
                    Building modern and responsive web applications.
                </p>
                </div>
            </div>

            <div className="about-card">
                <div className="about-icon purple">
                <Brain />
                </div>

                <div>
                <h4>Problem Solving</h4>
                <p>
                    Practicing DSA and improving logical thinking.
                </p>
                </div>
            </div>

            <div className="about-card">
                <div className="about-icon blue">
                <Rocket />
                </div>

                <div>
                <h4>Learning</h4>
                <p>
                    Exploring new technologies and AI-powered tools.
                </p>
                </div>
            </div>

            <div className="about-card">
                <div className="about-icon orange">
                <GraduationCap />
                </div>

                <div>
                <h4>B.Tech IT</h4>
                <p>
                    Currently pursuing Information Technology.
                </p>
                </div>
            </div>

            </motion.div>

        </div>

        </section>
    );
    }

    export default About;