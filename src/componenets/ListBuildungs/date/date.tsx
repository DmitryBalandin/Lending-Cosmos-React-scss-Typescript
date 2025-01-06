import imgAct1 from '../image/badlance/one Act.png';
import imgAct2 from '../image/badlance/two act.png';
import imgAct3 from '../image/badlance/third act.png';
import imgAct4 from '../image/badlance/four act.png';

import img1 from '../image/badlance/one.png';
import img2 from '../image/badlance/two.png';
import img3 from '../image/badlance/four.png';
import img4 from '../image/badlance/four.png';

export interface ListBildingsArr{
    id:number;
    isActive:boolean;
    image:string | undefined;
}

export const listBuldingsArr:Array<ListBildingsArr> = [
    {
        id: 0,
        isActive: true,
        image: imgAct1
    },
    {
        id: 1,
        isActive: true,
        image: imgAct2
    },
    {
        id: 2,
        isActive: true,
        image: imgAct3
    },
    {
        id: 3,
        isActive: true,
        image: imgAct4
    },
    {
        id: 4,
        isActive: false,
        image: img1
    },
    {
        id: 5,
        isActive: false,
        image: img2
    },
    {
        id: 6,
        isActive: false,
        image: img3
    },
    {
        id: 7,
        isActive: false,
        image: img4
    },
]
