import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
