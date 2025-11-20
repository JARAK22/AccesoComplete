const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const bcrypt = require("bcryptjs");

const AccesoServices = {
  async register(data){
    const { nombre, email, password } = data;
    const passwordHash = await bcrypt.hash(password, 10);
    const newUsuario = await prisma.ususario.create({
      data: {
        nombre,
        email,
        password: passwordHash,
      },
    });
    return newUsuario;
  },

  async login(){

  },

  async logout(){

  }
};

module.exports = AccesoServices;