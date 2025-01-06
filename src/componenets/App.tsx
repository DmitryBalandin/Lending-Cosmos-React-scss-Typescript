import React, { useRef, useState } from "react";

import '@/styles/global.scss';
import '../styles/reset.scss';

import classes from "./App.module.scss";
import { Link, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/Home";
import { Navigation } from "./Navigation";
import { RoadMapPage } from "@/pages/RoadMapPage/RoadMap-page";
import { FactionPage } from "@/pages/FactionsPage/Faction-page";
import { ColobrationsPage } from "@/pages/ColobrationsPage/ColobrationsPage";
import { FaqPage } from "@/pages/FAQ/FaqPage";
import { MembersPage } from "@/pages/Members/MembersPage";
import { links } from "./date/date";
import { FactionPageTopic } from "@/pages/FactionPageTopic/Faction-page-topic";


export const App = () => {


    return (

        < >
            
            {/* <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route path="" element={<Home/>}/>
                    <Route path="Factiion" element={<FactionPage />} />
                    <Route path="/Roadmap" element={<RoadMapPage />} />

                </Route>

            </Routes> */}
            <Navigation links={links}/>
            {/* <Home  /> 
             <FactionPage />
            <RoadMapPage />
            <ColobrationsPage/>
            <FaqPage/>
            <MembersPage/> */}
            <FactionPageTopic/>
            

        </>
    );
};


