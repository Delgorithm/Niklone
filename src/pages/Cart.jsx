import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Cart = () => {
	const { cart } = useContext(CartContext);

	return (
		<>
			<Navbar />
			<section className="mx-4 pb-10">
				<h1 className="text-xl">
					Mon panier : {cart.length === 0 ? "Complètement vide 😔" : ""}
				</h1>
				{cart.map((item) => {
					return <CartItem item={item} key={item.id} />;
				})}
			</section>
			<Footer />
		</>
	);
};

export default Cart;
