
import { ReactNode } from "react";
import styles from "./styles.module.scss";
import cl from "classnames";
import React from "react";


interface SvgButtonProps {
    onClick: () => void,
    props?: any,
    children: ReactNode,
    iconSvg?: boolean

}

export const SvgButton: React.FC<SvgButtonProps> = ({ onClick, children, iconSvg, ...props }) => {
    return (

        <button onClick={(onClick)} {...props} className={cl(`${styles.button}${iconSvg ? 'Svg' : ''}`)}>
            {children}

            {iconSvg ? '' : <span className={styles.buttonInsideBorder}>{children}</span>}
            {iconSvg ? '' : <span className={styles.buttonOutsideBorder}></span>}
        </button>


    )
}