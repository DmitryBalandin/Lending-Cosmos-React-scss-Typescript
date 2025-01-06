
import React from "react"
import { CardCustomer } from "@/pages/Members/date/arrCardCustomer"





interface Event extends React.MouseEvent{
    target:any
    }


export const helper = (styles:any, listActiveCard:Array<CardCustomer>,setlistActiveCard:React.Dispatch<React.SetStateAction<Array<CardCustomer>>>) =>{
   
    const selectActiveCard = (event:Event) => {
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


 
