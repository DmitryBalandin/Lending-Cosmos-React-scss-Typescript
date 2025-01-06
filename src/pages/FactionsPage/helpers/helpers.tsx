
interface State {
    isActive: number;
    sizeLine: Array<number>,
    heightLine: number
}


const handleClick = (styles: Array<string>, state: State, setState: React.Dispatch<React.SetStateAction<State>>) => {
    const handleClick = (e: any) => {
        let target: any;

        styles.forEach((style) => {
            target = e.target.closest(`${style}`)
        })

        if (target) {
            const sizeLine = [61, 61]
            const heightLine = +target.dataset.id === 3 ? 381 : 527;
            if (+target.dataset.id < 2) {
                sizeLine[+target.dataset.id] = 207;
            }
            setState({
                isActive: +target.dataset.id,
                sizeLine: [...sizeLine],
                heightLine: heightLine
            })
        }
    }
    return handleClick
}

export { handleClick };