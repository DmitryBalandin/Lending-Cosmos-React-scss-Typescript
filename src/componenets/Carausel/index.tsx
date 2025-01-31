import React, { useEffect, useState } from "react";
import cl from "classnames";
import styles from './styles.module.scss';
import { CardCustomer } from "@/pages/Members/date/arrCardCustomer";
import { helper } from "./helpers/selectActiveCard";
import { EventMouse } from "@/globalType";
interface Carausel {
    arrCardCustomers: Array<CardCustomer>
}


export const Carausel: React.FC<Carausel> = ({ arrCardCustomers }) => {


    const [listActiveCard, setlistActiveCard] = useState<Array<CardCustomer>>(() => arrCardCustomers);
    const [leftOffsetCarusel, setLeftOffsetCarusel] = useState<string>("0px");
    const selectActiveCard = helper(styles, listActiveCard, setlistActiveCard,setLeftOffsetCarusel);


    const handleOnMouseDown = (event: EventMouse<HTMLDivElement, any>) => {
        event.preventDefault();
        const target = event.target.closest((`.${styles.carauselContainer}`));
        const slider = event.target.closest('#slider')
        let shiftX = event.clientX - target.getBoundingClientRect().left;


        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);


        function onMouseMove(event: MouseEvent): void {
            let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

            

            if (newLeft > 0) {
                newLeft = 0;
            }

            let rightEdge = slider.clientWidth - slider.offsetLeft - target.scrollWidth;
            

            if (newLeft < rightEdge) {
                newLeft = rightEdge;
            }

            setLeftOffsetCarusel(`${newLeft}px`)

        }
        function onMouseUp() {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);

        }



    }
    return (
        <div className={cl(styles.carausel)} id="slider">
            <div id="carusel" className={cl(styles.carauselContainer)}
                onDoubleClick={selectActiveCard}
                onMouseDown={handleOnMouseDown}
                style={{ left: leftOffsetCarusel }}
            >{
                    listActiveCard.map((card) => {
                        return (
                            <div key={card.login} data-key={card.login} className={card.isActive ? cl(styles.customerContainerActive) : cl(styles.customerContainer)}>
                                <div className={card.isActive ? cl(styles.customerItemActive) : cl(styles.customerItem)}>
                                    <img className={card.isActive ? cl(styles.customerAvatarActive) : cl(styles.customerAvatar)} src={card.avatar} alt="Avatar" />
                                    <div className={card.isActive ? cl(styles.customerCareerActive) : cl(styles.customerCareer)}>{card.career}</div>
                                    <div className={card.isActive ? cl(styles.customerLoginActive) : cl(styles.customerLogin)}>{card.login}</div>

                                </div>
                                {card.isActive ? <div className={cl(styles.customerActiveDescription)}>
                                    {card?.description}
                                </div> : ""}
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}