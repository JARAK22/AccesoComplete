const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "secret";

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

  async login(data){
    const { email, password } = data;
    const usuario = await prisma.ususario.findFirst({
      where: {
        email,
      },
    });
    if(usuario){
      const passwordMatch = await bcrypt.compare(password, usuario.password);
      if(!passwordMatch){
        return { error: "Contraseña incorrecta" };
      }else{
        const token = jwt.sign({ id: usuario.id, email: usuario.email }, SECRET_KEY, { expiresIn: "1d" });
        return { usuario, token };
      }
    }
  },

  async logout(){
    return true;
  }
};

module.exports = AccesoServices;