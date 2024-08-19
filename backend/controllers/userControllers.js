const User = require("./../models/userModel");
const asyncHandler = require("express-async-handler");
const AppError = require("./../utils/AppError");

exports.getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    users,
  });
});

exports.getUserById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return next(new AppError(400, "Please provide the user id"));
  }
  const user = await User.findById(id);
  res.status(200).json({
    status: "success",
    user,
  });
});
