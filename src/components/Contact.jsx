    import { useRef, useState } from "react";
    import emailjs from "@emailjs/browser";
    import "./Contact.css";

    function Contact() {
    const form = useRef();

    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        setSending(true);
        setStatus("");

        emailjs
        .sendForm(
            "service_4f1cm2p",
            "template_881nju9",
            form.current,
            {
            publicKey: "efwx-wFlQjQFAHQP6",
            }
        )
        .then(
            () => {
            setSending(false);
            setStatus("success");

            form.current.reset();
            },
            (error) => {
            console.error("EmailJS Error:", error);

            setSending(false);
            setStatus("error");
            }
        );
    };

    return (
        <section id="contact" className="contact-section">

        {/* ================= SECTION HEADER ================= */}

        <div className="section-heading">

            <span>07 / CONTACT</span>

            <h2>
            Let's <strong>Connect</strong>
            </h2>

            <p>
            Have a project, internship opportunity, collaboration idea,
            or simply want to say hello? I'd love to hear from you.
            </p>

        </div>


        {/* ================= CONTACT CONTENT ================= */}

        <div className="contact-container">

            {/* ================= LEFT SIDE ================= */}

            <div className="contact-info">

            {/* Email */}

            <div className="contact-card">

                <div className="contact-icon">
                📧
                </div>

                <div>

                <h3>Email Me</h3>

                <p>
                    Have a question or opportunity? Send me an email
                    and I'll get back to you.
                </p>

                <a href="mailto:kumarun415@gmail.com">
                    kumarun415@gmail.com →
                </a>

                </div>

            </div>


            {/* GitHub */}

            <div className="contact-card">

                <div className="contact-icon">
                💻
                </div>

                <div>

                <h3>GitHub</h3>

                <p>
                    Explore my projects, source code, experiments,
                    and development journey.
                </p>

                <a
                    href="https://github.com/kumarun415"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    github.com/kumarun415 →
                </a>

                </div>

            </div>


            {/* LinkedIn */}

            <div className="contact-card">

                <div className="contact-icon">
                🔗
                </div>

                <div>

                <h3>LinkedIn</h3>

                <p>
                    Let's connect professionally and stay in touch
                    with my learning and career journey.
                </p>

                <a
                    href="https://www.linkedin.com/in/arun-kumar-a8b310382"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View LinkedIn Profile →
                </a>

                </div>

            </div>


            {/* LeetCode */}

            <div className="contact-card">

                <div className="contact-icon">
                🧠
                </div>

                <div>

                <h3>LeetCode</h3>

                <p>
                    300+ coding problems solved while strengthening
                    my Data Structures and Algorithms skills.
                </p>

                <a
                    href="https://leetcode.com/u/arun-k____2311/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View LeetCode Profile →
                </a>

                </div>

            </div>


            {/* GeeksforGeeks */}

            <div className="contact-card">

                <div className="contact-icon">
                💚
                </div>

                <div>

                <h3>GeeksforGeeks</h3>

                <p>
                    Practicing programming, DSA, and problem solving
                    through consistent coding.
                </p>

                <a
                    href="https://www.geeksforgeeks.org/profile/kumarun415"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View GFG Profile →
                </a>

                </div>

            </div>


            {/* Availability Card */}

            <div className="contact-card availability-card">

                <div className="contact-icon">
                🚀
                </div>

                <div>

                <h3>Currently Open To</h3>

                <p>
                    I'm currently open to internships, beginner-friendly
                    software development opportunities, collaborations,
                    and learning-focused projects.
                </p>

                <span className="availability-status">
                    ● Available for opportunities
                </span>

                </div>

            </div>

            </div>


            {/* ================= RIGHT SIDE FORM ================= */}

            <form
            ref={form}
            className="contact-form"
            onSubmit={sendEmail}
            >

            <div className="form-intro">

                <span>GET IN TOUCH</span>

                <h3>
                Have something <strong>in mind?</strong>
                </h3>

                <p>
                Fill out the form below and I'll get back to you
                as soon as possible.
                </p>

            </div>


            {/* Name + Email */}

            <div className="form-row">

                <div className="form-group">

                <label htmlFor="name">
                    Your Name
                </label>

                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                />

                </div>


                <div className="form-group">

                <label htmlFor="email">
                    Your Email
                </label>

                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                />

                </div>

            </div>


            {/* Subject */}

            <div className="form-group">

                <label htmlFor="subject">
                Subject
                </label>

                <input
                id="subject"
                type="text"
                name="title"
                placeholder="Internship, project, collaboration..."
                required
                />

            </div>


            {/* Message */}

            <div className="form-group">

                <label htmlFor="message">
                Message
                </label>

                <textarea
                id="message"
                name="message"
                rows="7"
                placeholder="Tell me a little about your idea or opportunity..."
                required
                />

            </div>


            {/* Send Button */}

            <button
                type="submit"
                className="send-button"
                disabled={sending}
            >
                {sending ? "Sending..." : "Send Message →"}
            </button>


            {/* Success / Error Message */}

            {status === "success" && (
                <p className="form-success">
                ✅ Message sent successfully! I'll get back to you soon.
                </p>
            )}

            {status === "error" && (
                <p className="form-error">
                ❌ Something went wrong. Please try again.
                </p>
            )}


            <p className="form-note">
                🔒 Your information is only used to respond to your message.
            </p>

            </form>

        </div>


        {/* ================= BOTTOM MESSAGE ================= */}

        <div className="contact-bottom">

            <span>✨</span>

            <p>
            I'm always interested in learning, building, and
            connecting with people who are working on meaningful ideas.
            </p>

            <span>✨</span>

        </div>

        </section>
    );
    }

    export default Contact;