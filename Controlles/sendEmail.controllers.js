import nodemailer from "nodemailer";

export const sendEmail = async (req, res) => {
	const data = req.body.data;
	const toEmail = req.body.email;

	const transporter = nodemailer.createTransport({
		service: "gmail",

		auth: {
			user: "frontbackend94@gmail.com",
			pass: "Frontbackend94_10",
		},
	});

	const content = data.reduce((prev, next) => {
		return prev + `<div>${next.number} ${next.name} </div>`;
	}, `Products:`);

	const dataToString = JSON.stringify(content);

	const options = {
		from: "frontbackend94@gmail.com",
		to: toEmail,
		subject: "sending your favorite product",

		html: dataToString,
	};

	transporter.sendMail(options, (err, data) => {
		if (err) {
			res.status(400).json({ message: "Something went wrong. Try again" });
		} else {
			res.json({ message: "Email sent, awesome!" });
		}
	});
};
