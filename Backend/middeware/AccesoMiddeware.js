const jwt = require("jsonwebtoken");

const SECRET_KEY = "secret";
const AccesoMiddeware = {
    
    verificarToken(req, res, next) {
        const header = req.headers.authorization;
        if (!header) {
            return res.status(401).json({ mensaje: "Token no proporcionado" });
        }
        const token = header.split(" ")[1];
        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).json({ mensaje: "Token no válido" });
            }
            req.user = decoded;
            next();
        });
    }
}

module.exports = AccesoMiddeware;
