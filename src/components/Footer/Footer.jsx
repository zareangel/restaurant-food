import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-brand">
                    <h2>Burger Stop</h2>
                    <p>Fresh taste, fast service.</p>
                </div>

                <div className="footer-links">
                    <h4>Navigation</h4>
                    <ul>
                        <li><a href="#hero">Home</a> </li>
                        <li><a href="#menu">Menu</a> </li>
                        <li><a href="#about">About</a> </li>
                        <li><a href="#contact">Contact</a> </li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact</h4>
                    <p>Email: info@burgerstop.com</p>
                    <p>Phone: +51 999 999 999</p>
                </div>
                

            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Burger Stop. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;