const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const RouteAccesso = require("./routes/AccesoRoutes");
const cors = require("cors")

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

app.use(express.json());
app.use("/api", RouteAccesso);

app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:5000");
});