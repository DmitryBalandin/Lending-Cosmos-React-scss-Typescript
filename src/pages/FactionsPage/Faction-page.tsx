import cl from "classnames";
import { Title } from "@/componenets/Titile";
import styles from './styles.module.scss';
import { SvgNavigation } from './../../componenets/svgNavigaion/index';
import { SubTitle } from "@/componenets/subTitles";
import { Button } from "@/componenets/Button";
import { SvgButton } from "@/componenets/SvgButton";

interface FactionPage { };

export const FactionPage: React.FC<FactionPage> = ({ }) => {
    return (
        <section className={cl(styles.section, styles.sectionPlanet)} >
            <div className={cl(styles.sectionTitle)}>
                <Title size="Large">
                    FACTIONS
                </Title>
            </div>
            <div className={cl(styles.navigater)}>
                <div className={cl(styles.navigaterItem)}>
                    <SubTitle size="Medium" upperCase={true}>blighted Badlands</SubTitle>
                    <div className={styles.navigaterOpenTitle}>
                        <img src={require('./image/blighed badlands.jpg')} alt="blihed badlans"
                            className={styles.navigaterImg}
                        />
                        <div className={styles.navigaterBtn}>
                            <SvgButton onClick={() => { }}>More</SvgButton>
                        </div>
                    </div>
                    <SubTitle size="Medium">Glacial Frontier</SubTitle>
                    <SubTitle size="Medium">Sundered Grove</SubTitle>
                    <SubTitle size="Medium">Sky Citadel</SubTitle>
                </div>
                <SvgNavigation />
            </div>
        </section>
    )
}
