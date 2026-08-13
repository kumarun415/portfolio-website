    import Navbar from "./components/Navbar";
    import Hero from "./components/Hero";
    import About from "./components/About";
    import Skills from "./components/Skills";
    import CodingJourney from "./components/CodingJourney";
    import Education from "./components/Education";
    import Certificates from "./components/Certificates";
    import Projects from "./components/Projects";
    import Contact from "./components/Contact";
    import Footer from "./components/Footer";

    function App() {
    return (
        <>
        <Navbar />

        <main>
            <Hero />
            <About />
            <Skills />
            <CodingJourney />
            <Education />
            <Certificates />
            <Projects />
            <Contact />
        </main>
        <Footer />
        </>
    );
    }

    export default App;
