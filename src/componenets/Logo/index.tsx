
import styles from "./styles.module.scss";
import cl from "classnames";
import { Link, useLocation, useNavigate, useParams} from "react-router-dom";
import React from "react";
import { Navigate } from "react-router-dom";
interface LogoProps { }

export  const Logo: React.FC<LogoProps> = ({ }) => {
    
    return (
        <h1 className={cl(styles.logo)}  >
            
            <Link to="/">
                Duskotpia
            </Link>
           
        </h1>
    )
}