
import { ReactNode } from "react";
import styles from "./styles.module.scss";
import cl from "classnames";

interface SvgButtonProps {
    onClick: () => void,
    children: ReactNode,
}

export const SvgButton: React.FC<SvgButtonProps> = ({ onClick, children }) => {
    return (
            
            <button onClick={(onClick)} className={styles.button}>
                {children}
                

                <span className={styles.buttonOutsideBorder}></span>
                <span className={styles.buttonInsideBorder}>{children}</span>
            </button>
      

    )
}