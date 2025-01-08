
import React, { ChangeEvent } from "react"
import { CardCustomer } from "@/pages/Members/date/arrCardCustomer"
import { IClassNames, EventMouse } from "@/globalType"


export const helper = (styles: IClassNames, listActiveCard: Array<CardCustomer>, setlistActiveCard: React.Dispatch<React.SetStateAction<Array<CardCustomer>>>) => {

    const selectActiveCard = (event: EventMouse<HTMLDivElement, any>) => {
        const target = event.target;

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



