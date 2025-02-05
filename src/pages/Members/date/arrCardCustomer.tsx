import avatar1 from '../image/Avatar1.png';
import avatar2 from '../image/Avatar2.png';
import avatar3 from '../image/Avatar3.png';
import avatar4 from '../image/Avatar4.png';


interface CardCustomer {

    avatar: string | undefined;
    career: string;
    login: string;
    isActive: boolean;
    description?: string;
}

const arrCardCustomer: Array<CardCustomer> = [
    {
        avatar: avatar1,
        career: "Co-founder / Ecosystem Chief",
        login: "@jaypeggsonly",
        description: "@jaypegsonly was a corporate finance lawyer at a top global firm who has advised institutional clients, MNCs and VCs. He has worked on deals well over US$1B. Having delved into NFTs since July 2021, he brings his expertise and connections from Web2 into the Web3 world. With all these resources and experience, he aims to build a sustainable, scaleable ecosystem with Dusktopia",
        isActive: true,
    },
    {
        avatar: avatar2,
        career: "Co-founder / Operations Chief",
        login: "@0xSUPERHEROPOTATO",
        description: "@jaypegsonly  institutional clients, MNCs and VCs. He has worked on deals well over US$1B. Having delved into NFTs since July 2021, he brings his expertise and connections from Web2 into the Web3 world. With all these resources and experience, he aims to build a sustainable, scaleable ecosystem with Dusktopia",
        isActive: false,
    },
    {
        avatar: avatar3,
        career: "Co-founder / Design Chief",
        login: "@madking3126",
        description: "@jaypegsonly was a corporate finance lawyer at a top global firm who has advised institutional clients, MNCs and VCs. He has worked on deals well over US$1B. Having delved into NFTs since July 2021, he brings his expertise and connections from Web2 into the Web3 world. With all these resources and experience, he aims to build a sustainable, scaleable ecosystem with Dusktopia",
        isActive: false,
    },
    {
        avatar: avatar4,
        career: "Blockchain Chief ",
        login: "@ITSCUZZO",
        description: "@jaypegsonly was a corporate finance lawyer at a top global firm who has advised institutional clients, MNCs and VCs. He has worked on deals well over US$1B. Having delved into NFTs since July 2021, he brings his expertise and connections from Web2 into the Web3 world. With all these resources and experience, he aims to build a sustainable, scaleable ecosystem with Dusktopia",
        isActive: false,
    },
    {
        avatar: avatar1,
        career: "Co-founder / Ecosystem Chief",
        login: "@jaypegsonl",
        description: "@jaypegsonly was a corporate finance lawyer at a top global firm who has advised institutional clients, MNCs and VCs. He has worked on deals well over US$1B. Having delved into NFTs since July 2021, he brings his expertise and connections from Web2 into the Web3 world. With all these resources and experience, he aims to build a sustainable, scaleable ecosystem with Dusktopia",
        isActive: false,
    },
    {
        avatar: avatar2,
        career: "Co-founder / Operations Chief",
        login: "@0xSUPERPOTAT",
        description: "@jaypegsonly was a corporate finance lawyer at a top global firm who has advised institutional clients, MNCs and VCs. He has worked on deals well over US$1B. Having delved into NFTs since July 2021, he brings his expertise and connections from Web2 into the Web3 world. With all these resources and experience, he aims to build a sustainable, scaleable ecosystem with Dusktopia",
        isActive: false,
    },
    {
        avatar: avatar3,
        career: "Co-founder / Design Chief",
        login: "@madking312",
        description: "@jaypegsonly op gnstitutional clients, MNCs and VCs. He has worked on deals well over US$1B. Having delved into NFTs since July 2021, he brings his expertise and connections from Web2 into the Web3 world. With all these resources and experience, he aims to build a sustainable, scaleable ecosystem with Dusktopia",
        isActive: false,
    },
    {
        avatar: avatar4,
        career: "Blockchain Chief ",
        login: "@ITSCUZZ",
        description: "@jaypegsonly w global firm who has advised institutional clients, MNCs and VCs. He has worked on deals well over US$1B. Having delved into NFTs since July 2021, he brings his expertise and connections from Web2 into the Web3 world. With all these resources and experience, he aims to build a sustainable, scaleable ecosystem with Dusktopia",
        isActive: false,
    }
]


export {CardCustomer, arrCardCustomer};