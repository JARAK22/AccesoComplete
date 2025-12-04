const express = require("express");
const router = express.Router();
const AccesoController = require("../controllers/AccesoController");
const AccesoMiddeware = require("../middeware/AccesoMiddeware");

router.post("/register", AccesoController.register);
router.post("/login", AccesoController.login);
router.post("/logout", AccesoController.logout);
router.get("/prueba", AccesoMiddeware.verificarToken, AccesoController.prueba);

module.exports = router;