import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

function CartItem({ item }) {
	const { removeFromCart, addToCart } = useContext(CartContext);
	const { id, model, price, amount, img, name } = item;
	return (
		<>
			<section className=" mx-4 pt-6 md:pt-10">
				<h1 className="text-xl md:text-3xl">Votre panier : 👟 </h1>
				<hgroup className="flex items-center justify-between mb-10 h-20 md:gap-32 md:pt-16">
					<figure>
						<Link to={`/catalogue/${model}`}>
							<img src={img} alt={name} className="w-20 md:w-32" />
						</Link>
					</figure>
					<article className="px-5">
						<p className="md:text-3xl">{model}</p>
						<p className="md:text-2xl">{price}€</p>
					</article>
					<article className="flex justify-between items-center gap-4 md:gap-6">
						<button type="button" onClick={() => removeFromCart(id)}>
							<AiOutlineMinus className="w-6 h-10 md:text-3xl" />
						</button>
						<p className="md:text-3xl">{amount}</p>
						<button type="button" onClick={() => addToCart(id)}>
							<AiOutlinePlus className="w-6 h-10" />
						</button>
					</article>
				</hgroup>
			</section>
		</>
	);
}
export default CartItem;
