import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import hero from "../assets/data/data.json";

const Hero = () => {
	const { slogan, title, description } = hero.hero;

	return (
		<section>
			<figure className="flex justify-center items-center">
				<img
					className=" w-full md:h-[40rem]"
					src="img/chaussure12.jpeg"
					alt="A basket in black and white"
				/>
			</figure>
			<article className="flex flex-col justify-center items-center my-10">
				<p className="font-medium md:text-4xl">{slogan}</p>
				<h1 className="text-3xl font-bold my-4 md:text-3xl">{title}</h1>
				<p className="text-gray-400 xxs:text-sm md:text-2xl">{description}</p>
				<Link
					to="/catalogue"
					className="px-4 md:px-6 py-1.5 md:py-3 md:text-3xl bg-black text-white rounded-full mt-6 cursor-pointer hover:opacity-80">
					Découvrir
				</Link>
			</article>
			<article className="flex justify-between items-center xxs:mx-4 xsl:mx-6">
				<h2 className=" xsl:text-2xl">Découvre les articles populaires</h2>
				<section>
					<Link to="/catalogue" className=" md:text-xl">
						Voir tous les articles
					</Link>
				</section>
			</article>
			<Carousel />
		</section>
	);
};

export default Hero;
