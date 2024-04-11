import React, { createContext, useEffect, useState, useContext } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../../api/Firebase/Firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
	const [user, setUser] = useState("");

	function signUp(email, password) {
		console.log("You sign up successfully");
		console.log(`Your auth is : ${auth}`);
		return createUserWithEmailAndPassword(auth, email, password);
	}

	function logIn(email, password) {
		console.log("You log in successfully");
		console.log(`Your auth is : ${auth}`);
		return signInWithEmailAndPassword(auth, email, password);
	}

	function logOut() {
		console.log("You log out successfully");
		console.log(`Your auth is : ${auth}`);
		return signOut(auth);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			console.log(`You are the user : ${user}`);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<userAuthContext.Provider value={{ user, signUp, logIn, logOut }}>
			{children}
		</userAuthContext.Provider>
	);
}

export function useUserAuth() {
	return useContext(userAuthContext);
}
