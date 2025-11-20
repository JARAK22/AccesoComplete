const AccesoServices = require("../services/accesoServices");

const AccesoController = {
  async register(req, res) {
    const { nombre, email, password } = req.body;
    const newUsuario = await AccesoServices.register({ nombre, email, password });
    res.status(201).json({mensaje: "Usuario creado", newUsuario});
  },
  async login(req, res) {
    const { email, password } = req.body;
    const usuario = await AccesoServices.login({ email, password });
    res.status(200).json(usuario);
  },
  async logout(req, res) {
    const { email, password } = req.body;
    const usuario = await AccesoServices.logout({ email, password });
    res.status(200).json(usuario);
  },
};

module.exports = AccesoController;