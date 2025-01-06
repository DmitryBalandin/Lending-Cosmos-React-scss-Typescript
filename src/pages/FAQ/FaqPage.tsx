import React from "react";
import cl from 'classnames';
import styles from './styles.module.scss';
import { TitleSectionPage } from "@/componenets/TitleSectionPage";
import { Title } from "@/componenets/Titile";
import { CardButtonGrid } from "@/componenets/CardButtonGrid";
import { postDateGrid, PostDate } from "@/pages/FAQ/date/datePostGrid";


interface FaqPage { };

export const FaqPage: React.FC<FaqPage> = ({ }) => {
    return (
        <section className={cl(styles.section)}>
            <div className={cl(styles.sectionTitlePage)}>
                <TitleSectionPage direction={"Down"}>FAQ</TitleSectionPage>
            </div>
            <div className={cl(styles.sectionMainTitle)}>
                <div>
                    <Title size="Medium">HAVE   ANY
                        QUESTIONS?</Title>
                </div>

            </div>
            <div className={cl(styles.container)}>
                <CardButtonGrid postDateGrid={postDateGrid} />
            </div>
        </section>
    )
}