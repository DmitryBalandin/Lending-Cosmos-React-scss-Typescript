
import styles from "./styles.module.scss";
import cl from "classnames";

import { Link } from 'react-router-dom';

interface NavigationProps { }

export const Navigation: React.FC<NavigationProps> = ({ }) => {
    return (
        <ul>
            <li>
                <Link to="/">
                    Duskotpia
                </Link>
            </li>
            <li>
                <Link to="/">
                    Duskotpia
                </Link>
            </li>
            <li>
                <Link to="/">
                    Duskotpia
                </Link>
            </li>
        </ul>
    )
}