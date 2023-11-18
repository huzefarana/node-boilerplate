const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = async (req, res, next) => {
  const fullToken = req.header("Authorization");
  if (!fullToken) return res.status(401).send({ message: "Access denied." });
  const token = fullToken.split(" ")[1];
  try {
    const verified = jwt.verify(token, process.env.TOKEN_KEY);
    let user = await User.findById(verified._id);
    req.user = user;
    next();
  } catch (error) {
    res.status(400).send({ message: "Invalid Token" });
  }
};