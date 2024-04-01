import React from "react";
import cartItems from "../assets/data/data.json";
import { Link } from "react-router-dom";

const User = () => {
	const { title, information } = cartItems.cartItems;
	return (
		<article className="p-6">
      <Link to="/">
        <figure className="flex justify-center mb-14">
          <img
            src="img/logo-no-background.svg"
            alt="Niklone's logo"
            className="w-24"
          />
        </figure>
      </Link>
			<h1 className="text-2xl">{title}</h1>
			<form action="#" className="my-8">
				<label htmlFor="username">Email</label>
				<input
					type="email"
					placeholder="Email*"
          name="credential"
          id="username"
					className="py-3 px-3 w-full border-[0.5px] border-black rounded-lg"
          autoComplete="username"
          aria-required="true"
          aria-describedby="username-input-aria-description"
				/>
			  <p className="mt-8">{information}</p>
        <button className="mt-8 bg-black text-white w-full h-12 rounded-full">Continuer</button>
			</form>
		</article>
	);
};

export default User;
