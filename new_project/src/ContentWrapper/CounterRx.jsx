import React, { useReducer, useState } from "react";

const CounterRx = () => {
  const reducerFn = (state, action) => {
    switch(action.type) {
      case "increment":
          return state+1;
      case "decrement":
          return state-1;
      case "incrementByAmount":
          return state+action.amt;
      default:
          return state
    }
  }

  
  const [count, setCount] = useState(0);
  const [todos, dispatch] = useReducer(reducerFn, count)
  return (
      <div>
        <input type="button" name="incrementBy" value="Increment" onClick={() => dispatch({type:"increment"})}/>
        {todos}
        <input type="button" name="decrementBy" value="Decrement" onClick={() => dispatch({type:"decrement"})}/>

        <br/>
        <br/>
        <input type="button" name="incrementByAmount" value="incrementByAmount" onClick={() => dispatch({type:"incrementByAmount", amt:10})}/>
      </div>
    );
  }
  
  export default CounterRx;
  