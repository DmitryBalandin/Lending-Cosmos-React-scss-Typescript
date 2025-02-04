import React from "react";
import cl from 'classnames';
import styles from './styles.module.scss';
import { TitleSectionPage } from "@/componenets/TitleSectionPage";
import { Title } from "@/componenets/Titile";
import { Logo } from "@/componenets/Logo";
import { SocialNetworks } from "@/componenets/SocialNetworks";
import { Carausel } from "@/componenets/Carausel";
import { arrCardCustomer, CardCustomer } from "./date/arrCardCustomer";

interface MembersPage {

}


export const MembersPage: React.FC<MembersPage> = ({ }) => {

    return (
        <section className={cl(styles.section)}>
            <div className={cl(styles.sectionEllipseOne)}></div>
            <div className={cl(styles.sectionEllipseTwo)}></div>
            <div className={cl(styles.sectionEllipseThree)}></div>
            <div className={cl(styles.sectionTitlePage)}>
                <TitleSectionPage direction="Down">members</TitleSectionPage>
            </div>
            <div className={cl(styles.sectionMainTitle)}>
                <Title size="Medium">MEET OUR TEAM </Title>
            </div>
            
                <Carausel arrCardCustomers={arrCardCustomer} />
                
            <footer className={cl(styles.footer)}>
                <Logo />
                <SocialNetworks />
                <div className={cl(styles.footerDate)}>Copyright © 2022. All rights reserved</div>
            </footer>
        </section>
    )
}