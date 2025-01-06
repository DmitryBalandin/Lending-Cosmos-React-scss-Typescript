import { ReactNode } from "react";
import React from "react";
import styles from './styles.module.scss';
import cl from "classnames";


interface SvgLogo {
    children: ReactNode;
}

export const SvgLogo: React.FC<SvgLogo> = ({ children }) => {
    return (
        <div className={cl(styles.container)  }>
            <div className={cl(styles.item)}>{children}</div>
        </div>
    )
}