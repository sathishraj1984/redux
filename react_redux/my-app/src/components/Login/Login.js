import axios from "axios";
import React, {useState, useEffect, useContext} from "react";
import { AuthContext } from "../Authentication/Authentication";
import { useNavigate } from "react-router-dom";
const Login = () => {
    //console.log("getAuthContext====",getAuthContext)
    const { userDetailsFunc } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [userDetails, setUserDetails] = useState('');
    const navigate = useNavigate()

    
    const handleLoginChange = (event) => {
        setUsername(event.target.value);
    }
    const handleLogin = async () => {
        const url = "/User.json";    
       
            await axios.get(url).then((response)=> {
                console.log(response,"++++===++++++",response)
                const getFinalRes = response.data.filter((item, index)=> {
                    console.log(item.username,"++++++++++",username);
                    return item.username === username;
                });
                console.log("getFinalRes===",getFinalRes)
                if(getFinalRes.length>0) {
                    setUserDetails(getFinalRes);
                    userDetailsFunc(getFinalRes)
                }                
                navigate('/home');
            }).catch(function (error) {
                // handle error
                console.log(error);
            })

    }
    
    

    return(
        <>
               
                    <input type="username" name="username" onChange={handleLoginChange} />
                    <button onClick={handleLogin} >Submit</button>
               
            
        </>
    );

}

export default Login;