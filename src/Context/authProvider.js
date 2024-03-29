import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';


export const AuthContext = createContext();

// context api
const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;