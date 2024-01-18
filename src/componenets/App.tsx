import React, { useState } from "react";
import '../styles/reset.scss';
import '../styles/global.scss';
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import Home from "@/pages/Home/Home";
import { Navigation } from "./Navigation";
import { FactionPage } from "@/pages/FactionsPage/Faction-page";
import { RoadMapPage } from "@/pages/RoadMapPage/RoadMap-page";
 


export const App = () => {

    return (
        <>
            <Navigation/>
            <Home />
            <FactionPage/>
            <RoadMapPage/>
        </>
    );
};