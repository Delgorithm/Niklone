import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import SearchProduct from "../components/SearchProduct";

function Search() {
	const [inputText, setInputText] = useState("");

	const inputHandler = (e) => {
		let lowercase = e.target.value.toLowerCase();
		setInputText(lowercase);
	};

	return (
		<>
			<section className="">
				<article className="">
					<section className="flex justify-center items-center gap-2 pt-4">
						<Link to="/">
							<img
								src="/img/logo-no-background.svg"
								alt="Niklone's logo"
								className="w-20"
							/>
						</Link>
						<input
							type="text"
							className="bg-gray-200 opacity-85 p-2 rounded-3xl outline-none pl-4"
							placeholder="Rechercher"
							onChange={inputHandler}
						/>
						<button>
							<CiSearch className="text-4xl bg-gray-200 p-2 rounded-full" />
						</button>
					</section>
					<section className="mx-2 mt-4">
						<SearchProduct inputText={inputText} />
					</section>
				</article>
			</section>
			<Footer />
		</>
	);
}

export default Search;
