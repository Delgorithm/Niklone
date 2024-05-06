import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
	const [favorites, setFavorites] = useState([]);

	const addToFavorites = (productId) => {
		setFavorites((prevFavorites) => [...prevFavorites, productId]);
		console.log("Ajout aux favoris");
	};

	const removeFromFavorites = (productId) => {
		setFavorites((prevFavorites) =>
			prevFavorites.filter((id) => id !== productId)
		);
		console.log("Retirer des favoris");
	};

	const isFavorite = (productId) => {
		console.log("favoris");
		return favorites.includes(productId);
	};

	return (
		<FavoriteContext.Provider
			value={{
				favorites,
				addToFavorites,
				removeFromFavorites,
				isFavorite,
			}}>
			{children}
		</FavoriteContext.Provider>
	);
};

export const useFavorite = () => useContext(FavoriteContext);
