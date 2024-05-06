import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Cart = () => {
	const { cart } = useContext(CartContext);
	const totalPrice = cart.reduce(
		(acc, item) => acc + item.price * item.amount,
		0
	);

	const handleCheckout = async () => {
		const items = cart.map((item) => ({
			id: item.id,
			quantity: item.amount,
		}));

		await fetch(`${import.meta.env.VITE_BACKEND_URL}/checkout`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ items }),
		})
			.then((response) => {
				return response.json();
			})
			.then((response) => {
				if (response.url) {
					window.location.assign(response.url);
				}
			});
	};

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
								Catalogue des chaussures
							</p>
						</Link>
					</section>
				) : (
					<section>
						<h1 className="text-xl mt-3">Votre panier : 👟 </h1>
						{cart.map((item) => {
							return <CartItem item={item} key={item.id} />;
						})}
						<article>
							{cart.length === 0 ? (
								""
							) : (
								<section>
									<p className="flex justify-end items-center gap-1 my-4 ">
										Total:{" "}
										<span className="font-bold text-xl">{totalPrice}</span>€
									</p>
									<article className="flex justify-center">
										<Button
											color="black"
											label="Passer la commande"
											text="white"
											onClick={handleCheckout}
										/>
									</article>
								</section>
							)}
						</article>
					</section>
				)}
			</section>
			<Footer />
		</>
	);
};

export default Cart;
