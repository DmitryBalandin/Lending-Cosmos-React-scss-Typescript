
import { TitleSectionPage } from '@/componenets/TitleSectionPage';
import styles from './styles.module.scss';
import cl from "classnames";

import React from "react";
import { Title } from '@/componenets/Titile';
import { SvgLogo } from '@/componenets/SvgLogo';
import { arrLogoDate } from './date/logoDate';
interface ColobrationsPage { }

export const ColobrationsPage: React.FC<ColobrationsPage> = ({ }) => {
    return (
        <section className={cl(styles.section, styles.sectionColobrations)}>
            <div className={cl(styles.container)}>
                <div className={cl(styles.titleSection)}>
                    <TitleSectionPage direction={'Down'} >partners</TitleSectionPage>
                </div>
                <div className={cl(styles.title)}>
                    <Title size='Medium' >COLLABORATIONS </Title>
                </div>
                <ul className={cl(styles.arrLogo)}>
                    {arrLogoDate.map((item) => {
                        return <li key={item.id}>
                            <SvgLogo >{item.name}</SvgLogo>
                        </li>
                    })}
                </ul>
            </div >
        </section>
    )
}