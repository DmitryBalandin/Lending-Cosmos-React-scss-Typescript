import styles from "./styles.module.scss";
import cl from "classnames";
import { Link, Outlet } from 'react-router-dom';
import React, { Fragment, useState, useEffect } from "react";
import star from './images/star.png';
import { Links } from "../date/date";
import { moveToSection, funcMadeCallback } from "./helpers/helpers";

interface NavigationProps {
    links:Array<Links>
 }




export const Navigation: React.FC<NavigationProps> = ({links}) => {

    const [navigationVisible, setNavigatorVisiable] = useState<Array<Links>>(links.slice(0, 3));
    
    const arrEntriesSection = window.document.getElementsByTagName("SECTION");
    const callback = funcMadeCallback(links, setNavigatorVisiable);
    const observer = new IntersectionObserver(callback, { threshold: 0.45 })




    useEffect(() => {


        Array.from(arrEntriesSection).forEach((item, index) => {
            item.setAttribute("id", `${index}`);
            observer.observe(item)
            return () => observer.disconnect();
        })
    }, [])

    return (
        <>
            <nav className={styles.navigation}>
                <ul className={cl(styles.navigationItem)}>
                    {navigationVisible.map((link, index) => {
                        return (
                            <Fragment key={`${link.id}${link.title}`}>
                                <li className={cl(styles.navigationValue,
                                    link.isActiv && styles.navigationValueActive)}>
                                    <Link onClick={(event) => moveToSection(event, link,arrEntriesSection)}
                                        to={link.link}
                                        className={styles.navigationLink}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                                {index === (navigationVisible.length - 1) ? "" : <img src={star} className={cl(styles.navigationStar)} alt="star" />}
                            </Fragment>
                        )
                    }
                    )}
                </ul>
            </nav>


        </>
    )
}