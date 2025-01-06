interface Links {
    id: number;
    title: string;
    link: string;
    isActiv: boolean;
}



const links: Array<Links> = [
    {
        id: 0,
        title: "Home",
        link: '/',
        isActiv: true
    },
    {
        id: 1,
        title: "Factiion",
        link: '/Factiion',
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
        title: "Partners",
        link: '/Partners',
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
        title: "Members",
        link: '/Members',
        isActiv: false
    },

];


export {Links, links};