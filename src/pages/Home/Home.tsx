
import { Logo } from "@/componenets/Logo";
import styles from "./home.module.scss";
import cl from "classnames";
import { SocialNetworks } from "@/componenets/SocialNetworks";
import { Title } from "@/componenets/Titile";
import { SvgButton } from './../../componenets/SvgButton/index';
import React from "react";
import { Outlet } from "react-router-dom";


export default function Home() {
    return (
        <section className={cl(styles.section, styles.sectionMain)}>
            <header>

                <Logo />
                <SocialNetworks />
                <SvgButton onClick={() => { }}>
                    Whitepeper
                </SvgButton>
            </header>
            <div className={cl(styles.sectionTitleMain)}>
                <div>
                    <Title size="Medium">
                        From dusk to&nbsp;dawn
                    </Title>
                    <ul className={styles.buttonGroup}>
                        <li>
                            <SvgButton onClick={() => { }}>
                                Mint
                            </SvgButton>
                        </li>
                        <li>
                            <SvgButton onClick={() => { }}>
                                Connect Wallet
                            </SvgButton>
                        </li>
                    </ul>
                </div>
            </div>
            
        </section>
    )
} 