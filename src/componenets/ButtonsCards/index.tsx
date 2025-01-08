
import { ReactNode } from "react";
import styles from "./styles.module.scss";
import cl from "classnames";
import React from "react";




interface ButtonCardProps {
    buttonCards:Array<ButtonCard>;
    handlerOnclick:(e?:React.MouseEvent)=>void;
}

interface ButtonCard {
    number: string;
    id: number;
    name: string;
    opinion?: string;
    isActive: boolean;
}



export const ButtonCards: React.FC<ButtonCardProps> = ({buttonCards, handlerOnclick}) => {
    return (
        <ul onClick={handlerOnclick} className={cl(styles.buttonCards)}>
            {buttonCards.map((buttonCards) => (
                <li key={`${buttonCards.id}${buttonCards.name}`}>
                    <div  className={`${cl(styles.buttonCardsContainer)}${buttonCards.isActive ? "Active" : ''}`}>
                        <div data-id={buttonCards.id} className={`${cl(styles.buttonCardsItem)}${buttonCards.isActive ? "Active" : ''}`}>
                            <div className={`${cl(styles.buttonCardsNumber)}${buttonCards.isActive ? "Active" : ''}`}>{buttonCards.number}</div>
                            <div className={`${cl(styles.buttonCardsName)}${buttonCards.isActive ? "Active" : ''}`}>{buttonCards.name}</div>
                            {buttonCards.opinion ? <div className={`${cl(styles.buttonCardsText)}${buttonCards.isActive ? "Active" : ''}`}>
                                {buttonCards.opinion}</div> : ""}
                        </div>
                    </div>
                </li>
            ))}
        </ul>

    )
}