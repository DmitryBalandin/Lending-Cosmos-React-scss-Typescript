import React from "react"

interface IClassNames {
    [className: string]: string
}

interface EventMouse<T,E> extends React.MouseEvent<T> {
    target: EventTarget & E
}

type NameSize = "Smallest"|"Small" | "Medium" | "Large" | "Xlarge";

type SizeScreen = {
    name:NameSize;
    size:number 
}

interface Links {
    id: number;
    title: string;
    link: string;
    isActiv: boolean;
}

interface Event extends React.MouseEvent<HTMLDivElement> {
    target: HTMLDivElement
}
export {IClassNames, EventMouse, NameSize, SizeScreen, Links}