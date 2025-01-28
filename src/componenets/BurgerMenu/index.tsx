import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import styles from './styles.module.scss';
import cl from 'classnames';
import { links } from "../date/date";
import star from './images/star.png';
import { SocialNetworks } from "../SocialNetworks";
import { moveToSection } from "../date/helpers";

interface BurgerMenuProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, setIsOpen }) => {

    const handleClick = () => setIsOpen(() => !isOpen);
    const arrEntriesSection = window.document.getElementsByTagName("SECTION");


    return (
        <>
            <input type="checkbox" className={cl(styles.burgerCheckbox)} checked={isOpen} />
            <label className={cl(styles.burgerLabel)} onClick={handleClick} htmlFor={cl(styles.burgerCheckbox)}></label>
            <div className={cl(styles.burgerContainer)} style={!isOpen ? { transform: 'translateX(+100%)' } : null}>
                <ul className={cl(styles.burgerMenu)}>
                    {links.map((link, index, array) => {
                        return (
                            <Fragment key={`${link.id}${link.title}`}>
                                <li className={cl(styles.burgerMenuTitle)}>
                                    <Link className={cl(styles.burgerMenuLink)}
                                        onClick={(event) => {moveToSection(event, link, arrEntriesSection)
                                            setIsOpen(false)}
                                        }
                                        to={link.link}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                                {index === (array.length - 1) ? "" : <img src={star} className={cl(styles.navigationStar)} alt="star" />}
                            </Fragment>
                        )
                    })}
                </ul>
                <div className={cl(styles.burgerSocialNetworks)}>
                    <SocialNetworks />
                </div>
            </div>
        </>
    )
}