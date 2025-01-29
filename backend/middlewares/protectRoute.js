import jwt from "jsonwebtoken";
import TokenBlacklist from "../models/blacklistToken.model.js";
const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.authToken;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized access." });
    }

    const isBlacklisted = await TokenBlacklist.findOne({ token });
    if (isBlacklisted) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Verify the token
    const decode = await jwt.verify(token, process.env.JWT_SECRET);

    if (!decode) {
      return res.status(401).json({ message: "Token invalid" });
    }

    req.id = decode.id; // token contains the user ID
    // If the user is authenticated, proceed to the next middleware or route handler
    next();
  } catch (error) {
    next(error);
  }
};

export default isAuthenticated;
