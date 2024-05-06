import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import hero from "../assets/data/data.json";

const Hero = () => {
	const { slogan, title, description } = hero.hero;

	return (
		<section>
			<figure>
				<img
					className="w-full"
					src="img/chaussure12.jpeg"
					alt="A basket in black and white"
				/>
			</figure>
			<article className="flex flex-col justify-center items-center my-10">
				<p className="font-medium">{slogan}</p>
				<h1 className="text-3xl font-bold my-4">{title}</h1>
				<p className="text-gray-400">{description}</p>
				<Link
					to="/catalogue"
					className="px-4 py-1.5 bg-black text-white rounded-full mt-6 cursor-pointer hover:opacity-80">
					Découvrir
				</Link>
			</article>
			<article className="flex justify-between items-center mx-6">
				<h2 className="text-2xl">Découvre les articles populaires</h2>
				<section>
					<Link to="/catalogue">Voir tous les articles</Link>
				</section>
			</article>
			<Carousel />
		</section>
	);
};

export default Hero;
