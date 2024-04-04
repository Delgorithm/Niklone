import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const Product = ({ allShoes, allSizes }) => {
	const { id } = useParams();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [id]);

	const currentElement = allShoes.find((element) => element.model === id);

	const handleClick = (size) => {
		console.log(size);
	};

	return (
		<>
			<Navbar />
			<section className="m-6">
				<h1 className="text-xl">{currentElement.model}</h1>
				<p className="text-sm">{currentElement.type}</p>
				<p>{currentElement.price} €</p>
				<figure className="my-4">
					<img src={currentElement.img} alt={currentElement.description} />
				</figure>
				<section>
					<article className="flex items-center justify-between">
						<p className="font-medium">Sélectionner la taille</p>
						<p className="text-gray-500">Guide des tailles</p>
					</article>
					<article className="grid grid-cols-3 grid-row-auto my-4">
						{allSizes.map((size, index) => (
							<button
								key={index}
								type="button"
								onClick={() => handleClick(size)}
								className="m-1 px-3 py-2 border-[0.1px] border-gray-300 rounded hover:border-[1px] hover:bg-black hover:text-white focus:bg-black focus:text-white">
								{size}
							</button>
						))}
					</article>
					<button className="w-full rounded-full bg-black text-white text-lg py-4 hover:bg-zinc-600">
						Ajouter au panier
					</button>
					<button className="w-full rounded-full border-2 text-lg py-4 mt-4 hover:border-black flex justify-center items-center gap-2">
						Ajouter aux favoris <CiHeart />
					</button>
				</section>
			</section>
			<Footer />
		</>
	);
};

export default Product;
