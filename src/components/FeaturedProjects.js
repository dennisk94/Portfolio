import FeaturedItem from "./FeaturedItem";
import { useEffect, useState } from "react";
import { projectsData } from "../data/projectsData";

const FeaturedProjects = () => {

  const [ featuredProjects, setFeaturedProjects ] = useState(null);
  useEffect(() => {
    const featuredProjectsData = projectsData.filter( project => project.featured === true );
    setFeaturedProjects(featuredProjectsData);
  }, []);

  return (
    <div className="featured-wrapper">
        <h2>
            Featured Projects
        </h2>

        {
        featuredProjects &&  featuredProjects.map( (project,i) => <FeaturedItem
                                                                            key={i}
                                                                            title={project.title}
                                                                            slug={project.slug}
                                                                            excerpt={project.excerpt}
                                                                            tech={project.tech}
                                                                            thumbnail={project.thumbnail}
                                                                            githubUrl={project.githubUrl}
                                                                            liveUrl={project.liveUrl}
        />)
        }
    </div>
  )
}

export default FeaturedProjects;