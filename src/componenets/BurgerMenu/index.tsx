import React, { useState } from "react";
import styles from './styles.module.scss';
import cl from 'classnames';


interface BurgerMenuProps {

}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ }) => {
    const [inputCheck, setInputCheck] = useState(false)

    const handleClick = () => setInputCheck(() => !inputCheck);

    return (
           
        <>
            <input type="checkbox"  className={cl(styles.burgerCheckbox)} checked={inputCheck} />
            <label className={cl(styles.burger)} onClick={handleClick} htmlFor={cl(styles.burgerCheckbox)}></label>
        </>
    )
}