
import { ReactNode } from "react";
import styles from "./styles.module.scss";
import cl from "classnames";

interface SubTitleProps {

    size?: "Medium" | "Large",
    children: string,
    upperCase?: boolean | false,
}

export const SubTitle: React.FC<SubTitleProps> = ({ children, size,upperCase }) => {

    return (
        <h3 className={cl(styles.title, `${styles.title}${size}`)}>
            {upperCase ? children.toUpperCase() : children}
        </h3>
    )
}


