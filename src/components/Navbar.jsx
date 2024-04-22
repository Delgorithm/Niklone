import React, { useContext, useState } from "react";
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
		<header className="p-4">
			<nav className="flex justify-between items-center">
				<figure className="pr-24">
					<Link to="/">
						<img
							src="/img/logo-no-background.svg"
							alt="Niklone's logo"
							className="w-20"
						/>
					</Link>
				</figure>
				<section className="flex gap-6">
					<CiSearch
						onClick={toggleSearch}
						className="text-2xl cursor-pointer"
					/>
					{isSearchOpen && (
						<article className="fixed h-full w-screen lg:hidden top-0 right-0 z-50">
							<section className="text-black bg-white flex-col absolute top-0 right-0 h-screen z-50 w-full">
								<section className="flex justify-center items-center gap-2 pt-4">
									<button>
										<CiSearch className="text-4xl bg-gray-200 p-2 rounded-full" />
									</button>
									<input
										type="text"
										className="bg-gray-200 opacity-85 p-2 rounded-3xl outline-none pl-4"
										placeholder="Rechercher"
									/>
									<button
										onClick={toggleSearch}
										className="font-semibold text-lg">
										Annuler
									</button>
								</section>
								<section className="p-10">
									<p className="opacity-30 font-semibold">{popular}</p>
									<ul className="mt-4 flex flex-col gap-4">
										<li className="text-xl font-medium hover:opacity-65">
											{popularFirst}
										</li>
										<li className="text-xl font-medium hover:opacity-65">
											{popularSecond}
										</li>
										<li className="text-xl font-medium hover:opacity-65">
											{popularThird}
										</li>
										<li className="text-xl font-medium hover:opacity-65">
											{popularFourth}
										</li>
									</ul>
								</section>
							</section>
						</article>
					)}

					<Link to="/cart" className="relative">
						<CiShoppingCart className="text-2xl" />
						<p className="absolute -top-2 -right-3 rounded font-light">
							{totalItems}
						</p>
					</Link>
					<Link to="/Newsletter">
						<CiUser className="text-2xl" />
					</Link>

					<button>
						<CiMenuBurger
							onClick={toggleMenu}
							className="text-2xl cursor-pointer"
						/>
					</button>

					{!isMenuOpen && (
						<article className="fixed h-full w-screen lg:hidden bg-black/30 backdrop-blur-sm top-0 right-0 z-50">
							<section className="text-black bg-white flex-col absolute top-0 right-0 h-screen p-6 gap-6 z-50 flex w-5/6 transition ease-in-out delay-200">
								<IoClose
									onClick={toggleMenu}
									className="text-3xl flex self-end mt-3 cursor-pointer"
								/>
								<article className="flex items-center justify-between mx-2">
									<p className="text-2xl">{newArrivals}</p>
									<HiOutlineChevronRight className="text-xl" />
								</article>
								<article className="flex items-center justify-between mx-2">
									<p className="text-2xl">{men}</p>
									<HiOutlineChevronRight className="text-xl" />
								</article>
								<article className="flex items-center justify-between mx-2">
									<p className="text-2xl">{women}</p>
									<HiOutlineChevronRight className="text-xl" />
								</article>
								<article className="flex items-center justify-between mx-2">
									<p className="text-2xl">{promotions}</p>
									<HiOutlineChevronRight className="text-xl" />
								</article>
								<p className="text-xl text-gray-500">
									{invitation}{" "}
									<a href="" className="font-semibold text-black">
										En savoir plus
									</a>
								</p>
								{user !== null ? (
									<>
										<article className="flex flex-col justify-center items-center gap-4 pt-6">
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
										<article className="flex flex-col items-center gap-4 pt-6">
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
