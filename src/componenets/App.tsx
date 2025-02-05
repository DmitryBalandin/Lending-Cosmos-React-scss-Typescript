import React, { useEffect, useState } from "react";
import cl from 'classnames';

import '@/styles/global.scss';
import '../styles/reset.scss';

import classes from "./App.module.scss";
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import {Home} from "@/pages/Home/Home";
import { Navigation } from "./Navigation";
import { RoadMapPage } from "@/pages/RoadMapPage/RoadMap-page";
import { FactionPage } from "@/pages/FactionsPage/Faction-page";
import { ColobrationsPage } from "@/pages/ColobrationsPage/ColobrationsPage";
import { FaqPage } from "@/pages/FAQ/FaqPage";
import { MembersPage } from "@/pages/Members/MembersPage";
import { links } from "./date/date";
import { FactionPageTopic } from "@/pages/FactionPageTopic/Faction-page-topic";


import { arrSize } from "./date/date";
import { NameSize } from "@/globalType";
import { constuctorResizeHandler, throttle } from "./date/helpers";

export const App = () => {
    const [calcSizeScreen, setcalcSizeScreen] = useState<NameSize>(
        () => {
            return arrSize.find(item => item.size >= window.innerWidth).name;
        })

    let resizeHandler = constuctorResizeHandler(arrSize, setcalcSizeScreen);
    resizeHandler = throttle(resizeHandler, 200);

    useEffect(() => {
        window.addEventListener('resize', resizeHandler);
        resizeHandler();
        return () => { window.removeEventListener('resize', resizeHandler) };
    }, [])

    return (

        < >


            <BrowserRouter>
                <div className={cl(classes.navigate)} >
                    <Navigation links={links} />
                </div>
                <Home calcSizeScreen={calcSizeScreen} />
                <Routes>
                    <Route path="/" element={<FactionPage />} />
                    <Route path="/:id" element={<FactionPageTopic calcSizeScreen={calcSizeScreen}  />} />
                </Routes>
                <RoadMapPage />
                <ColobrationsPage />
                <FaqPage />
                <MembersPage  calcSizeScreen={calcSizeScreen}/>
            </BrowserRouter>


        </>
    );
};


