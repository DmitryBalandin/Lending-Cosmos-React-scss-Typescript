
import { ReactNode } from "react";
import styles from "./styles.module.scss";
import cl from "classnames";
import React from "react";

interface SubTitleProps {

    size?: "Medium" | "Large",
    children: string,
    upperCase?: boolean | false,
    dataId?:number
}

export const SubTitle: React.FC<SubTitleProps> = ({ children, size,upperCase, dataId }) => {

    return (
        <h3 data-id={dataId} className={cl(styles.title, `${styles.title}${size}`)}>
            {upperCase ? children.toUpperCase() : children}
        </h3>
    )
}


