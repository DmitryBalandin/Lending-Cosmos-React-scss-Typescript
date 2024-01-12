
import { Logo } from "@/componenets/Logo";
import styles from "./home.module.scss";
import cl from "classnames";
import { SocialNetworks } from "@/componenets/SocialNetworks";
import { Button } from "@/componenets/Button";
import { Title } from "@/componenets/Titile";
import { Navigation } from "@/componenets/Navigation";


export default function Home() {
    return (
        <div>
            <section className={cl(styles.section, styles.sectionMain)}>

                <header>
                    <Logo />
                    <SocialNetworks />
                    <Button onClick={() => { }}>
                        Whitepeper
                    </Button>
                </header>
                <Navigation />

                <div className={cl(styles.sectionTitleMain)}>
                    <div>
                        <Title size="Medium">
                            From dusk to&nbsp;dawn
                        </Title>
                        <ul className={styles.buttonGroup}>
                            <li>
                                <Button onClick={() => { }}>
                                    Mint
                                </Button>
                            </li>
                            <li>
                                <Button onClick={() => { }}>
                                    Connect Wallet
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className={cl(styles.section, styles.sectionPlanet)}>

            </section>
        </div>
    )
} 