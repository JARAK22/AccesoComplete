// a probar permisos
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function Pruebas() {
    const navigate = useNavigate();
    useEffect(() => {
        traerDatos();
    }, []);

    async function traerDatos() {
        const response = await fetch("http://localhost:5000/api/prueba");
        const data = await response.json();
        console.log(data);
    }

    return (
        <div>
            <NavBar />
            <h1>Pruebas</h1>
        </div>
    );
}

export default Pruebas;