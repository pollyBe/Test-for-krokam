import style from './card.module.scss'
import {IProject} from "@/components/Projects";

export const ProjectCard = ({image, description}:IProject)=>{
    return (
        <div className={style.cardWrap}>
            <div className={style.imgWrap}>
                <img src={image} alt="image"/>
            </div>
            <p>{description}</p>
        </div>
    )
}