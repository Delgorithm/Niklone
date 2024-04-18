import { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
	const { cart } = useContext(CartContext);

	return (
		<>
			<Navbar />
			<section className="m-6">
				<h2 className="text-xl mb-4">Mon panier :</h2>
				{cart.map((item) => {
					return (
						<article
							key={item.id}
							className="flex items-center justify-between mb-4">
							<figure>
								<Link to={`/catalogue/${item.model}`}>
									<img src={item.img} alt={item.name} className="w-24" />
								</Link>
							</figure>
							<article className="text-end">
								<p>{item.model}</p>
								<p>{item.price}€</p>
							</article>
						</article>
					);
				})}
			</section>
			<Footer />
		</>
	);
};

export default Cart;
