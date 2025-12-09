import { createContext, useContext } from "react";
import { useState } from "react";

// crea el contexto, que es un objeto que contiene el valor del estado
const AuthContext = createContext();

// crea el provider, que es un componente que envuelve a los componentes que van a usar el contexto
const AuthProvider = ({children})=>{
    const [token, setToken] = useState(null);
    const [nombre, setNombre] = useState(null);
    // funciones para guardar y eliminar el token
    const guardarToken = (token) => {
        setToken(token);
    };

    const guardarNombre = (nombre) => {
        setNombre(nombre);
    };
    
    const eliminarToken = () => {
        setToken(null);
        setNombre(null);
    };
    
    // retorna el provider
    return (
        <AuthContext.Provider value={{ token, guardarToken, eliminarToken, nombre, guardarNombre }}>
            {children}
        </AuthContext.Provider>
    );
}

// crea el hook, que es una funcion que permite acceder al contexto desde cualquier componente
export const useAuth = () => useContext(AuthContext);
export default AuthProvider;