import React, { useContext, useEffect, useState } from 'react';

export const authContext = React.createContext({
    isAuthenticated: false, 
    user: null
}); 

const AuthContextProvider = authContext.Provider;

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
    }, [])

    const login = (user) => { 
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("access_token");
    }

    return (
        <AuthContextProvider value = {{user, login, logout}}>
            {props.children}
        </AuthContextProvider>
    )
}

export const useAuth = () => {
    
    return useContext(authContext);
}




export const AuthContextConsumer = authContext.Consumer;

 