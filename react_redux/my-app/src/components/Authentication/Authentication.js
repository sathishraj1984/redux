import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userType, setUserType] = useState('');
    const userDetailsFunc = (getUserDet) => {
        console.log("getUserDet++++++",getUserDet);
        
        if(getUserDet.length>0){
            setUserType(getUserDet[0].userType)
        }        
    }

    const userLogoutFunc = () => {
        setUserType('');        
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, userType, userDetailsFunc, userLogoutFunc}}>
            {children}
        </AuthContext.Provider>
    )

}

// Custom hook to use the auth context
export const useAuth = () => {
    return useContext(AuthContext);
  };