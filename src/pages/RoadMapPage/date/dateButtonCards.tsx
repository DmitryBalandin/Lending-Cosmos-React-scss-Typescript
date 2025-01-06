import React from "react";

interface ButtonCard {
    number: string;
    id: number;
    name: string;
    opinion?: string;
    isActive: boolean;
}

 const buttonCards: Array<ButtonCard> = [
    {
        number: '01',
        id: 0,
        name: 'GENESIS Lands DROP',
        opinion: 'An original collection of 5,555 land plots will be made ready for the very first Dusktopian adventurers.',
        isActive: true,
    },
    {
        number: "02",
        id: 1,
        name: 'STAKING GOES LIVE',
        opinion: 'The EON Corporation Superbank begins rewarding Dusktopians staking their land plots with $DAWN',
        isActive: false
    },
    {
        number: "03",
        id: 2,
        name: 'STAKING GOES LIVE',
        opinion: 'Claim a slice of our secret land collection with $DAWN. Outfit your existing land with new properties and accessories',
        isActive: false
    },
    {
        number: "04",
        id: 3,
        name: 'AVATAR COLLECTION DROP',
        opinion: 'avatars you will use for in-universe interaction, synergized with your asset holdings',
        isActive: false
    },
    {
        number: "05",
        id: 4,
        name: 'LET THE GAMES BEGIN ',
        isActive: false
    }
];

export {buttonCards,ButtonCard};