    function Hero() {
    return (
        <section className="hero" id="home">

        <div className="hero-content">

            <p className="hello-badge">
            ✨ Hello, I'm Arun
            </p>

            <h1>
            Turning ideas
            <br />
            <span>into code.</span>
            <br />
            And solutions.
            </h1>

            <h2>
            B.Tech IT Student · Java & Full Stack Developer · Problem Solver
            </h2>

            <p>
            I build modern web applications, strengthen my skills through
            DSA, and explore AI-powered technologies to create practical solutions.
            </p>

            <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
                Explore Projects →
            </a>

            <a href="#contact" className="secondary-btn">
                Let's Connect
            </a>

            </div>

        </div>


        <div className="hero-visual">

            <div className="profile-wrapper">

            <img
                src="/profile.jpg"
                alt="Arun Kumar"
                className="profile-image"
            />

            </div>

        </div>

        </section>
    );
    }

    export default Hero;