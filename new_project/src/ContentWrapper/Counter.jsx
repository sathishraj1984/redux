import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../features/counter/counterSlice";
const Counter = () => {
    const count = useSelector((state) => { return state.counterReducer.value; });
    const dispatch = useDispatch();
    return (
      <div>
        <input type="button" name="incrementBy" value="Increment" onClick={() => dispatch(increment())}/>
        {count}
        <input type="button" name="decrementBy" value="Decrement" onClick={() => dispatch(decrement())}/>

        <br/>
        <br/>
        <input type="button" name="incrementByAmount" value="incrementByAmount" onClick={() => dispatch(incrementByAmount(10))}/>
      </div>
    );
  }
  
  export default Counter;
  