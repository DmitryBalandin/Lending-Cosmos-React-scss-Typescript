import React from "react";
import styles from './styles.module.scss';
import cl from "classnames";
import { listBuldingsArr, ListBildingsArr } from "./date/date";
import { NameSize } from "@/globalType";


interface ListBuildungsProps {
    size: NameSize;
};

export const ListBuildungs: React.FC<ListBuildungsProps> = ({ size }) => {

    const amountRow = ["Small", "Medium", "Large", "Xlarge"].indexOf(size) + 1;

    const changesArrForFlex = (arr:Array<ListBildingsArr>, size: number): Array<Array<ListBildingsArr>> => {
        let changeArrBuldings:Array<Array<undefined | ListBildingsArr>>= [];
        for (let i = 0; i < size; i++) {
            changeArrBuldings.push([]);
        }

        arr.forEach((value, index) => {
            changeArrBuldings[index % size].push(value)
        })
        return changeArrBuldings;
    }

    const layoutListBuldigs = changesArrForFlex(listBuldingsArr, amountRow)
    return (

        <div className={cl(styles.container)}>
            {layoutListBuldigs.map((itemArr: Array<ListBildingsArr>) => {
                return (
                    <div
                        key={itemArr.reduce((accum, value) => {
                            return accum * value.id;
                        }, 3)}
                        className={cl(styles.containerInsideFlex)}
                    >
                        {itemArr.map((item: ListBildingsArr) => {
                            return (
                                <div key={item.id} className={cl(styles.item)}>
                                    <img src={item.image} alt="ImageBuildung" className={cl(styles.itemImage)} />
                                </div>
                            )
                        })}
                    </div>)
            })}
           
        </div>
    )
}