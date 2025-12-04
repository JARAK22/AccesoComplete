import { useState } from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function login(e) {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
        const data = await response.json();
        console.log(data);
        
        navigate("/pruebas");
    };
    return (
        <div className="login">
            <NavBar />
            <h1>Login</h1>
            <form onSubmit={login}>
                <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;