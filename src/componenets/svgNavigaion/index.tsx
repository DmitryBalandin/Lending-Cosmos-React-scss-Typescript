
import React from "react";
import styles from "./styles.module.scss";
import cl from "classnames";

import createLocatrioDiamond from './helper';

interface SvgNavigation {
    lineHeight: number[],
    allLineHight: number,
    activityDiamond: number,
    handler?: any
}

export const SvgNavigation: React.FC<SvgNavigation> = ({ lineHeight, allLineHight, activityDiamond, handler }) => {


    const isFiveDiamond = lineHeight[2] != undefined;


    const locationDiamond = createLocatrioDiamond(lineHeight, allLineHight);




    const fivtheensLine = isFiveDiamond ? `l 0 ${lineHeight.reduce((a, b) => a - b, allLineHight - 244)}
    l -15.5619  12.8139  l -0 20 
    l 15.5619  12.8139  l -0.000` : " ";

    const str = `M 19.3078 2.0002 
                l -15.5619 12.8139 l 0 20 
                l 15.5619 12.8139 l 0 ${lineHeight[0]} 
                l 15.5619  12.8139  l 0 20
                l -15.5619  12.8139   l 0.000 ${lineHeight[1]} 
                l -15.5619  12.8139  l -0 20 
                l 15.5619  12.8139  l -0.000 
                ${isFiveDiamond ? lineHeight[2] : lineHeight.reduce((a, b) => a - b, allLineHight - 198)}
                 l 15.5619  12.8139  l 0 20
                 l -15.5619  12.8139 ${fivtheensLine}`


    return (
        <div onClick={handler}>


            <svg width="37" height={allLineHight} viewBox={`-0 00 37 ${allLineHight}`} fill="none">
                <path d={str} stroke="white" strokeWidth="4.80588" />
                {locationDiamond.map((value, index) => {
                    return <svg key={index} x="2" y={value} width="33" height="47" viewBox="0 0 33 47" fill="none"  >
                        <g filter="url(#filter0_b_0_427)">
                            <path d="m 16.6866 0.7983 l 15.192 12.6828 l 0.6614 19.6582 l -15.8534 13.3168 l -15.8807 -12.6827 v -20.2923 l 15.8807 -12.6828 z" fill="white" fillOpacity="0.27" />
                        </g>
                        <defs>
                            <filter id="filter0_b_0_427" x="-23.6049" y="-23.6125" width="80.5558" height="94.4793" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="12.2054" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_427" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_0_427" result="shape" />
                            </filter>
                        </defs>

                    </svg>
                })}


                {locationDiamond.map((value, index) => {

                    const correctinX = index % 2 === 0 ? '1' : '-3'

                    if (index === activityDiamond) {
                        return (

                            <svg key={index} id={`${index}`} className="diamond" data-id={index} x={correctinX} y={value}
                                width="33" height="43" viewBox="0 0 33 43" fill="none" cursor="pointer">
                                <g filter="url(#filter0_d_0_432)">
                                    <path d="m 19.7657 9.142 l 9.7158 9.2429 v 10.3302 l -9.7158 10.3302 l -9.8572 -10.3302 v -10.3302 l 9.8572 -9.2429 z" fill="url(#paint0_linear_0_432)" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_0_432" x="0.805744" y="0.1215" width="31.7784" height="42.1087" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4.88216" />
                                        <feGaussianBlur stdDeviation="3.05135" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.839216 0 0 0 0 0.752941 0 0 0 0 0.937255 0 0 0 0.56 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_432" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_432" result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear_0_432" x1="8.12899" y1="25.1426" x2="25.2166" y2="9.27555" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#2CD8D5" />
                                        <stop offset="0.56" stopColor="#C5C1FF" />
                                        <stop offset="1" stopColor="#FFBAC3" />
                                    </linearGradient>
                                </defs>

                            </svg>

                        )
                    } else return (
                        <svg key={index} id={`${index}`} className="diamond" data-id={index} x={correctinX} y={value} width="32" height="43" viewBox="0 0 32 43" fill="none">
                            <g filter="url(#filter0_d_0_433)" cursor="pointer">
                                <path d="m 19.7657 9.142 l 9.7158 9.2429 v 10.3302 l -9.7158 10.3302 l -9.8572 -10.3302 v -10.3302 l 9.8572 -9.2429 z" fill="white" />
                            </g>
                            <defs>
                                <filter id="filter0_d_0_433" x="7.96318e-05" y="0.581461" width="31.7784" height="42.1087" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4.88216" />
                                    <feGaussianBlur stdDeviation="3.05135" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.839216 0 0 0 0 0.752941 0 0 0 0 0.937255 0 0 0 0.56 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_433" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_433" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    )

                })}
            </svg>
        </div>
    )
}





