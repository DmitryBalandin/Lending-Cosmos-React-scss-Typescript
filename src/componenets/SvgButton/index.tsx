
import { ReactNode } from "react";
import styles from "./styles.module.scss";
import cl from "classnames";
import React from "react";


interface SvgButtonProps {
    onClick: () => void,
    props?:any,
    children: ReactNode,
    
}

export const SvgButton: React.FC<SvgButtonProps> = ({ onClick, children,  ...props }) => {
    return (
            
            <button onClick={(onClick)} {...props} className={cl(styles.button)}>
                {children}

                <span className={styles.buttonInsideBorder}>{children}</span>
                <span className={styles.buttonOutsideBorder}></span>
            </button>
      

    )
}