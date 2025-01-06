
import { ReactNode } from "react";
import styles from "./styles.module.scss";

import React from "react";

import { arrImageBackground } from "./date/dateImg";



interface ImageRoadMap {
    numberImage:number

}

interface dateEllipse{
    top:number,
    left:number,
    
}

export const ImageRoadMap: React.FC<ImageRoadMap> = ({numberImage }) => {

    const arrEllipse:Array<dateEllipse> =[
        {top:240,left:537},
        {top:609,left:328},
        {top:757,left:363},
        {top:900,left:357},
        {top:1239,left:335},
        
    ]


    return (
        <div className={styles.container}>
            <img
                src={arrImageBackground[numberImage]}
                alt="img"
                className={styles.picture}
            />
            {arrEllipse.map((value) =>{
                return (
                <div className={styles.ellipse} style={{top:value.top,left:value.left}}></div>
            )
            })}
            
        </div>
    )
}