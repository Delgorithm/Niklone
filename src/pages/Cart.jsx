import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
	const { cart } = useContext(CartContext);

	return (
		<>
			<Navbar />
			<section className="mx-4 pb-10">
				{cart.length === 0 ? (
					<section>
						<h1 className="text-xl mt-3">
							Votre panier : Complètement vide 😔🖐️
						</h1>
						<Link to="/catalogue" className="flex justify-center items-center">
							<p className="bg-black text-white p-3 mt-10 rounded-lg">
								Catalogue de chaussures
							</p>
						</Link>
					</section>
				) : (
					<section>
						{cart.map((item) => {
							return <CartItem item={item} key={item.id} />;
						})}
					</section>
				)}
			</section>
			<Footer />
		</>
	);
};

export default Cart;
