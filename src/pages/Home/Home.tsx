
import { Logo } from "@/componenets/Logo";
import styles from "./home.module.scss";
import cl from "classnames";
import { SocialNetworks } from "@/componenets/SocialNetworks";
import { Button } from "@/componenets/Button";
import { Title } from "@/componenets/Titile";
import { Navigation } from "@/componenets/Navigation";


export default function Home() {
    return (
        <section className={cl(styles.section, styles.sectionMain)}>
            <header>
                <Logo />
                <SocialNetworks />
                <Button >
                    Whitepeper
                </Button>
                <Navigation />
                <div>
                    <Title >
                        FROM DUSK TO DAWN
                    </Title>
                </div>
                <ul>
                    <li>
                        <Button >
                            Mint
                        </Button>
                    </li>
                        <li>
                            <Button >
                                Mint
                            </Button>
                        </li>
                </ul>
            </header>
        </section>
    )
} 