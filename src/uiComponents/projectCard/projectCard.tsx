export const ProjectCard = (image, description)=>{
    return (
        <div>
            <div>
                <img src={image} alt="image"/>
            </div>
            <p>{description}</p>
        </div>
    )
}