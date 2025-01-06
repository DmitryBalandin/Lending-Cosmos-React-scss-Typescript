
import { ReactNode } from "react";
import styles from "./styles.module.scss";
import cl from "classnames";
import React from "react";


interface TitleSectionPage {
    children: ReactNode;
    direction: "Up" | "Down";
}

export const TitleSectionPage: React.FC<TitleSectionPage> = ({ children, direction }) => {
    return (
        <div className={cl(styles.title)}>
            <div className={cl(styles.titleContainer,`${styles.titleContainer}${direction}`)}>
                <h4 className={cl(styles.titleItem,`${styles.titleItem}${direction}`)}>
                    {children}
                </h4>
                <div className={cl(styles.titleImage,`${styles.titleImage}${direction}`)}></div>
            </div>
        </div>
    )
}