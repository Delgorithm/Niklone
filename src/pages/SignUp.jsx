import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useUserAuth } from "../context/AuthContext/UserAuthContext";
import Button from "../components/Button";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const { signUp } = useUserAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		try {
			await signUp(email, password);
			navigate("/");
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<>
			<Navbar />
			<main>
				<h1 className="text-center text-2xl my-4 font-medium">
					Se créer un compte
				</h1>
				<form onSubmit={handleSubmit} className="mx-6">
					<section className="flex flex-col">
						<label htmlFor="email-address" className="text-md font-medium">
							Email
						</label>
						<input
							type="email"
							label="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							placeholder="Email..."
							className="border my-2 p-2 rounded-xl"
						/>
					</section>
					<section className="flex flex-col">
						<label htmlFor="password" className="text-md font-medium">
							Mot de passe
						</label>
						<input
							type="password"
							label="current-password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							placeholder="Mot de passe..."
							className="border my-2 p-2 rounded-xl"
						/>
					</section>
					<article className="flex justify-center py-5">
						<Button
							label="Se connecter"
							color="black"
							text="white"
							onClick={handleSubmit}
							type="submit"
						/>
					</article>
					<section className="flex justify-around items-center text-center mx-6 pb-10">
						<div className="w-16 h-[0.5px] bg-black"></div>
						<small className="flex flex-col text-xs">
							J'ai déjà un compte
							<NavLink className="text-sm font-medium underline" to="/signin">
								Se connecter
							</NavLink>
						</small>
						<div className="w-16 h-[0.5px] bg-black"></div>
					</section>
				</form>
			</main>
			<Footer />
		</>
	);
};

export default SignUp;
