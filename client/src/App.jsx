import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/AuthContext/UserAuthContext";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Catalogue from "./components/Catalogue";
import Product from "./components/Product";
import data from "./assets/data/data.json";
import "./App.css";
import User from "./pages/User";
import ProtectedRoute from "./components/ProtectedRoute";
import CartProvider from "./context/CartContext";
import { FavoriteProvider } from "./context/FavoriteContext";
import Search from "./pages/Search";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

function App() {
	const { catalogueShoes, sizes, detailProduct, detailReview } = data;

	const allShoes = Object.values(catalogueShoes);
	const allSizes = Object.values(sizes);
	// const allDetails = Object.values(detailProduct);
	// const allReview = Object.values(detailReview);

	return (
		<UserAuthContextProvider>
			<FavoriteProvider>
				<CartProvider>
					<Router>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/cart" element={<Cart />} />
							<Route path="/signin" element={<SignIn />} />
							<Route path="/signup" element={<SignUp />} />
							<Route path="/search" element={<Search />} />
							<Route
								path="/catalogue"
								element={<Catalogue allShoes={allShoes} />}
							/>
							<Route
								path="/catalogue/:id"
								element={<Product allShoes={allShoes} allSizes={allSizes} />}
							/>
							<Route
								path="/user"
								element={
									<ProtectedRoute>
										<User allShoes={allShoes} />
									</ProtectedRoute>
								}
							/>
							<Route path="/success" element={<Success />} />
							<Route path="/cancel" element={<Cancel />} />
						</Routes>
					</Router>
				</CartProvider>
			</FavoriteProvider>
		</UserAuthContextProvider>
	);
}

export default App;
