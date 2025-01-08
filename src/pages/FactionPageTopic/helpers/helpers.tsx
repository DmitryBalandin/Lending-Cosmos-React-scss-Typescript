import React from "react";
import { EventMouse, SizeScreen } from "@/globalType";


export const constuctorResizeHandler = (arrSize: Array<SizeScreen>, setcalcSizeScreen: React.Dispatch<React.SetStateAction<string>>):(()=>void) => {
    const handler = () => {
        const weight = window.innerWidth;
        setcalcSizeScreen(() => arrSize.find((item) => item.size >= weight).name);
    }
    return handler
};

export const handlerMouse = (setIsActiveButton: React.Dispatch<React.SetStateAction<boolean>>, boolean: boolean) => {
    const handler = (event: EventMouse<HTMLDivElement, HTMLDivElement>) => {
        if (!event.target.closest("BUTTON")) {
            return;
        }
        setIsActiveButton(boolean);
    }
    return handler
};


export const throttle = (func: ()=> void, ms: number) => {
    let thisArgs: IArguments, thisContext: () => void;
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
