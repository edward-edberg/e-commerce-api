const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
// const { BadRequestError, UnauthenticatedError } = require("../errors");
const CustomError = require("../errors");

const register = async (req, res) => {
  const { email } = req.body;
  const emailAlreadyExists = await User.findOne();
  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError("Email already exists.");
  }
  const user = await User.create(req.body);
  // res.send("register");
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send("login");
};

const logout = async (req, res) => {
  res.send("logout");
};

module.exports = {
  register,
  login,
  logout,
};
