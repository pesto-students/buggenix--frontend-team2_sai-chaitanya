import React, { useContext, useState } from 'react';

export const authContext = React.createContext({
    isAuthenticated: false, 
    user: null
}); 

const AuthContextProvider = authContext.Provider;

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null);

    const login = (user) => {
        setUser(user);
    }

    const logout = () => {
        setUser(null);
    }

    console.log(user, "user")
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

 