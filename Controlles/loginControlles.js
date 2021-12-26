import UserModel from "../Models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res, next) => {
	try {
		const user = await UserModel.findOne({ name: req.body.name });
		if (!user) return res.status(400).json("Invalid login");

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword) {
			return res.status(400).json({ err: "invalid Password!!" });
		}

		const token = jwt.sign(
			{
				_id: user._id,
				name: user.name,
			},
			process.env.JWT_SECRET,
			{ expiresIn: 3000 }
		);
		res.status(201).json({
			token: token,
		});
	} catch (error) {
		res.status(400).json({ error: "UPS You can not logged in!!" });
	}
};
