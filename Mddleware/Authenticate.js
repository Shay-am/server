import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
	const authHeader = req.headers["authorization"];
	const [type, token] = authHeader.split(" ");

	if (type !== "Bearer" && typeof token === "undefined") {
		res.status(401).send({ message: "It is wrong with headers" });
		next();
	}

	jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
		if (err) return res.sendStatus(403);

		req.user = user;
		next();
	});
};
