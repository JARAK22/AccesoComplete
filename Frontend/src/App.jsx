import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Pruebas from "./components/Pruebas";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div>
            <Router> 
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/pruebas" element={<Pruebas />} />
                </Routes>
            </Router>
        </div>
    );
} 

export default App;
