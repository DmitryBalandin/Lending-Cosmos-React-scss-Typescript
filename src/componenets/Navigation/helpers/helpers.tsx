import { Links } from "@/componenets/date/date";
 



const funcMadeCallback = (links: Array<Links>, setNavigatorVisiable: React.Dispatch<React.SetStateAction<Array<Links>>>) => {

    const callback = (entries: any) => {
        entries.forEach((entry: any) => {
            if (entry.isIntersecting) {

                const idItem = entry.target.getAttribute('id')
                let valueSlice = (+idItem - 1) < 0 ? 1 : +idItem;

                valueSlice = valueSlice === (links.length - 1) ? --valueSlice : valueSlice;

                const newArrNavationView = links.slice(
                    valueSlice - 1,
                    valueSlice + 2,
                )
                newArrNavationView.forEach((item) => {
                    (item.id === +idItem) ? item.isActiv = true : item.isActiv = false;
                })
             
                setNavigatorVisiable(newArrNavationView)
            }
        })
    }
    return callback
}


export { funcMadeCallback };