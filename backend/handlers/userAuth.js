/* eslint-disable @typescript-eslint/no-unused-vars */
require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

async function signupFunction(req, res) {
  try {
    const {
      firstName,
      lastName,
      username,
      email,
      password: plainTextPassword,
      phone,
    } = req.body;

    console.log(username);

    const usernameAlreadyExists = await User.findOne({
      username: req.body.username,
    });
    // const emailAlreadyExists = await User.findOne({
    //   emailID: req.body.emailID,
    // });
    const phoneAlreadyExists = await User.findOne({
      phone: req.body.phone,
    });

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.json({ status: "error", error: "Invalid Email" });
    }

    var phoneRegex = /^\d{10}$/;

    if (!phoneRegex.test(phone)) {
      return res.json({ status: "error", error: "Invalid Phone Number" });
    }

    var flag = 0;
    if (usernameAlreadyExists) {
      return res.json({ status: "error", error: "Username already taken" });
    } else if (phoneAlreadyExists) {
      return res.json({ status: "error", error: "Phone Number already taken" });
    }

    if (!plainTextPassword || typeof plainTextPassword !== "string") {
      return res.json({ status: "error", error: "Invalid password" });
    }

    if (plainTextPassword.length < 5) {
      return res.json({
        status: "error",
        error: "Password too small. Should be atleast 6 characters",
      });
    }

    const password = await bcrypt.hash(plainTextPassword, 10);

    try {
      if (flag == 0) {
        const response = await User.create({
          firstName,
          lastName,
          username,
          email,
          password,
          phone,
        });
        console.log("User Created Successfully: ", response);
        return res.json({ status: "ok" });
      }
    } catch (error) {
      if (error.code === 11000) {
        return res.json({
          status: "error",
          error: "Username Already Exists!",
        });
      }
      throw error;
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({
      message: err.message,
    });
  }
}

//Login using regNo and Password
async function loginFunction(req, res) {
  const { username, password } = req.body;

  const user = await User.findOne({ username }).lean();

  if (!user) {
    return res.json({
      status: "error",
      error: "Invalid Username/Password",
    });
  }

  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      JWT_SECRET,
      {
        expiresIn: "1min",
      }
    );

    res.cookie("token", token, {
      httpOnly: true,
    });

    return res.status(200).json({
      status: "ok",
      redirectTo: "/results.html",
      username: user.username,
    });
  }

  res.json({ status: "error", error: "Invalid Username/Password" });
}

async function logoutFunction(req, res) {
  res.clearCookie("token");

  return res.status(200).json({
    status: "ok",
    redirectTo: "/index.html",
  });
}

module.exports = {
  signupFunction,
  loginFunction,
  logoutFunction,
};
