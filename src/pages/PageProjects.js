import { Helmet } from "react-helmet";
import { useState, useEffect } from 'react';
import { projectsData } from '../data/projectsData';
import ProjectFilters from "../components/ProjectFilters";
import ProjectItem from "../components/ProjectItem";
import { motion } from "framer-motion";

const PageProjects = () => {

  const [ filter, setFilter ] = useState('All');
  const [ projects, setProjects ] = useState(projectsData);

  useEffect(() => {
    const filteredProjects = projectsData.filter( project => project.category.includes(filter) );
    setProjects(filteredProjects);
  }, [filter]);

  if ( !projects ) {
    return;
  }

  const header = {
    hidden: { y: '50px', opacity: 0 },
    show: { y: '0px', 
            opacity: 1, 
            transition: { 
                            delay: 0,
                            x: { type: 'spring', stiffness: 50 },
                            default: { duration: .5 }  }},
  }

  const projectsAnimate = {
    hidden: { y: '50px', opacity: 0 },
    show: { y: '0px', 
            opacity: 1, 
            transition: { 
                            delay: 1.5,
                            x: { type: 'spring', stiffness: 50 },
                            default: { duration: .5 }  }},
  }

  return (
    <div className="projects">
      <Helmet>
          <title>Projects Page</title>
          <meta name="description" content="The projects page for Dennis Kim's Portfolio."/>
          <meta name="keywords" content="Projects, Works, Web Developer, Front-End, Development, Web Development, Jr. Developer, HTML, CSS, JavaScript, Portfolio" />
      </Helmet>
        <motion.h1
        variants={header}
        initial='hidden'
        whileInView="show"
        viewport={{ once: true }}
        >
            Projects
        </motion.h1>
        <ProjectFilters setFilter={setFilter}/>
        <motion.div
        variants={projectsAnimate}
        initial='hidden'
        whileInView="show"
        viewport={{ once: true }}
        className='project-wrapper'>
        
        {
          projects && projects.map( (project, i) => <ProjectItem key={i} project={project}/>)
        }
        </motion.div>
    </div>
  )
}

export default PageProjects;