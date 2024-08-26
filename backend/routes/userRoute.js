const express = require("express");
const router = express.Router();
const cookieJWTAuth = require("../middleware/cookieJWTAuth");

const signup = require("../handlers/userAuth");
const login = require("../handlers/userAuth");
const saveChanges = require("../handlers/saveChanges");
const logout = require("../handlers/userAuth");

router.post("/signup", signup.signupFunction);
router.post("/login", login.loginFunction);
router.post("/logout", logout.logoutFunction);

router.post(
  "/saveChanges",
  cookieJWTAuth.cookieJWTAuth,
  saveChanges.saveChangesFunction
);

module.exports = router;
