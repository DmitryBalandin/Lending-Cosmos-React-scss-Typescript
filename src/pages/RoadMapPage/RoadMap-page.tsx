import cl from "classnames";
import styles from './styles.module.scss';
import { SvgButton } from './../../componenets/SvgButton/index';
import React, { useState } from "react";
import { ImageRoadMap } from '@/componenets/ImageRoadMap/index'
import { Title } from "@/componenets/Titile";
import { SvgNavigation } from "@/componenets/svgNavigaion";
import { ButtonCards } from "@/componenets/ButtonsCards";
import { buttonCards } from "./date/dateButtonCards";
import { TitleSectionPage } from "@/componenets/TitleSectionPage";
import stylesButtonCards from '../../componenets/ButtonsCards/styles.module.scss';
import { handleClick } from "./helpers/helpers";
import { State } from "./helpers/helpers";


interface RoadMapPage { };




export const RoadMapPage: React.FC<RoadMapPage> = ({ }) => {

    const [activeDiamond, setAcvtiveDiamond] = useState<State>({ isActive: 0, arrayDateCard: buttonCards, numberImage: 0 })

    
    const handlerClickDiamond = handleClick(['diamond'],activeDiamond,setAcvtiveDiamond);
    const handleClickFormBurrons  = handleClick([stylesButtonCards.buttonCardsItem,],activeDiamond,setAcvtiveDiamond);
   
    return (
        <section className={cl(styles.section, styles.sectionRoadmap)}>
            <ImageRoadMap numberImage={activeDiamond.numberImage} />
            <div className={cl(styles.container)}>
                <div className={cl(styles.titleSection)}>
                    <TitleSectionPage direction="Up">our way</TitleSectionPage>
                </div>
                <div className={cl(styles.title)}>
                    <Title size="Large">ROAD&nbsp;MAP</Title>
                </div>
                <div className={cl(styles.menu)}>
                    <div className={cl(styles.menuSVGnavigation)} >
                        <SvgNavigation lineHeight={[184, 184, 184]}
                            allLineHight={980}
                            activityDiamond={activeDiamond.isActive} handler={handlerClickDiamond}
                        />
                    </div>
                    <div >
                        <ButtonCards handlerOnclick={handleClickFormBurrons} buttonCards={activeDiamond.arrayDateCard} />
                    </div>
                </div>
            </div>
        </section>
    )
}

