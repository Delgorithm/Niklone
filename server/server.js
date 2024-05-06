require("dotenv").config();
const express = require("express");
let cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
	console.log(req.body);
	const items = req.body.items;

	let lineItems = [];
	items.forEach((item) => {
		lineItems.push({
			price: item.id,
			quantity: item.quantity,
		});
	});

	const session = await stripe.checkout.sessions.create({
		line_items: lineItems,
		mode: "payment",
		success_url: `${process.env.VERCEL_URL}/success`,
		cancel_url: `${process.env.VERCEL_URL}/cancel`,
	});

	res.send(
		JSON.stringify({
			url: session.url,
		})
	);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
