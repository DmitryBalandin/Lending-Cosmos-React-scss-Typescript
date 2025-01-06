
import { ReactNode } from "react";
import styles from "./styles.module.scss";
import cl from "classnames";
import React from "react";

interface TitleProps {
   
    size?:"Medium"| "Large";
    children: ReactNode
 }

export const Title: React.FC<TitleProps> = ({children, size }) => {
    return (
        <h2 className={cl(styles.title, `${styles.title}${size}`)}>
            {children}
        </h2>
    )
    }