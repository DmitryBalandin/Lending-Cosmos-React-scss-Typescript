import React, { useState } from "react";
import styles from '@/componenets/RangeSvg/styles.module.scss';
import cl from 'classnames';
import slider from './image/Group 48095882.png';

interface RangeSvg {
    
}

export const RangeSvg: React.FC<RangeSvg> = ({}) => {


    const [styleContainerSvg, setStyleContinerSvg] = useState<{marginLeft:string}>({ marginLeft: '-11px' })
    const [inputValue, setInputValue] = useState<number>(0);
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(+e.target.value)
        
        setStyleContinerSvg({
            marginLeft: `${-11 + +e.target.value * 4}px`

        })
    }
      

    return (<div className={cl(styles.container)}>
        <input onInput={handleInput} type="range" min={0} max={100}
            value={inputValue}
            className={cl(styles.inputRange)

            } />

        <div className={cl(styles.containerSvg)}>

            <img src={slider} alt="slider" className={cl(styles.containerSlider)}
                style={styleContainerSvg}
            />
        </div>
    </div>)
}