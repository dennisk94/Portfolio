import { Link } from 'react-router-dom';
import { IconGenerator } from './IconGenerator';

const ProjectItem = ( { project } ) => {
  return (

        <div className="project-item">
            <div className="project-item__info">
                <h2>
                    { project.title }
                </h2>
                <img src={project.thumbnail} alt={ project.title } />
                <div>
                <div className="project-item__overview">
                    <p>
                        { project.excerpt }
                    </p>
                </div>
                <div className="project-item__tech">
                    <ul>
                        {
                            project.tech.map( ( item, i ) => <li key={i}>{ IconGenerator(item) }</li>)
                        }
                    </ul>
                </div>
                </div>
            </div>
            <div className="project-item__links">
                <a href={project.liveUrl} className="project-item__live">
                    Live Site
                </a>
                <a href={project.githubUrl} className="project-item__GitHub">
                    GitHub
                </a>
                {
                    project.moreInfo && 
                    <Link to={`/project/${project.slug}`} className="project-item__more">
                        More Info
                    </Link>
                }
            </div>
        </div>
  )
}
export default ProjectItem;