import { useState } from "react";
import NavBar from "./NavBar";
// url = http://localhost:3000/api/register
// method = POST
// body = { username, email, password }

function Register() {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function registrar(e) {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nombre, email, password }),
        })
        const data = await response.json();
        console.log(data);
    };
    return (
        <div className="register">
            <NavBar />
            <h1>Register</h1>
            <form onSubmit={registrar}>
                <input type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}/>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;