import React, {useState, useEffect, useContext} from "react";
import { AuthContext } from "../Authentication/Authentication";
const Logout = () => {
    const { userLogoutFunc } = useContext(AuthContext);

    const handleLogout = () => {
        
        userLogoutFunc();
    }
    return(
        <>
            <button onClick={handleLogout}>Logout</button>
        </>
    );

}

export default Logout;