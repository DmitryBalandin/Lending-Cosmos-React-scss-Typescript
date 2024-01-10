
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import cl from "classnames";

import discord from "./images/Vector.png";
import twitter from './images/logos_twitter.png';
import antDesign from './images/ant-design_medium-circle-filled.png';


interface SocialNetworksProps { }

const socialNetworks = [
    {   
        title: "Diccord",
        id:1,
        className: "Diccord",
        link:"https://discord.com/",
        img: discord
    },
    {
        title: "twitter",
        id:2,
        className: "twitter",
        link:"https://twitter.com/",
        img:twitter
    },
    {   
        title: "AntDesign",
        id:1,
        className: "AntDesign",
        link:"https://ant.design//",
        img:antDesign
    }

];

export const SocialNetworks: React.FC<SocialNetworksProps> = ({ }) => {
    return (
        <ul className={styles.socialNetworks}>
           {socialNetworks.map((socialNetwork) =>(
             <li key={socialNetwork.id} className={styles.socialNetworksItem}>
                <Link 
                to={socialNetwork.link} 
                className={cl(styles.socialNetworksLink,styles[`socialNetworks.${socialNetwork.className}`])}
                >
                    <img src={socialNetwork.img} alt={`image ${socialNetwork.className}`} />
                </Link>
             </li>
           ))}
        </ul>)
    }