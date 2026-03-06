import "./Location.css";

const Location = () => {
    return (
        <section className="location" id="location">
            <h2>Our Location</h2>

            <p>
                Visit our restaurant and enjoy the best foods in town.
                We are waiting for you!
            </p>

            <div className="map-container">
                <iframe
                    title="restaurant-location"
                    src="https://www.google.com/maps?q=Lima%20Peru&output=embed"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    );
};

export default Location;