import React, { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import About from "../../pages/about/About";
import avatarPng from "@/assets/avatar.png";
import avatarJpg from "../assets/avatar.jpg";
import Calendar from "../assets/calendar.svg";


export const App = () =>{
        const [count, setCount] = useState(0)
        const icremeant = () => setCount(prev => prev + 1);
    return(
        <div>
            <div>
                <img width={100} height={100} src={avatarPng} alt="" />
                {avatarPng}
            </div>
            <div>
                <img width={100} height={100}  src={avatarJpg} alt="" />
                {avatarJpg}
            </div>
            <div>
                <Calendar width={100} height={100} fill={'red'} />
            </div>
            <Link to={"./about"}>about</Link>
            <br />
            <Link to={"./shop"}>shop</Link>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={icremeant}>inceу</button>
            <About/>
        </div>
    );
};