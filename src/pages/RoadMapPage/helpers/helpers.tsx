import { ButtonCard } from '@/pages/RoadMapPage/date/dateButtonCards';
import React from 'react';
interface State {
    isActive: number;
    arrayDateCard: Array<ButtonCard>;
    numberImage: number
}

interface Event extends React.MouseEvent<HTMLUListElement>{
    target:any
}

export const handleClick = (styles: Array<any>, state: State, setState: React.Dispatch<React.SetStateAction<State>>) => {
    const handleClick = (e: Event) => {
        let target: any;
        console.log("sa")
        
        styles.forEach((style) => {
            target = e.target.closest(`.${style}`)
        })

        if (target) {
            const changeActiveButtonsCard = state.arrayDateCard.map((dateCard: any) => {

                return dateCard.id === +target.dataset.id ? { ...dateCard, isActive: true, } : { ...dateCard, isActive: false }
            })

            setState({
                isActive: +target.dataset.id,
                arrayDateCard: changeActiveButtonsCard,
                numberImage: +target.dataset.id
            })
        }
    }
    return handleClick
}

export {State}