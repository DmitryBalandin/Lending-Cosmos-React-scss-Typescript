import React, { useState } from "react";
import classes from "./App.module.scss";

export const App = () =>{
        const [count, setCount] = useState(0)
        const icremeant = () => setCount(prev => prev + 1);
    return(
        <div>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={icremeant}>inceу</button>
        </div>
    );
};