import React, { useRef, useState } from "react";
import cl from "classnames";
import styles from './styles.module.scss';
import { CardCustomer } from "@/pages/Members/date/arrCardCustomer";
import  {helper}  from "./helpers/selectActiveCard";

interface Carausel {
    arrCardCustomers: Array<CardCustomer>
}


export const Carausel: React.FC<Carausel> = ({ arrCardCustomers }) => {


    const [listActiveCard, setlistActiveCard] = useState(() => arrCardCustomers)
     
   
    

    const selectActiveCard = helper(styles,listActiveCard,setlistActiveCard);

  

    return (
        <div className={cl(styles.carauselContainer)}
            onClick={selectActiveCard}
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

    )
}