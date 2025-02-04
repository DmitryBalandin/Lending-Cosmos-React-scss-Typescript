
import React, { ChangeEvent } from "react"
import { CardCustomer } from "@/pages/Members/date/arrCardCustomer"
import { IClassNames, EventMouse } from "@/globalType"





export const helper = (styles: IClassNames,
    listActiveCard: Array<CardCustomer>,
    setlistActiveCard: React.Dispatch<React.SetStateAction<Array<CardCustomer>>>,
    setLeftOffsetCarusel: React.Dispatch<React.SetStateAction<string>>) => {


    function isBefore(list: Array<CardCustomer>, elem: HTMLElement) {
        const posActiv = list.findIndex(card => card.isActive === true);
        const posElem = list.findIndex(card => card.login === elem.dataset?.key);
        return posActiv === -1 ? false : posElem > posActiv;
    }


    function movingTo(shift: number, element: HTMLDivElement) {
        let directionShift = shift < 0 ? -1 : 1;
        let starngeTime = directionShift * shift;


        const elemDescriptionUser: Element = element?.nextElementSibling
        const witdhDescription: number = elemDescriptionUser?.getBoundingClientRect().width ? elemDescriptionUser?.getBoundingClientRect().width : 0;
        const witdthScreen: number = window.innerWidth;
        const witdhItemAvatar: number = element?.getBoundingClientRect().width;

        requestAnimationFrame(function animate(time: number) {
            let minLeftMargin = witdthScreen - witdhDescription - witdhItemAvatar - starngeTime - 180;

            starngeTime = starngeTime - 7;
            if (starngeTime > 0 && (minLeftMargin < 50 || !minLeftMargin || directionShift === 1)) {
                setLeftOffsetCarusel(prev => `${parseFloat(prev) + 7 * (directionShift)}px`)
                requestAnimationFrame(animate);
            }
        })
    }


    async function changeListActiveCard(target: any) {
        let element = target.closest((`.${styles.customerContainerActive}`)) || target.closest((`.${styles.customerContainer}`))
        if (target.closest((`.${styles.customerContainerActive}`))) {

            const newlist = (
                listActiveCard.map((card) => {
                    return ({
                        ...card,
                        isActive: false
                    })
                })
            )
            setlistActiveCard(newlist);
        }

        if (target.closest((`.${styles.customerContainer}`))) {
            const newlist = (
                listActiveCard.map((card) => {
                    if (target.closest((`.${styles.customerContainer}`)).dataset.key === card.login) {
                        return ({
                            ...card,
                            isActive: true
                        })
                    } else {
                        return ({
                            ...card,
                            isActive: false
                        })
                    }
                })
            )
            setlistActiveCard(newlist);
        }
        return element
    }

    const selectActiveCard = (event: EventMouse<HTMLDivElement, any>) => {
        const target:HTMLElement = event.target;
        let element:HTMLElement = target.closest((`.${styles.customerContainerActive}`)) || target.closest((`.${styles.customerContainer}`))

        if (!element) return
        if (target.closest((`.${styles.customerActiveDescription}`))) {
            return
        }

        let shiftLeft = 180 - +element.getBoundingClientRect().left;

        if (isBefore(listActiveCard, element)) {
            shiftLeft = shiftLeft + 180;
        }

        changeListActiveCard(target).then(
            (element) => {
                movingTo(shiftLeft, element)
            })


    }

    return selectActiveCard
}



