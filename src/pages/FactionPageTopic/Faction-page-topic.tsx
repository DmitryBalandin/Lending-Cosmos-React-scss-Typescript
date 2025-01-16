import cl from "classnames";
import styles from './styles.module.scss';
import React, { useState, useEffect } from "react";
import { SvgButton } from "@/componenets/SvgButton";
import { RangeSvg } from "@/componenets/RangeSvg";
import { ListBuildungs } from "@/componenets/ListBuildungs";

import { handlerMouse, constuctorResizeHandler, throttle } from "./helpers/helpers";
import { arrBackground, describePage, arrSize, arrImage } from "./date/date";
import { NameSize } from "@/globalType";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


interface FactionPageTopic { };

export const FactionPageTopic: React.FC<FactionPageTopic> = ({ }) => {

    const [calcSizeScreen, setcalcSizeScreen] = useState<NameSize>(
        () => {
            return arrSize.find(item => item.size >= window.innerWidth).name;
        })


    const [isActiveButton, setIsActiveButton] = useState<boolean>(false);

    const [positionCarusel, setPositionCarusel] = useState<number>(0)

    const handleMouseEnter = handlerMouse(setIsActiveButton, true);
    const handleMouseLeave = handlerMouse(setIsActiveButton, false);

    let resizeHandler = constuctorResizeHandler(arrSize, setcalcSizeScreen);
    resizeHandler = throttle(resizeHandler, 200);

    useEffect(() => {
        window.addEventListener('resize', resizeHandler);
        resizeHandler();
        return () => { window.removeEventListener('resize', resizeHandler) };
    }, [])

    const { id } = useParams()

    return (
        <section className={
            cl(styles.section,
                styles.sectionFactionPageTopic,
                `${styles.sectionFactionPageTopic}${arrBackground[+id]}`)
        } >
            <div className={cl(styles.sectionNavButtons)}>
                <div>
                    <SvgButton onClick={() => { }}>Close
                        <Link to="/" ></Link>
                    </SvgButton>
                </div>
                <div onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
                    <SvgButton onClick={() => { }}>
                        <div className={cl(styles.button)} >
                            <span>Next</span>
                            <svg width="25.310669" height="11.506348" viewBox="0 0 25.3107 11.5063" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Vector 84" className={isActiveButton ? styles.buttonSvgActive : styles.buttonSvg} d="M0.75 5.75L24.25 5.75M19.25 10.75L24.25 5.75L19.25 0.75" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linecap="round" />
                            </svg>
                        </div>
                        <Link to={`/${(+id + 1) % 4}`} ></Link>
                    </SvgButton>
                </div>
            </div>
            <img src={arrImage[+id]} alt="Title Page" className={cl(styles.sectionImg)} />
            <div className={cl(styles.sectionDescribe)}>
                {describePage[+id].map((text: string) => {
                    return (<p key={text.length} className={cl(styles.sectionText)}>{text}</p>)
                })}
            </div>
            <div className={cl(styles.inputRange)}>
                <RangeSvg setPositionCarusel={setPositionCarusel}></RangeSvg>
            </div>
            <ListBuildungs size={calcSizeScreen} positionCarusel={positionCarusel}></ListBuildungs>
        </section>
    )
}
