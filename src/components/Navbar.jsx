import React, { useState } from "react";
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

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(true);
	const [isSearchOpen, setIsSearchOpen] = useState(false);

	const { newArrivals, men, women, promotions, invitation } =
		navbarItems.navbarItems

	const { popular, popularFirst, popularSecond, popularThird, popularFourth } =
		searchItems.searchItems;

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const toggleSearch = () => {
		setIsSearchOpen(!isSearchOpen);
	};

	

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
					{/*  Start : Search bar */}
					<CiSearch
						onClick={toggleSearch}
						className="text-2xl cursor-pointer"
					/>
					{isSearchOpen && (
						<article className="fixed h-full w-screen lg:hidden top-0 right-0">
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
										<li className="text-xl font-medium hover:opacity-65">{popularFirst}</li>
										<li className="text-xl font-medium hover:opacity-65">{popularSecond}</li>
										<li className="text-xl font-medium hover:opacity-65">{popularThird}</li>
										<li className="text-xl font-medium hover:opacity-65">{popularFourth}</li>
									</ul>
								</section>
							</section>
						</article>
					)}
					{/*  End : Search bar */}

					<Link to="/cart">
						<CiShoppingCart className="text-2xl" />
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
						<article className="fixed h-full w-screen lg:hidden bg-black/30 backdrop-blur-sm top-0 right-0 ">
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
								<Link to="/signup">
									<Button color="black" text="white" label="Nous rejoindre" />
								</Link>
								<Link to="/signin">
									<Button color="" label="S'identifier" />
								</Link>
							</section>
						</article>
					)}
				</section>
			</nav>
		</header>
	);
};

export default Navbar;
