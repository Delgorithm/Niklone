import data from "../assets/data/data.json";
import { Link } from "react-router-dom";

const Carousel = () => {
	const { firstShoe, secondShoe, thirdShoe, fourthShoe, fifthShoe } =
		data.carouselShoes;

	const shoes = [firstShoe, secondShoe, thirdShoe, fourthShoe, fifthShoe];

	return (
		<section className="flex items-center overflow-x-auto whitespace-nowrap scroll-smooth overflow-hidden">
			{shoes.map((shoe) => (
				<article
					key={shoe.model}
					className="xxs:m-4 xsl:m-6 cursor-pointer hover:scale-105 ease-in-out duration-150">
					<Link to={`/catalogue/${shoe.model}`}>
						<figure>
							<img src={shoe.img} alt={shoe.alt} />
						</figure>
						<p className="text-sm md:text-2xl">{shoe.model}</p>
						<p className="text-sm text-gray-400 md:text-xl">{shoe.type}</p>
						<p className="text-sm mt-2 font-medium md:text-2xl">
							{shoe.price} €
						</p>
					</Link>
				</article>
			))}
		</section>
	);
};

export default Carousel;
