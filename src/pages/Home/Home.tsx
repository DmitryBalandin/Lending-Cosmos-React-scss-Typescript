
import { Logo } from "@/componenets/Logo";
import styles from "./home.module.scss";
import cl from "classnames";
import { SocialNetworks } from "@/componenets/SocialNetworks";
import { Title } from "@/componenets/Titile";
import { SvgButton } from './../../componenets/SvgButton/index';
import {useState} from "react";
import { Outlet } from "react-router-dom";
import { BurgerMenu } from "@/componenets/BurgerMenu";


export default function Home() {
    const [inputCheck, setInputCheck] = useState(false)

    return (
        <section className={cl(styles.section, styles.sectionMain)}>
            <header>
                <Logo />
                <div className={cl(styles.socialNetyworks)}>
                    <SocialNetworks />
                </div>
                <div className={cl(styles.burgerMenu)}>
                    <BurgerMenu inputCheck={inputCheck} setInputCheck={setInputCheck}/>
                </div>
                <div className={cl(styles.rightButton)}>
                    <SvgButton onClick={() => { }}>
                        Whitepeper
                    </SvgButton>
                </div>
            </header>
            <div className={cl(styles.sectionTitleMain)}>
                <div style={inputCheck ? {visibility:'hidden'} : null}>
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