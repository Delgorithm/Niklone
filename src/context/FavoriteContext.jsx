import { createContext, useState } from "react";

const FavoriteContext = createContext();

const FavoriteProvder = ({ children }) => {
    const [favorite, setFavorite] = useState([]);

    const addToFavorite = (id, currentElement) => {
        const favoriteITem = favorite.find((item) => item.id === id);
        if (favoriteITem) {
            const newFavorite = favorite.map((item) => {
                if (item.id === id) {
                    return { ...item, amount: item.amount + 1 };
                } else {
                    return item;
                }
            });
            setFavorite(newFavorite);
        }
    }
}

export default FavoriteContext;
