import React, { useState, useEffect, useCallback } from "react";
import cl from "classnames";
import styles from './styles.module.scss';
import { CardCustomer } from "@/pages/Members/date/arrCardCustomer";
import { helper } from "./helpers/selectActiveCard";
import { EventMouse, NameSize } from "@/globalType";

interface Carausel {
    arrCardCustomers: Array<CardCustomer>;
    calcSizeScreen: NameSize;
}


export const Carausel: React.FC<Carausel> = ({ arrCardCustomers, calcSizeScreen }) => {
    
    
    useEffect(() => {
        
        if (calcSizeScreen === 'Small' || calcSizeScreen === 'Smallest') {
            setLeftOffsetCarusel('0px')

        } else 
            {
                setTopOffsetCarusel('0px')
        }
         
    }, [calcSizeScreen])
    const [listActiveCard, setlistActiveCard] = useState<Array<CardCustomer>>(() => arrCardCustomers);
    const [leftOffsetCarusel, setLeftOffsetCarusel] = useState<string>("0px");
    const [topOffsetCarusel, setTopOffsetCarusel] = useState<string>("0px");

    const selectActiveCard = helper(styles, listActiveCard, setlistActiveCard, setLeftOffsetCarusel);
    

    function handleTopOnMouseDown (event: EventMouse<HTMLDivElement, any>)  {
        event.preventDefault();

        if(!event.target.closest(`.${styles.bigContainer}`)){
            return
        }

        const target = event.target.closest((`.${styles.carauselContainer}`));
        const slider = event.target.closest('#slider')
        let shiftY = event.clientY - target.getBoundingClientRect().top;
      

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);


        function onMouseMove(event: MouseEvent): void {
            let newTop = event.clientY - shiftY - slider.getBoundingClientRect().top;


            if (newTop > 0) {
                newTop = 0;
            }

            let topEdge = slider.offsetParent.getBoundingClientRect().height 
                        - slider.offsetHeight - slider.offsetTop
                        - slider.offsetParent?.getElementsByTagName('footer')[0]?.getBoundingClientRect().height
                        - 20;

            
            if (newTop < topEdge) {
                newTop = topEdge;
            }
            console.log(topEdge)
            setTopOffsetCarusel(`${newTop}px`)
        }
        

        function onMouseUp() {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
        }
    }

    function handleLeftOnMouseDown (event: EventMouse<HTMLDivElement, any>)  {
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
                
                onMouseDown={calcSizeScreen === 'Small' || calcSizeScreen === 'Smallest' ? handleTopOnMouseDown : handleLeftOnMouseDown}

                style={{ left: leftOffsetCarusel, top: topOffsetCarusel }}
            >{
                    listActiveCard.map((card) => {
                        return (
                            <div className={cl(styles.bigContainer)}>
                                <div key={card.login} data-key={card.login} className={card.isActive ? cl(styles.customerContainerActive) : cl(styles.customerContainer)}>
                                    <div className={card.isActive ? cl(styles.customerItemActive) : cl(styles.customerItem)}>
                                        <img className={card.isActive ? cl(styles.customerAvatarActive) : cl(styles.customerAvatar)} src={card.avatar} alt="Avatar" />
                                        <div className={card.isActive ? cl(styles.customerCareerActive) : cl(styles.customerCareer)}>{card.career}</div>
                                        <div className={card.isActive ? cl(styles.customerLoginActive) : cl(styles.customerLogin)}>{card.login}</div>

                                    </div>

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

    // const [switchChangeListCards, setSwitchChangeListCards] = useState<number>(0)


    // useLayoutEffect(() => {
    //     console.log(leftOffsetCarusel)
    //     if (switchChangeListCards != 0) {
    //         setLeftOffsetCarusel(prev => `${parseFloat(prev) + 285}px`);
    //         setlistActiveCard(() => changeListCarusel(listActiveCard))
    //         console.log("render")
    //         console.log(leftOffsetCarusel)
    //     }

    // }, [switchChangeListCards]);




    // function changeListCarusel(listActiveCard: Array<CardCustomer>) {
    //     const lastCardCustom: CardCustomer = Object.assign(listActiveCard[0]);
    //     let changeListCards: Array<CardCustomer> = [...listActiveCard.slice(1), lastCardCustom]
    //     return changeListCards
    // }


    
            // if (target.getBoundingClientRect().left < -1000) {
            //     document.removeEventListener('mousemove', onMouseMove);


            //     setSwitchChangeListCards(prev => ++prev);
            //     // setTimeout(() =>document.addEventListener('mousemove', onMouseMove),10);
            // }
