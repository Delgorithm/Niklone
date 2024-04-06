import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../api/Firebase/Firebase";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onLogin = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				navigate("/");
				console.log(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	};

	return (
		<>
			<Navbar />
			<main>
				<form>
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
					<button type="submit" onClick={onLogin}>
						Se connecter
					</button>
				</form>
				<p>
					J'ai pas encore de compte: 
					<NavLink className="	font-bold" to="/register">Se créer un compte</NavLink>
				</p>
			</main>
			<Footer />
		</>
	);
};

export default Login;
