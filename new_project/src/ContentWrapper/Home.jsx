import React from "react";
import { Navigate, Link, Switch } from "react-router-dom";

function Home() {
    return (
      <div>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/user/list">UserList</Link></li>
            <li><Link to="/user/counter">Counter</Link></li>
            <li><Link to="/user/counterRx">Counter UseReducer</Link></li>
        </ul>
        
        
      </div>
    );
  }
  
  export default Home;
  