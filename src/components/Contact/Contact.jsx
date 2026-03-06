import { useState } from "react";
import "./Contact.css";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setTimeout(() => {
            setSent(true);

            setForm({
                name: "",
                email: "",
                message: ""
            });
        }, 300);
    };

    return (
        <section className="contact-section" id="contact">

            <div className="contact-container">

                <h2>Contact Us</h2>
                <p className="contact-subtitle">
                    Have questions or want to make a reservation? Send us a message!
                </p>

                {sent && (
                    <div className="success-message">
                        ✅ Your message has been sent successfully!
                    </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        value={form.message}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Send Message</button>

                </form>

            </div>

        </section>
    );
};

export default Contact;