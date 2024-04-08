import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useUserAuth } from "../context/AuthContext/UserAuthContext";
import SignOut from "./SignOut";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const { logIn } = useUserAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		try {
			await logIn(email, password);
			navigate("/");
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<>
			<Navbar />
			<main>
				<form onSubmit={handleSubmit}>
					<section>
						<label htmlFor="email-address">Email</label>
						<input
							type="email"
							label="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							placeholder="Email..."
						/>
					</section>
					<section>
						<label htmlFor="password">Mot de passe</label>
						<input
							type="password"
							label="Create password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							placeholder="Mot de passe..."
						/>
					</section>
					<button type="submit" onClick={handleSubmit}>
						Se connecter
					</button>
				</form>
				<p>
					J'ai pas encore de compte:
					<NavLink className="font-medium" to="/signup">
						Se créer un compte
					</NavLink>
				</p>
				<SignOut />
			</main>
			<Footer />
		</>
	);
};

export default SignIn;
