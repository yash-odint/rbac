const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const register = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const role = req.body.role;

  const user = new User({
    email: email,
    password: password,
    role: role,
  });

  user.save();

  res.status(201).json({
    message: "User registered successfully",
  });
};

const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({
    email: email,
    password: password,
  });

  if (!user) {
    return res.status(201).json({
      message: "Wrong Email or Password",
    });
  }

  const token = jwt.sign(
    {
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET_KEY
  );

  res.cookie("token", token);

  return res.status(201).json({
    message: "User logged in successfully",
  });
};

module.exports = { register, login };
