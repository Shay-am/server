import mongoose from "mongoose";

const beerSchema = new mongoose.Schema({
	name: {
		type: String,
	},

	image_url: {
		type: String,
	},
	tagline: {
		type: String,
	},
	ingredients: {
		type: String,
	},
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
});

export default mongoose.model("Beer", beerSchema);
