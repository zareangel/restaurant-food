import "./About.css";

const About = () => {
    return (
        <div className="about-page" id="about">
            
            {/* HERO SECTION */}
            <section className="about-hero">
                <div className="about-overlay">
                    <h1>About Our Restaurant</h1>
                    <p>Fast, fresh and made with passion.</p>
                </div>
            </section>

            {/* CONTENT */}
            <section className="about-content">
                <h2>Who We Are</h2>
                <p>
                    We are a modern fast food restaurant focused on delivering
                    high-quality meals with speed and consistency. Our mission
                    is to combine great taste with a smooth digital experience.
                </p>

                <div className="about-grid">
                    <div className="about-card">
                        <h3>Fresh Ingredients</h3>
                        <p>We select quality products to guarantee flavor in every bite.</p>
                    </div>

                    <div className="about-card">
                        <h3>Fast Service</h3>
                        <p>Our system is designed to provide quick and simple ordering.</p>
                    </div>

                    <div className="about-card">
                        <h3>Modern Experience</h3>
                        <p>This project showcases a modern React-based food ordering interface.</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;