require("dotenv").config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const PORT = process.env.PORT || 4000;

const app = express();

// Utilisation du middleware cors pour gérer les en-têtes CORS
app.use(cors());

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello world from backend!");
});

app.post("/checkout", async (req, res) => {
	console.log("Requête POST reçue sur /checkout :", req.body); // Ajoute un log pour afficher le corps de la requête
	const items = req.body.items;

	let lineItems = [];
	items.forEach((item) => {
		lineItems.push({
			price: item.id,
			quantity: item.quantity,
		});
	});

	try {
		const session = await stripe.checkout.sessions.create({
			line_items: lineItems,
			mode: "payment",
			success_url: `${process.env.VERCEL_URL}/success`,
			cancel_url: `${process.env.VERCEL_URL}/cancel`,
		});

		console.log("Session créée avec succès :", session); // Ajoute un log pour afficher la session créée

		res.send(
			JSON.stringify({
				url: session.url,
			})
		);
	} catch (error) {
		console.error(
			"Une erreur s'est produite lors de la création de la session :",
			error
		); // Ajoute un log pour afficher les erreurs

		res
			.status(500)
			.send("Une erreur s'est produite lors du traitement de la requête.");
	}
});

app.listen(PORT, "0.0.0.0", () => {
	console.log(`Serveur en cours d'écoute sur le port ${PORT}`);
});

module.exports = app;
