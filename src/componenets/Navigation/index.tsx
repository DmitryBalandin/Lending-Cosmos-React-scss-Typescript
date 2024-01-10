
import styles from "./styles.module.scss";
import cl from "classnames";

import { Link } from 'react-router-dom';


interface NavigationProps { }




const links = [
    {
        id:1,
        title:"Home",
        link:'/',
        isActiv:true
    },
    {
        id:2,
        title:"Factiion",
        link:'/',
        isActiv: false
    },
    {
        id:3,
        title:"Roadmap",
        link:'/',
        isActiv: false
    },
];

export const Navigation: React.FC<NavigationProps> = ({ }) => {
    return (
        <nav className={styles.navigation}>
            <ul className={cl(styles.navigationItem)}>
                {links.map((link) =>(
                    <li key={link.id} className={cl(styles.navigationValue,
                    link.isActiv && styles.navigationValueActive) }>
                        <Link 
                            to={link.link}
                            className={styles.navigationLink}
                        >
                            {link.title}
                            </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}