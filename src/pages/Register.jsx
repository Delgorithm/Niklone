import React, { useState } from "react";
import {
	getAuth,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../api/Firebase/Firebase";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Register = () => {
	const navigate = useNavigate();
	const provider = new GoogleAuthProvider();
	const auth = getAuth();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSubmit = async (e) => {
		e.preventDefault();
		await createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
				navigate("/");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	};

	const onSubmitGoogleAuth = async (e) => {
		e.preventDefault();
		await signInWithPopup(auth, provider)
			.then((result) => {
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				const user = result.user;
				navigate("/");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				const email = error.customData.email;
				const credential = GoogleAuthProvider.credentialFromError(error);
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
							label="current-password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							placeholder="Mot de passe..."
						/>
					</section>
					<button type="submit" onClick={onSubmit}>
						S'enregistrer
					</button>

					<section>
						<p>
							J'ai déjà un compte <NavLink to="/login">Me connecter</NavLink>
						</p>
					</section>
				</form>
			</main>
			<Footer />
		</>
	);
};

export default Register;
