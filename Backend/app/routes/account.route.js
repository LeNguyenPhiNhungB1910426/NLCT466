const express = require("express");
const account = require("../controllers/account.controller");

const router = express.Router();

router.route("/login")
    .post(account.login);
router.route("/signup")
    .post(account.signup);

module.exports = router;
