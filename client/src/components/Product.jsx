import { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { useFavorite } from "../context/FavoriteContext";
import { useUserAuth } from "../context/AuthContext/UserAuthContext";

const Product = ({ allShoes, allSizes }) => {
	const { user } = useUserAuth();
	const { id } = useParams();
	const { addToCart } = useContext(CartContext);
	const { addToFavorites, removeFromFavorites, favorites } = useFavorite();
	const navigate = useNavigate();

	const currentElement = allShoes.find((shoe) => shoe.model === id);
	const isFavorite = favorites.includes(currentElement.id);

	const handleClick = (size) => {
		console.log(size);
	};

	const handleFavorites = () => {
		if (user) {
			if (isFavorite) {
				removeFromFavorites(currentElement.id);
			} else {
				addToFavorites(currentElement.id);
			}
		} else {
			navigate("/signup");
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [id]);

	if (!currentElement) {
		return <p>Produit introuvable</p>;
	}

	return (
		<>
			<Navbar />
			<section className="m-6">
				<h1 className="text-xl md:text-4xl">{currentElement.model}</h1>
				<Link to="/catalogue">
					<p className="text-sm md:text-xl text-slate-500">
						{currentElement.type}
					</p>
				</Link>
				<p className="md:text-3xl">{currentElement.price} €</p>
				<figure className="my-4 flex justify-center items-center">
					<img src={currentElement.img} alt={currentElement.description} />
				</figure>
				<section>
					<article className="flex items-center justify-between">
						<p className="font-medium md:text-2xl">Sélectionner la taille</p>
						<p className="text-gray-500 md:text-2xl">Guide des tailles</p>
					</article>
					<article className="grid grid-cols-3 grid-row-auto my-4">
						{allSizes.map((size, index) => (
							<button
								key={index}
								type="button"
								onClick={() => handleClick(size)}
								className="m-1 px-3 py-2 border-[0.1px] md:text-2xl border-gray-300 rounded hover:border-[1px] hover:bg-black hover:text-white focus:bg-black focus:text-white">
								{size}
							</button>
						))}
					</article>
					<article className="flex flex-col justify-center items-center rounded-full">
						<button
							className="w-full md:w-1/2 md:text-2xl flex justify-center items-center rounded-full bg-black text-white text-lg py-4 md:py-5 hover:bg-zinc-600"
							onClick={() => addToCart(currentElement.id, currentElement)}>
							Ajouter au panier
						</button>
						<button
							className="w-full md:w-1/2 md:text-2xl rounded-full border-2 text-lg py-4 md:py-5 mt-4 hover:border-black flex justify-center items-center gap-2"
							onClick={handleFavorites}>
							{favorites.includes(currentElement.id) ? (
								<>
									Retirer des favoris <FaHeart />
								</>
							) : (
								<>
									Ajouter au favoris <CiHeart />
								</>
							)}
						</button>
					</article>
				</section>
			</section>
			<Footer />
		</>
	);
};

export default Product;
