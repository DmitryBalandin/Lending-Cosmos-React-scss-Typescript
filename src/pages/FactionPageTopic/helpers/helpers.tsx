import React from "react";
import { Event } from "../date/date";



export const constuctorResizeHandler = (arrSize:any,setcalcSizeScreen:React.Dispatch<React.SetStateAction<string>>) =>{
    const handler = () => {
        const weight = window.innerWidth;
        setcalcSizeScreen(() => arrSize.find((item:any) => item.size >= weight).name);
    }
    return handler
};

export const handlerMouse = (setIsActiveButton: React.Dispatch<React.SetStateAction<boolean>>, boolean: boolean) => {
    const handler = (event: Event) => {
        if (!event.target.closest("BUTTON")) {

            return;
        }
        setIsActiveButton(boolean);
    }
    return handler
};


export const throttle = (func: any, ms: number) => {
    let thisArgs: any, thisContext: any
    let isThrotelle: boolean = false;

    function wrapper() {

        if (isThrotelle) {
            thisArgs = arguments;
            thisContext = this;
            return
        }

        func.call(this, ...arguments);

        isThrotelle = true;

        setTimeout(() => {
            isThrotelle = false;
            if (thisArgs) {
                wrapper.call(thisContext, ...thisArgs)
                thisArgs = thisContext = null;
            }
        }, ms)
    }
    return wrapper
}

























   // const handleMouseEnter = (event:Event) => {
    //     if (!event.target.closest("BUTTON")) {

    //         return;
    //     }
    //     setIsActiveButton(true);
    // }
    // const handleMouseLeave = (event: Event) => {
    //     if (!event.target.closest("BUTTON")) {
    //         return;
    //     }
    //     setIsActiveButton(false);
    // }
