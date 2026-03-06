import './Hero.css';
import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
const Hero = () => {
  const location = useLocation();

  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    if (location.state?.success) {
      setSuccessMessage(location.state.success);
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000)
    }
  }, [location.state])

  return (
    <section className="hero" id='hero'>
      {successMessage && (
        <div className="success-message">
          ✅ {successMessage}
        </div>
      )}
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <span className="hero-tag">New Recipe!</span>
        <h1 className="hero-title">Taste the <br /><span>Difference</span></h1>
        <p className="hero-text">
          Premium ingredients, hand-crafted patties, and that secret sauce
          you won't find anywhere else. Order yours now!
        </p>
        <div className="hero-actions">


          <a href="#menu" className='btn-main'>Order Now</a>
          <a href="#location" className="btn-outline">Find Us</a>
        </div>
      </div>
      <div className="hero-floating-img">
        <img
          src="https://cdn.creativefabrica.com/2022/04/17/Burger-Logo-Design-Graphics-29136403-1-1-580x387.jpg"
          alt="Premium Burger"
        />
      </div>
    </section>
  );
};

export default Hero;