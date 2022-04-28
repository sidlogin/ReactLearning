import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth, roles, accessToken] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth, roles, accessToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;