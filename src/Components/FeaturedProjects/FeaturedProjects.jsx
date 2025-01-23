import React from 'react'
import { useState, useEffect } from 'react';
import ProjectCard from '../Project/ProjectCard'
import { projectData } from '../../data/projectData';

const FeaturedProjects = () => {

  const [featuredProjects, setFeaturedProjects] = useState(null);

  useEffect(() => {
    const featuredProjects = projectData.filter((project) => project.featured == true)
    setFeaturedProjects(featuredProjects);
  }, []);

  const renderFeaturedProjects = () => {
    return (
      featuredProjects.map((featuredProject, i) => <ProjectCard project={featuredProject} key={i} />)
    )
  }
  if (!featuredProjects) {
    return;
  }

  return (
    <div className='featured-projects'>
      <h2 className="heading">
        Featured Projects
      </h2>
      {
        renderFeaturedProjects()
      }
    </div>
  )
}

export default FeaturedProjects