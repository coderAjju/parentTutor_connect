import jwt from "jsonwebtoken";
const generateTokenAndSaveInCookie = async (res, id) => {
  // Generate a token
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1h", // Token expires in 1 hour
  });

  // Set the token in a cookie
  res.cookie("authToken", token, {
    httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
    secure: process.env.NODE_ENV === "production", // Use secure cookies in production
    sameSite: "strict", // Prevents CSRF attacks
    maxAge: 3600000, // 1 hour in milliseconds
  });
};

export default generateTokenAndSaveInCookie;
