import UserModel from "../Models/User.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
	const { email, password } = req.body;

	const emailExist = await UserModel.findOne({ email });
	if (emailExist) {
		return res.status(400).json({ err: "Email already exist" });
	}

	const salt = await bcrypt.genSaltSync(10);
	const hashedpassword = await bcrypt.hashSync(password, salt);

	const newUser = new UserModel({
		name: req.body.name,
		email: req.body.email,
		password: hashedpassword,
	});

	try {
		const saveUser = await newUser.save();
		return res.status(200).send({ message: "User added to database" });
	} catch (error) {
		return res.status(401).send({ message: "User cannot added to database" });
	}
};
