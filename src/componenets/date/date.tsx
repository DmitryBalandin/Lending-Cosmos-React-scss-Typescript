import { SizeScreen,Links } from "@/globalType";



const arrSize:Array<SizeScreen> = [
    {name: "Smallest", size:577},
    { name:"Small", size: 768 },
    { name:"Medium", size: 992 },
    { name:"Large", size: 1320 },
    { name:"Xlarge", size: Infinity },
];

const links: Array<Links> = [
    {
        id: 0,
        title: "Home",
        link: '/',
        isActiv: true
    },
    {
        id: 1,
        title: "Faction",
        link: '/Faction',
        isActiv: false
    },
    {
        id: 2,
        title: "Roadmap",
        link: '/Roadmap',
        isActiv: false
    },
    {
        id: 3,
        title: "Collaboration",
        link: '/Collaboration',
        isActiv: false
    },
    {
        id: 4,
        title: "Faq",
        link: '/Faq',
        isActiv: false
    },
    {
        id: 5,
        title: "Team",
        link: '/Team',
        isActiv: false
    },

];



export {Links, links, arrSize};