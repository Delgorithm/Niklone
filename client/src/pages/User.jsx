import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useUserAuth } from "../context/AuthContext/UserAuthContext";
import { useFavorite } from "../context/FavoriteContext";
import { FaHeart } from "react-icons/fa";

function User({ allShoes }) {
	const { user } = useUserAuth();
	const { favorites, removeFromFavorites } = useFavorite();

	const handleRemoveFromFavorites = (favoritedId) => {
		removeFromFavorites(favoritedId);
	};

	return (
		<>
			<Navbar />
			<section className="mx-6">
				<h1 className="text-2xl pb-4">Page utilisateur</h1>
				<p className="pb-4">Utilisateur : {user.email}</p>
				<p>Mes articles favoris :</p>
				{favorites.length > 0 ? (
					<>
						{favorites.map((favoriteId) => {
							const favoriteShoes = allShoes.find(
								(shoe) => shoe.id === favoriteId
							);
							return (
								<section
									key={favoriteId}
									className="flex justify-between items-center my-4">
									<Link
										to={`/catalogue/${favoriteShoes.model}`}
										className="flex items-center gap-10">
										<img
											src={favoriteShoes.img}
											alt={favoriteShoes.description}
											className="w-20"
										/>
										<p>{favoriteShoes.model}</p>
									</Link>
									<button
										onClick={() => handleRemoveFromFavorites(favoriteId)}
										className="p-2">
										<FaHeart className="text-2xl" />
									</button>
								</section>
							);
						})}
					</>
				) : (
					<p className="p-10 text-center">Aucun favoris 😶</p>
				)}
			</section>
			<Footer />
		</>
	);
}

export default User;
