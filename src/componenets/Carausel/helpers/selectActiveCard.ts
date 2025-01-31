
import React, { ChangeEvent } from "react"
import { CardCustomer } from "@/pages/Members/date/arrCardCustomer"
import { IClassNames, EventMouse } from "@/globalType"
import { dir } from "console"




export const helper = (styles: IClassNames,
    listActiveCard: Array<CardCustomer>,
    setlistActiveCard: React.Dispatch<React.SetStateAction<Array<CardCustomer>>>,
    setLeftOffsetCarusel: React.Dispatch<React.SetStateAction<string>>) => {


    const isBefore = (list: Array<CardCustomer>, elem: any) => {
        const posActiv = list.findIndex(card => card.isActive === true);
        const posElem = list.findIndex(card => card.login === elem.dataset.key);
        return posActiv === -1 ? false : posElem > posActiv;
    }

    const selectActiveCard = (event: EventMouse<HTMLDivElement, any>) => {
        const target = event.target;
        let element = target.closest((`.${styles.customerContainerActive}`)) || target.closest((`.${styles.customerContainer}`))
        console.log(element.dataset.key, +element.getBoundingClientRect().left);





        let shiftLeft = 180 - +element.getBoundingClientRect().left;
        

        if (isBefore(listActiveCard, element)) {
            shiftLeft = shiftLeft + 180;
        }

          setLeftOffsetCarusel(prev => `${parseInt(prev) + shiftLeft}px`)

        // let inteval = setInterval(()=>{setLeftOffsetCarusel(prev => `${parseInt(prev) + shiftLeft / 500}px`)},2)
        // setTimeout(() => clearInterval(inteval),1021)
        console.log(shiftLeft/500)
        if (target.closest((`.${styles.customerActiveDescription}`))) {
            return
        }

        if (!target.closest((`.${styles.customerContainerActive}`)) && !target.closest(`.${styles.customerContainer}`)) {
            return
        }


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


    }

    return selectActiveCard
}



