const express = require("express");
const router = express.Router();
const AccesoController = require("../controllers/AccesoController");

router.post("/register", AccesoController.register);
router.post("/login", AccesoController.login);
router.post("/logout", AccesoController.logout);

module.exports = router;