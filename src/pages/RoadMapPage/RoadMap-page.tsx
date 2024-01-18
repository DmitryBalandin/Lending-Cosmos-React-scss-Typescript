import cl from "classnames";
import styles from './styles.module.scss';


interface RoadMapPage { };

export const RoadMapPage:React.FC<RoadMapPage>  =  ({}) => {
    return (
        <section className={cl(styles.section, styles.sectionRoadmap)}>

        </section>
    )
}