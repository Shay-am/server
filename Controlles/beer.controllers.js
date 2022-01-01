import beerModel from "../Models/Beer.js";

export const addBeer = async (req, res, next) => {
	const newBeer = new beerModel({
		name: req.body.name,
		image_url: req.body.image_url,
		tagline: req.body.tagline,
		ingredients: req.body.ingredients,
		user_id: req.user._id,
	});

	try {
		const savebeer = await newBeer.save();

		res.status(200).send({ data: savebeer, message: "Beer added to dataBase" });

		return next();
	} catch (error) {
		res.status(401).json({ error: "Beer cannnot added to dataBase" });
		return next();
	}
};

export const getBeers = async (req, res, next) => {
	try {
		const beers = await beerModel.find({ user_id: req.user._id }).exec();

		res.status(200).json({ data: beers, messeage: "Succes" });

		return next();
	} catch (error) {
		res
			.satus(400)
			.json({ error: error, message: "We can not find any beer catch" });
		return next();
	}
};
