import React from "react";
export default function Counter(){
    let [count, setCount] = React.useState(1)
    return(
        <>
            <h1>Count:{count}</h1>
            <button onClick={() => setCount(count+1)}>Increase</button>
            <br />
            <br />
            <button onClick={() => setCount(count-1)}>Decrease</button>
        </>
    )
}