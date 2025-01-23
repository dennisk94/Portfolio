import React from 'react'
import { Helmet } from "react-helmet";
import { useState, useEffect } from 'react';
import FilterButtons from '../Components/Filters/FilterButtons';
import ProjectCard from '../Components/Project/ProjectCard';
import { filters } from '../Globals/Variables';
import { projectData } from '../data/projectData';

const Work = () => {

  const [projectsData, setProjectsData] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    setProjectsData(projectData);
    filterProjects(filter);
  }, [filter])


  const filterProjects = (filter) => {
    if (filter !== 'All') {
      setProjectsData(projectData.filter((project) => project.category.includes(filter)));
    } else {
      setProjectsData(projectData);
    }
  }

  return (
    <div className='work'>
      <Helmet>
        <title>Dennis Kim | Work</title>
        <meta name="description" content="The projects page for Dennis Kim's Portfolio." />
        <meta name="keywords" content="Projects, Works, Web Developer, Front-End, Development, Web Development, Jr. Developer, HTML, CSS, JavaScript, WordPress, Portfolio" />
      </Helmet>
      <div className="intro">
        <h1 className="heading">
          Projects
        </h1>
        <p className="text">
          An assortment of projects I have worked on over the years. The list is updated throughout the year, so stay tuned for more!
        </p>
      </div>
      <div className="filters">
        <FilterButtons filters={filters} setFilter={setFilter} />
      </div>
      <div
        className="works-wrapper">
        {
          projectsData.map((project, i) => <ProjectCard project={project} key={i} />)
        }
      </div>
    </div>
  )
}

export default Work