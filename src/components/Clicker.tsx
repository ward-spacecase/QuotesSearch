import { useState } from "react";

export const Clicker = () => {
    const [count, setCount] = useState(0);
    return(
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount((current)=>current-1)}>Decrement</button>
        </div>
    );
}