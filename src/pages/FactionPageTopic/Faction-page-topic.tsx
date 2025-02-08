import cl from "classnames";
import styles from './styles.module.scss';
import React, { useState, useEffect } from "react";
import { SvgButton } from "@/componenets/SvgButton";
import { RangeSvg } from "@/componenets/RangeSvg";
import { ListBuildungs } from "@/componenets/ListBuildungs";


import { handlerMouse } from "./helpers/helpers";
import { arrBackground, describePage, arrImageBig, arrImageSmall } from "./date/date";
import { NameSize } from "@/globalType";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


interface FactionPageTopic {
    calcSizeScreen: NameSize;
};

export const FactionPageTopic: React.FC<FactionPageTopic> = ({ calcSizeScreen }) => {


    const [isActiveButton, setIsActiveButton] = useState<boolean>(false);

    const [positionCarusel, setPositionCarusel] = useState<number>(0)

    const handleMouseEnter = handlerMouse(setIsActiveButton, true);
    const handleMouseLeave = handlerMouse(setIsActiveButton, false);

    const { id } = useParams()

    return (
        <section className={
            cl(styles.section,
                styles.sectionFactionPageTopic,
                `${styles.sectionFactionPageTopic}${arrBackground[+id]}`)
        } >
            <div className={cl(styles.sectionNavButtons)}>
                <div className={cl(styles.sectionNavButtonsBig)}>
                    <SvgButton onClick={() => { }}>Close
                        <Link to="/" ></Link>
                    </SvgButton>
                </div>
                <div className={cl(styles.sectionNavButtonsSmall)}>
                    <SvgButton iconSvg={true} onClick={() => { }}>
                        <Link to="/">
                            <svg width="24.007812" height="24.007812" viewBox="0 0 24.0078 24.0078" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Vector 86" d="M1 1L23 23" stroke="#FFFFFF" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linecap="round" />
                                <path id="Vector 87" d="M23 1L1 23" stroke="#FFFFFF" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linecap="round" />
                            </svg>
                        </Link>
                    </SvgButton>
                </div>
                <div className={cl(styles.sectionNavButtonsBig, `${+id === (arrBackground.length - 1) ? styles.hidden : ""}`)} onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave} >
                    <SvgButton onClick={() => { }} >
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
                        <Link to={`/${(+id + 1) % 4}`}  ></Link>
                    </SvgButton>
                </div>
                <div className={cl(styles.sectionNavButtonsSmall, `${+id === (arrBackground.length - 1) ? styles.hidden : ""}`)}>
                    <SvgButton onClick={() => { }} iconSvg={true}>
                        <Link to={`/${(+id + 1) % 4}`} >
                            <svg width="33.526367" height="19.232910" viewBox="0 0 33.5264 19.2329" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Vector 88" d="M32.11 9.61L1 9.61M23.5 18.22L32.11 9.61L23.5 1" stroke="#FFFFFF" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linecap="round" />
                            </svg>
                        </Link>
                    </SvgButton>
                </div>
            </div>
            <div className={cl(styles.sectionImgBig)}>
                <img src={arrImageBig[+id]} alt="Title Page" className={cl(styles.sectionImgTitle)} />
            </div>
            <div className={cl(styles.sectionImgSmall)}>
                {arrImageSmall[+id].map((img,index) =>{
                    return (<img key={index} alt="Title Page" src={img}/>)
                })}
               
            </div>
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
