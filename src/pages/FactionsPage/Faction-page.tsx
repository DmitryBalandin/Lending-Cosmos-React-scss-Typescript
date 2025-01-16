import cl from "classnames";
import { Title } from "@/componenets/Titile";
import styles from './styles.module.scss';
import { SvgNavigation } from './../../componenets/svgNavigaion/index';
import { SubTitle } from "@/componenets/subTitles";
import { SvgButton } from "@/componenets/SvgButton";
import React, { useState } from "react";
import { arrImage } from "./date/date";
import { handleClick, State } from "./helpers/helpers";
import { Link } from "react-router-dom";

interface FactionPage { };

export const FactionPage: React.FC<FactionPage> = ({ }) => {

    const [statePage, setStatePage] = useState<State>({ isActive: 0, sizeLine: [207, 61], heightLine: 527 })
    const arrNameTopic:Array<string> = ['blighted Badlands', 'Glacial Frontier', 'Sundered Grove', 'Sky Citadel'];

    
    const handleClickDiamond = handleClick(['.diamond'], statePage, setStatePage)
    const handleClickNameTopic = handleClick(['H3'],statePage, setStatePage)
    
    return (
        <section className={cl(styles.section, styles.sectionPlanet)} >
            <div className={cl(styles.sectionTitle)}>
                <Title size="Large">
                    FACTIONS
                </Title>
            </div>
            <div className={cl(styles.navigater)}>
                <div className={cl(styles.navigaterItem)} onClick={handleClickNameTopic}>
                    {arrNameTopic.map((nameTopic, index) => {
                        if (index === statePage.isActive) {
                            return (<>
                                <SubTitle dataId={index} key={nameTopic} size="Medium" upperCase={true}>{nameTopic}</SubTitle>
                                <div className={styles.navigaterOpenTitle}>
                                    <img src={arrImage[statePage.isActive]} alt="blihed badlans"
                                        className={styles.navigaterImg}
                                    />
                                    <div className={styles.navigaterBtn}>
                                        <SvgButton onClick={() => { }}>More<Link to={`/${index}`} ></Link></SvgButton>
                                    </div>
                                </div>
                            </>)
                        } else {
                            return <SubTitle dataId={index} key={nameTopic} size="Medium">{nameTopic}</SubTitle>
                        }
                    })}

                </div>
                <SvgNavigation
                    handler={handleClickDiamond}
                    lineHeight={statePage.sizeLine}
                    activityDiamond={statePage.isActive}
                    allLineHight={statePage.heightLine}

                />
            </div>
        </section>
    )
}
