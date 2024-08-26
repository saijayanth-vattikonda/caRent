const User = require("../models/user");
const bcrypt = require("bcryptjs");

async function saveChangesFunction(req, res) {
  const _id = req.user.id;

  const {
    firstName,
    lastName,
    email,
    password: plainTextPassword,
    phone,
  } = req.body;

  if (!plainTextPassword || typeof plainTextPassword !== "string") {
    return res.json({ status: "error", error: "Invalid password" });
  }

  if (plainTextPassword.length < 5) {
    return res.json({
      status: "error",
      error: "Password too small. Should be atleast 6 characters",
    });
  }

  const updateFields = {};
  if (firstName) updateFields.firstName = firstName;
  if (lastName) updateFields.lastName = lastName;
  if (email) updateFields.email = email;
  if (phone) updateFields.phone = phone;
  if (plainTextPassword) {
    // Hash the plain text password before updating it
    const password = await bcrypt.hash(plainTextPassword, 10);
    updateFields.password = password;
  }

  try {
    await User.updateMany(
      { _id },
      {
        $set: updateFields,
      }
    );

    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: err });
  }
}

module.exports = {
  saveChangesFunction,
};
