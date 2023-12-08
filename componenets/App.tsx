import React, { useState } from "react";
import './App.css'

export const App = () =>{
        const [count, setCount] = useState(0)
        const icremeant = () => setCount(prev => prev + 1);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={icremeant}>inc</button>
        </div>
    );
};