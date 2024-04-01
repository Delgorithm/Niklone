import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { HiOutlineChevronRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import navbarItems from "../assets/data/data.json";
import Button from "./Button";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { newArrivals, men, women, promotions, invitation } =
		navbarItems.navbarItems

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="p-4">
			<nav className="flex justify-between items-center">
				<figure className="pr-24">
					<Link to="/">
						<img
							src="./img/logo-no-background.svg"
							alt="Niklone's logo"
							className="w-20"
						/>
					</Link>
				</figure>
				<section className="flex gap-6">
					<CiSearch className="text-2xl cursor-pointer" />
					<Link to="/cart">
						<CiShoppingCart className="text-2xl" />
					</Link>
					<Link to="/user">
						<CiUser className="text-2xl" />
					</Link>
					<CiMenuBurger onClick={toggleMenu} className="text-2xl cursor-pointer" />

					{isMenuOpen && (
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
									{invitation} <a href="" className="font-semibold text-black">En savoir plus</a>
								</p>
								<Button label="Nous rejoindre"/>
								<Button label="S'identifier"/>
							</section>
						</article>
					)}
				</section>
			</nav>
		</header>
	);
};

export default Navbar;
