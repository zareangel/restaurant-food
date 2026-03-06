import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [message, setMessage] = useState(null);

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Add Product
    const addToCart = (product) => {
        setCart(prev => {
            const exist = prev.find(p => p.id === product.id);

            if (exist) {
                return prev.map(p =>
                    p.id === product.id
                        ? { ...p, quantity: p.quantity + 1 }
                        : p
                );
            }

            return [...prev, { ...product, quantity: 1 }];
        });

        setMessage(`${product.name} added to cart`);
        setTimeout(() => setMessage(null), 3000);
    };

    // Delet Product
    const removeFromCart = (productId) => {
        setCart(prev => prev.filter(p => p.id !== productId));
    };

    // Clear Cart
    const clearCart = () => {
        setCart([]);
    };

    // Increase Quantity
    const increaseQty = (id) => {
        setCart(prev =>
            prev.map(item => {

                if (item.id === id) {

                    if (item.quantity >= item.stock) {
                        return item; // ← no aumenta
                    }

                    return { ...item, quantity: item.quantity + 1 };
                }

                return item;
            })
        );
    };

    // Decrease quantity
    const decreaseQty = (id) => {
        setCart(prev =>
            prev.map(p =>
                p.id === id
                    ? { ...p, quantity: p.quantity > 1 ? p.quantity - 1 : 1 }
                    : p
            )
        );
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            increaseQty,
            decreaseQty,
            message
        }}>
            {children}
        </CartContext.Provider>
    );
};