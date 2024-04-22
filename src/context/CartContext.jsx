import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (id, currentElement) => {
		const cartItem = cart.find((item) => item.id === id);
		if (cartItem) {
			const newCart = cart.map((item) => {
				if (item.id === id) {
					return { ...item, amount: item.amount + 1 };
				} else {
					return item;
				}
			});
			setCart(newCart);
		} else {
			const newItem = { ...currentElement, amount: 1 };
			setCart([...cart, newItem]);
		}
	};

	const removeFromCart = (id) => {
		const newCart = cart.filter((item) => {
			return item.id !== id;
		});
		setCart(newCart);
	};

	return (
		<CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
