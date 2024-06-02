import { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { HiOutlineChevronRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import navbarItems from "../assets/data/data.json";
import searchItems from "../assets/data/data.json";
import Button from "./Button";
import { CartContext } from "../context/CartContext";
import { useUserAuth } from "../context/AuthContext/UserAuthContext";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(true);
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const { cart } = useContext(CartContext);
	const { user } = useUserAuth();
	const { logOut } = useUserAuth();

	const { newArrivals, men, women, promotions, invitation } =
		navbarItems.navbarItems;

	const { popular, popularFirst, popularSecond, popularThird, popularFourth } =
		searchItems.searchItems;

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	const toggleSearch = () => {
		setIsSearchOpen(!isSearchOpen);
	};
	const handleLogout = () => {
		logOut();
	};

	const totalItems = cart.reduce((acc, cart) => acc + cart.amount, 0);

	return (
		<header className="xxs:p-4 md:p-6">
			<nav className="flex justify-between items-center xxs:mx-1">
				<Link to="/">
					<img
						src="/img/logo-no-background.svg"
						alt="Niklone's logo"
						className="xxs:w-12 md:w-24"
					/>
				</Link>
				<section className="flex gap-6 md:gap-10">
					<Link to="/search">
						<CiSearch className="text-2xl cursor-pointer md:text-4xl" />
					</Link>

					<Link to="/cart" className="relative">
						<CiShoppingCart className="text-2xl md:text-4xl" />
						<p className="absolute -top-2 -right-3 rounded font-light">
							{totalItems}
						</p>
					</Link>
					{user !== null ? (
						<Link to="/user">
							<CiUser className="text-2xl md:text-4xl" />
						</Link>
					) : (
						<Link to="/signin">
							<CiUser className="text-2xl md:text-4xl" />
						</Link>
					)}

					<button>
						<CiMenuBurger
							onClick={toggleMenu}
							className="text-2xl cursor-pointer md:text-4xl"
						/>
					</button>

					{!isMenuOpen && (
						<article className="fixed h-full w-screen bg-black/30 backdrop-blur-sm top-0 right-0 z-50">
							<section className="text-black bg-white flex-col absolute top-0 right-0 h-screen p-6 gap-6 z-50 flex w-5/6 transition ease-in-out delay-200">
								<IoClose
									onClick={toggleMenu}
									className="fixed right-4 top-3 text-3xl xs:text-4xl"
								/>
								<Link
									to="/catalogue"
									className="flex items-center justify-between mx-2 mt-10">
									<p className="text-2xl">{newArrivals}</p>
									<HiOutlineChevronRight className="text-xl" />
								</Link>
								<article className="flex items-center justify-between mx-2">
									<p className="text-2xl">{promotions}</p>
									<HiOutlineChevronRight className="text-xl" />
								</article>
								<p className="text-xl text-gray-500 mx-2">
									{invitation}{" "}
									<a href="" className="font-semibold text-black">
										En savoir plus
									</a>
								</p>
								{user !== null ? (
									<>
										<article className="flex flex-col justify-center items-center gap-4">
											<Link to="/user">
												<Button label="Mon compte" text="white" color="black" />
											</Link>
											<Button
												label="Se déconnecter"
												text="black"
												color="white"
												onClick={handleLogout}
											/>
										</article>
									</>
								) : (
									<>
										<article className="flex flex-col items-center gap-4 xs:py-4 xs:gap-8">
											<Link to="/signup">
												<Button
													color="black"
													text="white"
													label="Nous rejoindre"
												/>
											</Link>
											<Link to="/signin">
												<Button color="" label="S'identifier" />
											</Link>
										</article>
									</>
								)}
							</section>
						</article>
					)}
				</section>
			</nav>
		</header>
	);
};

export default Navbar;
