import { Link } from "react-router-dom";
import data from "../assets/data/data.json";

function SearchProduct({ inputText }) {
	const { catalogueShoes } = data;
	const allShoes = Object.values(catalogueShoes);

	const filteredData = allShoes.filter((el) => {
		if (inputText === "") {
			return el;
		} else {
			return el.model.toLowerCase().includes(inputText);
		}
	});

	return (
		<section className="grid grid-cols-2 gap-3 pb-10 lg:grid-cols-3">
			{filteredData.map((item) => (
				<article key={item.id} className="md:py-4">
					<Link to={`/catalogue/${item.model}`}>
						<figure>
							<img src={item.img} alt={item.description} />
						</figure>
						<p className="md:text-3xl">{item.model}</p>
						<p className="md:text-xl text-slate-500">{item.type}</p>
						<p className="md:text-2xl">{item.price}€</p>
					</Link>
				</article>
			))}
		</section>
	);
}

export default SearchProduct;
