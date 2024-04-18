import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Catalogue = ({ allShoes }) => {
	return (
		<>
			<Navbar />
			<section className="mx-2">
				<h1 className="text-xl">Catalogue</h1>
				<p>{allShoes.length} résultats</p>
				<section className="grid grid-cols-2 gap-3 pb-10">
					{allShoes.map((shoe) => (
						<article key={shoe.model}>
							<Link to={`/catalogue/${shoe.model}`}>
								<figure>
									<img src={shoe.img} alt={shoe.description} />
								</figure>
								<p>{shoe.model}</p>
								<p>{shoe.type}</p>
								<p>{shoe.price}</p>
							</Link>
						</article>
					))}
				</section>
			</section>
			<Footer />
		</>
	);
};

export default Catalogue;
