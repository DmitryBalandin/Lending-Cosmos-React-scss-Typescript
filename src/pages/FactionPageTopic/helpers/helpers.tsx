import React from "react";
import { EventMouse} from "@/globalType";




export const handlerMouse = (setIsActiveButton: React.Dispatch<React.SetStateAction<boolean>>, boolean: boolean) => {
    const handler = (event: EventMouse<HTMLDivElement, HTMLDivElement>) => {
        if (!event.target?.closest("BUTTON")) {
            return;
        }
        setIsActiveButton(boolean);
    }
    return handler
};




























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
