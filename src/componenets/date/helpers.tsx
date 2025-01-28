import { SizeScreen,Links } from "@/globalType";

export const constuctorResizeHandler = (arrSize: Array<SizeScreen>, setcalcSizeScreen: React.Dispatch<React.SetStateAction<string>>):(()=>void) => {
    const handler = () => {
        const weight = window.innerWidth;
        setcalcSizeScreen(() => arrSize.find((item) => item.size >= weight).name);
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

export const moveToSection = (event: React.MouseEvent<HTMLElement>, link: Links, arrSection: HTMLCollectionOf<Element>): void => {
    event.preventDefault();
    if(!arrSection[link.id]){return}
    
    arrSection[link.id].scrollIntoView({ block: "start", behavior: "smooth" });
}