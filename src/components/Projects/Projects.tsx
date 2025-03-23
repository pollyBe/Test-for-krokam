import {ProjectCard} from "@/uiComponents/projectCard";
import style from './projects.module.scss';


export interface IProject {
    id?:number;
    image:string;
    description:string;
}
const projectsInfo:IProject[] = [
    {
        id: 1,
        image: 'src/assets/images/img1.png',
        description: 'Audio guide of the archaeological museum «Biarescie»'
    },
    {
        id: 2,
        image: 'src/assets/images/img2.png',
        description: 'Audio guide for the international exhibition "Belarus and the Bible",\n' +
            '20 September - 21 October 2018'
    },
    {
        id: 3,
        image: 'src/assets/images/img3.png',
        description: 'NASB Museum audio guide'
    },
    {
        id: 4,
        image: 'src/assets/images/img4.png',
        description: 'Audio guide «Krokapp» throughout Belarus'
    },
    {
        id: 5,
        image: 'src/assets/images/img5.png',
        description: 'Audio guide for printing houses of Grand Duchy of Lithuania on the territory of Belarus'
    },
    {
        id: 6,
        image: 'src/assets/images/img6.png',
        description: 'Storywhere'
    },
    {
        id: 7,
        image: 'src/assets/images/img7.png',
        description: 'The audio guide of the XXVI International ICT Forum TIBO-2019 (TIBO)'
    },
    {
        id: 8,
        image: 'src/assets/images/img8.png',
        description: 'Lida Castle Audio Guide'
    },
    {
        id: 9,
        image: 'src/assets/images/img9.png',
        description: 'Fish Pits Navigator'
    },
    {
        id: 10,
        image: 'src/assets/images/img10.png',
        description: 'Botanical Garden Audio guide'
    },
    {
        id: 11,
        image: 'src/assets/images/img11.png',
        description: 'Offer your audio guide'
    }
]

export const Projects = () =>{
    return (
        <section className={style.projectsSection}>
            <div className="container">
                <h2>Our projects</h2>
                <ul className={style.projectsList}>
                    {projectsInfo.map(project =>{
                        return <li key={project.id}><ProjectCard image={project.image} description = {project.description}/></li>
                    })}
                </ul>
            </div>
        </section>
    )
}