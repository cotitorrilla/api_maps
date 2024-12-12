import jwt from "jsonwebtoken";

process.loadEnvFile();

const JWT_SECRET = process.env.JWT_SECRET;

const authToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ error: "Authorization token is missing or malformed." });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, JWT_SECRET, (error, user) => {
    if (error) {
      return res
        .status(403)
        .json({ error: "Forbidden: Invalid or expired token." });
    }

    req.user = user;

    next();
  });
};

export { authToken };
