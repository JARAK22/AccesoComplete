// a probar permisos
import { useEffect } from "react";
import NavBar from "./NavBar";
import { useAuth } from "../context/AuthContext";

function Pruebas() {
    const { token, nombre } = useAuth();
    useEffect(() => {
        traerDatos();
    }, []);

    async function traerDatos() {
        const response = await fetch("http://localhost:5000/api/prueba", 
            {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );
        const data = await response.json();
        console.log(data);
    }

    return (
        <div className="pruebas">
            <NavBar />
            <h1>Pruebas</h1>
            <p>Nombre: {nombre}</p>
        </div>
    );
}

export default Pruebas;