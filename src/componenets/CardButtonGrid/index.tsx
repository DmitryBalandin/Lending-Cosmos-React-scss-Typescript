import React from "react";
import cl from 'classnames';
import styles from './styles.module.scss';
import { PostDate } from "@/pages/FAQ/date/datePostGrid";
import { arrow, brokenLine, miniStar, eye, allowBottom, arrowRight, arrowTop, sunStar, mediumStar } from "./date/dateSvgIcon";


interface CardButtonGrid {
    postDateGrid: Array<PostDate>
};

export const CardButtonGrid: React.FC<CardButtonGrid> = ({ postDateGrid }) => {

    return (
        <div className={cl(styles.itemGrid)}>
            {postDateGrid.map((value) => {
                return (
                    <div key={`${value.name}${value.id}`} className={cl(styles.item, `${styles.item}${value.id}`)}>
                        <div className={cl(styles.itemContainer)}>
                            <div className={cl(styles.itemTitle)}>{value.name}</div>
                            <div className={cl(styles.itemText)}>{value.text}</div>
                        </div>
                    </div>
                )
            })}
            <div className={cl(styles.item10)}>
                <div className={cl(styles.item10ContainerLine)}>
                    {brokenLine}
                </div>
                <div className={cl(styles.item10ContainerStar)}>
                    {miniStar}{miniStar}{miniStar}
                </div>
                <div className={cl(styles.item10ContainerEye)}>
                    {eye}{arrow}{eye}
                </div>
            </div>
            <div className={cl( styles.item11)}>
                <div className={cl(styles.item11ContainerSun)}>
                    {sunStar}
                </div>
                <div className={cl(styles.item11ContainerArrow)}>
                    {allowBottom}{mediumStar}{arrowRight}{arrowTop}
                </div>
            </div>
        </div>
    )
}