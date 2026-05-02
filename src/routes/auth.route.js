const express = require("express");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const isUser = await userModel.findOne({ email });
  if (isUser) {
    return res.status(409).json({
      msg: "email address is already in use",
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    name,
    email,
    password,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token);

  res.status(201).json({
    msg: "user registered successfully...",
    user,
  });
});

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(401).json({
      msg: "invalid email",
    });
  }

  const correctPassword = await bcrypt.compare(password, user.password);
  if (!correctPassword) {
    return res.status(401).json({
      msg: "invalid password",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token);

  res.status(200).json({
    msg: "user logged in successfully",
    user,
  });
});

authRouter.get("/get-me", async (req, res) => {
  const token = req.cookies.token;
  const decoded = await jwt.verify(token, process.env.JWT_SECRET);
  const user = await userModel.findById(decoded.id);
  res.status(200).json({
    user,
  });
});

module.exports = authRouter;
