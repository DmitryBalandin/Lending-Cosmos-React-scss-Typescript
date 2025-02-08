import img1 from '../image/BADLANDS TITLE 1.png';
import img2 from '../image/GLACIAL TITLE 2.png';
import img3 from '../image/GROVE TITLE 3.png';
import img4 from '../image/SKY TITLE 4.png';
import img100 from '../image/BADLANDS BIG.png';
import img210 from '../image/GLACIAL BIG 0.png';
import img211 from '../image/GLACIAL BIG 1.png';
import img310 from '../image/GROVE BIG 0.png';
import img311 from '../image/GROVE BIG 1.png';
import img410 from '../image/SKY BIG 0.png';
import img411 from '../image/SKY BIG 1.png';

const arrImageBig = [img1, img2, img3, img4];
const arrImageSmall = [[img100],[img210,img211],[img310,img311],[img410,img411]];

const arrBackground = ['0', '1', '2', '3'];


const describePage:Array<Array<string>> = [
    ['Modern-day Dusktopia begins here',
        'The first thing that counts here is survival Only then can you think of profit; then finally domination',
        'Forge your alliances with the EON Corporation, the rival mafia gangs, or even an utterly corrupt police force - and crush all standing in your way'
    ],
    [
        'The home of everything warfare in Dusktopia',
        'Mercenaries and soldiers take payouts from the Cabal to do its bidding - but some want more for themselves, and are willing to go against power itself to get it',
        'Which side are you joining',
    ],
    [
        'Dusktopia is last remaining sanctuary of peace',
        'Researchers and scientists congregate here to live in religious pacifism, spending their time developing a renewable energy source for the world',
        'A small faction wants more - selling Aurium on the black market for their own personal gain',
        'Will you root out the traitors or join them?',
    ],
    [
        'These are where the apex predators in Dusktopia reside',
        'The political and economic masters of all society: living high above the suffering of ordinary denizens, and calmly plot elevated pursuits like space colonization in absolute peace',
        'If you are lucky enough to be part of it, hold on tight - everybody wants what you have'
    ]
];


export { arrBackground, describePage,arrImageBig, arrImageSmall}