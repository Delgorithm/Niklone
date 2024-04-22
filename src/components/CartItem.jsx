import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "../components/Button";

function CartItem({ item }) {
	const { cart } = useContext(CartContext);
	const { removeFromCart } = useContext(CartContext);
	const { id, model, price, amount, img, name } = item;
	return (
		<>
			<section className=" mx-4 mt-6">
				<article className="flex items-center justify-between mb-10 h-20 relative">
					<figure>
						<Link to={`/catalogue/${model}`}>
							<img src={img} alt={name} className="w-20" />
						</Link>
					</figure>
					<article className="px-5">
						<p>{model}</p>
						<p>{price}€</p>
					</article>
					<article className="flex justify-between items-center gap-4">
						<button type="button">
							<AiOutlineMinus className="w-6 h-10" />
						</button>
						{amount}
						<button type="button">
							<AiOutlinePlus className="w-6 h-10" />
						</button>
					</article>
					<button type="button" onClick={() => removeFromCart(id)}>
						X
					</button>
				</article>
			</section>
		</>
	);
}
export default CartItem;
