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
		<section className="grid grid-cols-2 gap-3 pb-10">
			{filteredData.map((item) => (
				<article key={item.id}>
					<Link to={`/catalogue/${item.model}`}>
						<figure>
							<img src={item.img} alt={item.description} />
						</figure>
						<p>{item.model}</p>
						<p>{item.type}</p>
						<p>{item.price}€</p>
					</Link>
				</article>
			))}
		</section>
	);
}

export default SearchProduct;
