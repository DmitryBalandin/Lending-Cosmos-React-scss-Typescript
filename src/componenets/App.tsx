import React, { useRef, useState } from "react";

import '@/styles/global.scss';
import '../styles/reset.scss';

import classes from "./App.module.scss";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
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


            <BrowserRouter>

                <Navigation links={links} />
                <Home />
                <Routes>
                    <Route path="/" element={<FactionPage />} />
                    <Route path="/:id" element={<FactionPageTopic />} />
                </Routes>
                <RoadMapPage />
                <ColobrationsPage />
                <FaqPage />
                <MembersPage />
            </BrowserRouter>


        </>
    );
};


