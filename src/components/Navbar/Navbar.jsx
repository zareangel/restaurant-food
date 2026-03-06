import './Navbar.css';
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const { cart, increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const { message } = useContext(CartContext);
    const navigate = useNavigate();

    const goToSection = (id) => {
        navigate("/");
        setTimeout(() => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };
    return (
        <nav className="navbar">

            <div className="navbar-container">
                {message && <div className="toast">{message}</div>}
                <div className="brand" >🍔 Burger stop</div>

                <div className={`nav-links ${isOpen ? "active" : ""}`}>
                    <a onClick={() => goToSection("/")}>Home</a>
                    <a onClick={() => goToSection("menu")}>Menu</a>
                    <a onClick={() => goToSection("about")}>About</a>
                    <a onClick={() => goToSection("contact")}>Contact</a>
                </div>

                <div className="cart-container">
                    <div className="cart-icon" onClick={() => setCartOpen(!cartOpen)}>

                        🛒 {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
                    </div>
                    {cartOpen && <div className="cart-overlay" onClick={() => setCartOpen(false)}></div>}
                    <div className={`cart-sidebar ${cartOpen ? "open" : ""}`}>
                        <div className="cart-header">

                            <h3>Your Cart</h3>
                            <button onClick={() => setCartOpen(false)}>✖</button>
                        </div>
                        {cart.length === 0 &&
                            <p className='no-products'>No products in cart</p>
                        }

                        <div className='cart-items'>
                            {cart.map(item => (
                                <div key={item.id} className="cart-item">

                                    <div className="cart-item-info">
                                        <img src={item.image} alt={item.name} className="cart-image" />
                                        <span className="cart-name">{item.name}</span>

                                        <div className="qty-controls">
                                            <button onClick={() => decreaseQty(item.id)} className='decrease-btn'>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => increaseQty(item.id)} className='increase-btn'>+</button>
                                            <button
                                                className="remove-btn"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                🗑
                                            </button>
                                        </div>
                                    </div>

                                    <span className="cart-price">
                                        ${item.price * item.quantity}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="cart-footer">
                            <h3>
                                Total: $
                                {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
                            </h3>
                            <button onClick={() => navigate("/checkout")} className='checkout-btn'>
                                Checkout
                            </button>
                        </div>
                    </div>


                </div>

                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>☰</div>
            </div>
        </nav>
    );
};

export default Navbar;
