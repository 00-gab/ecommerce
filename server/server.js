require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(express.json())

app.post("/create-charge", async (req, res) => {
// if customer id dont exist in user db, create new customer instance then save it to user's data 
	const { token, payload } = req.body;
	try {
		const customer = await stripe.customers.create({
		email: payload.email,
		source: token.id
		})

		const charge = await stripe.charges.create({
		amount: (payload.price * payload.quantity) * 100,
		currency: "usd",
		customer: customer.id,
		description: `${payload.quantity}x ${payload.name}`,
		});
		res.json(charge)
	} catch (err) {
		res.status(400).json({ error: { message: err.message } });
	}
});

app.listen(process.env.PORT, () => console.log(`Node server listening on port ${process.env.PORT}!`));