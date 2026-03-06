import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./Checkout.css";
import { saveSale } from "../../api/saleApi";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const { cart, clearCart, increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);

    const [paymentMethod, setPaymentMethod] = useState("");
    const [dni, setDni] = useState("");
    const [client, setClient] = useState("");
    const [loading, setLoading] = useState(false);

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleOrder = async () => {

        if (!paymentMethod) {
            setErrorMessage("Please select a payment method.");
            return;
        }

        if (!dni) {
            setErrorMessage("Please enter your DNI.");
            return;
        }

        if (!client) {
            setErrorMessage("Please enter your name.");
            return;
        }

        if (cart.length === 0) {
            setErrorMessage("Your cart is empty.");
            return;
        }

        const today = new Date().toISOString().split("T")[0];

        const sale = {
            status: true,
            dni: dni,
            client: client,
            date: today,
            details: cart.map((p) => {
                if (!p.id) {
                    throw new Error("Product id undefined in cart");
                }

                return {
                    product: { id: p.id },
                    quantity: p.quantity
                };
            })
        };


        try {
            setLoading(true);
            await saveSale(sale);

            clearCart();
            setPaymentMethod("");
            setDni("");
            setClient("");
            navigate("/", {
                state: { success: "Your order has been placed successfully!" }
            });
        } catch (e) {
            console.error(e);
            setErrorMessage("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (cart.length === 0) {
        return (
            <div className="cart-empty-container">
                <h2 className="cart-empty">Your cart is empty </h2>
                <p className="checkout-p">Looks like you haven't added anything yet.</p>
                <button onClick={() => navigate("/home")} className="checkout-back">
                    Start Shopping
                </button>
            </div>
        );
    }
    return (

        <div className="checkout-page">
            <h1 className="checkout-title">Checkout</h1>

            <div className="checkout-container">

                {/* LISTA DE PRODUCTOS */}
                <div className="checkout-items">

                    {cart.map((item) => (
                        <div key={item.id} className="checkout-item">
                            <img src={item.image} alt={item.name} />

                            <div className="item-info">
                                <h3>{item.name}</h3>

                                <div className="checkout-controls">
                                    <button onClick={() => decreaseQty(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() => increaseQty(item.id)}
                                        disabled={item.quantity >= item.stock}
                                    >
                                        +
                                    </button>
                                </div>
                                <p className="stock-info">
                                    Stock disponible: {item.stock}
                                </p>

                                <p>${item.price * item.quantity}</p>

                                <button
                                    className="remove-btn"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* RESUMEN */}
                <div className="checkout-summary">
                    {/* DATOS CLIENTE */}
                    <div className="client-info">
                        <h3>Client Information</h3>

                        <input
                            type="text"
                            placeholder="DNI"
                            value={dni}
                            onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, "");
                                setDni(value);
                            }}
                            maxLength={8}
                        />

                        <input
                            type="text"
                            placeholder="Client Name"
                            value={client}
                            onChange={(e) => {
                                const value = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ ]/g, "");
                                setClient(value);
                            }}
                        />

                        <input
                            type="text"
                            value={new Date().toISOString().split("T")[0]}
                            disabled
                        />
                    </div>


                    {/* MÉTODO DE PAGO */}
                    <div className="payment-method">
                        <h3>Payment Method</h3>

                        <div className="payment-options">

                            <div
                                className={`payment-card ${paymentMethod === "card" ? "active" : ""}`}
                                onClick={() => setPaymentMethod("card")}
                            >
                                <input type="radio" name="payment" value="card" checked={paymentMethod === "card"} readOnly />
                                <span>💳 Credit / Debit Card</span>
                            </div>
                            {paymentMethod === "card" && (
                                <div className="card-form">

                                    <div className="card-field">
                                        <label>Card number</label>
                                        <input
                                            type="text"
                                            placeholder="1234 5678 9012 3456"
                                        />
                                    </div>

                                    <div className="card-row">

                                        <div className="card-field">
                                            <label>Expiry date</label>
                                            <input
                                                type="text"
                                                placeholder="MM/YY"
                                            />
                                        </div>

                                        <div className="card-field">
                                            <label>CVV</label>
                                            <input
                                                type="text"
                                                placeholder="123"
                                            />
                                        </div>

                                    </div>

                                    <div className="card-field">
                                        <label>Name on card</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                </div>
                            )}
                            <div
                                className={`payment-card ${paymentMethod === "cash" ? "active" : ""}`}
                                onClick={() => setPaymentMethod("cash")}
                            >
                                <input type="radio" name="payment" value="cash" checked={paymentMethod === "cash"} readOnly />
                                <span>💵 Pay on delivery</span>
                            </div>

                            <div
                                className={`payment-card ${paymentMethod === "yape" ? "active" : ""}`}
                                onClick={() => setPaymentMethod("yape")}
                            >
                                <input type="radio" name="payment" value="yape" checked={paymentMethod === "yape"} readOnly />
                                <span>📱 Yape / Plin</span>
                            </div>

                        </div>

                        <div className="order-summary">
                            <h2>Order Summary</h2>
                            <p>Total items: {cart.reduce((s, i) => s + i.quantity, 0)}</p>
                            <p className="checkout-total">Total: ${total.toFixed(2)}</p>
                        </div>
                    </div>
                    {errorMessage && (
                        <div className="checkout-error">
                            {errorMessage}
                        </div>
                    )}
                    <button
                        className="checkout-btn"
                        onClick={handleOrder}
                        disabled={loading}
                    >
                        {loading ? "Processing..." : "Place Order"}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Checkout;