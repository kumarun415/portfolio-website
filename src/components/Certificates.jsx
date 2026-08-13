    import certificates from "../data/certificatesData";

    function Certificates() {
    return (
        <section className="certificates-section" id="certificates">

        <div className="section-heading">
            <span>05 / CERTIFICATES</span>

            <h2>
            My <em>Certifications</em>
            </h2>

            <p>
            Certifications and learning achievements from my development journey.
            </p>
        </div>

        <div className="certificates-grid">

            {certificates.map((certificate) => (
            <div className="certificate-card" key={certificate.id}>

                <div className="certificate-image">
                <img
                    src={certificate.image}
                    alt={certificate.title}
                />
                </div>

                <div className="certificate-content">

                <span className="certificate-category">
                    {certificate.category}
                </span>

                <h3>{certificate.title}</h3>

                <p className="certificate-issuer">
                    {certificate.issuer}
                </p>

                <p className="certificate-date">
                    {certificate.date}
                </p>

                <p className="certificate-description">
                    {certificate.description}
                </p>

                {certificate.verify && (
                    <a
                    href={certificate.verify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-btn"
                    >
                    Verify Certificate →
                    </a>
                )}

                </div>

            </div>
            ))}

        </div>

        </section>
    );
    }

    export default Certificates;