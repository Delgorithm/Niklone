import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useUserAuth } from "../context/AuthContext/UserAuthContext";

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
							label="current-password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							placeholder="Mot de passe..."
						/>
					</section>
					<button type="submit" onClick={handleSubmit}>
						S'enregistrer
					</button>

					<section>
						<p>
							J'ai déjà un compte{" "}
							<NavLink className="font-medium" to="/signin">
								Me connecter
							</NavLink>
						</p>
					</section>
				</form>
			</main>
			<Footer />
		</>
	);
};

export default SignUp;
