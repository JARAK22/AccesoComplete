import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Pruebas from "./components/Pruebas";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import AuthProvider from "./context/AuthContext";
import { useNavigate } from "react-router-dom";

function App() {
    return (
        <div>
            <Router> 
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/pruebas" element={<RequireAuth><Pruebas /></RequireAuth>} />
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    );
} 

export default App;

function RequireAuth({ children }) {
    const { token } = useAuth();
    const navigate = useNavigate();
    if (!token) {
        navigate("/login");
    }
    return children;
}
