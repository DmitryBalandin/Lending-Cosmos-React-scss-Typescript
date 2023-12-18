import React, { useState } from "react";
import '../styles/reset.scss';
import '../styles/global.scss';
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import Home from "@/pages/Home/Home";


export const App = () => {

    return (
        <>
            <Home />
        </>
    );
};