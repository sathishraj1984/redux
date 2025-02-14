import { useEffect, useState } from "react";
import useCounter from "./hooks/useCounter";


function CustomPage({initialCount}) {  
  const {count, increment, decrement} = useCounter(initialCount);
    return (
      <div>
        <button onClick={decrement}>Decrement</button>
        Count is {count}
        <button onClick={increment}>Increment</button>
      </div>      
    );
}

export default CustomPage;
