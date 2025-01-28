import React from "react";

import { Logo } from "@/componenets/Logo";
import styles from "./home.module.scss";
import cl from "classnames";
import { SocialNetworks } from "@/componenets/SocialNetworks";
import { Title } from "@/componenets/Titile";
import { SvgButton } from './../../componenets/SvgButton/index';
import {useState, useEffect} from "react";
import { NameSize } from "@/globalType";
import { BurgerMenu } from "@/componenets/BurgerMenu";

interface HomeProps{
    calcSizeScreen:NameSize
}

export  const Home:React.FC<HomeProps> = ({calcSizeScreen}) => {
    const [isOpen, setIsOpen] = useState(false)
    
    useEffect(() =>{
        if(calcSizeScreen !== 'Smallest'){
            setIsOpen(false);
        }
    }, [calcSizeScreen])

    return (
        <section className={cl(styles.section, styles.sectionMain)}>
            <header>
                <Logo />
                <div className={cl(styles.socialNetyworks)}>
                    <SocialNetworks />
                </div>
                <div className={cl(styles.burgerMenu)}>
                    <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
                </div>
                <div className={cl(styles.rightButton)}>
                    <SvgButton onClick={() => { }}>
                        Whitepeper
                    </SvgButton>
                </div>

            </header>
            <div className={cl(styles.sectionTitleMain)}>
                <div style={isOpen  ?  {visibility:'hidden'} :null }>
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