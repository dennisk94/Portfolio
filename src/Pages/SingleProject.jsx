import React from 'react'
import { Helmet } from "react-helmet";
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { formatProjectName } from '../Utilities/formatProjectName';
import CarouselContainer from '../Components/Carousel/CarouselContainer';
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { projectData } from '../data/projectData';

const SingleProject = () => {

  const { slug } = useParams();
  const [singleProjectData, setSingleProjectData] = useState(null);

  useEffect(() => {
    const project = projectData.filter((project) => project.slug == slug)[0];
    setSingleProjectData(project);
  }, [slug])

  const renderTools = () => {
    return (
      singleProjectData.technologies.map((tool, i) => <li key={i}>{tool}</li>)
    )
  }

  const renderRoles = () => {
    return (
      singleProjectData.roles.map((role, i) => <li key={i}>{role}</li>)
    )
  }

  const handleProjectLink = () => {
    window.scroll(0, 0);
  }

  if (!singleProjectData) {
    return;
  }

  return (
    <>
      <section className='single-project'>
        <Helmet>
          <title>Dennis Kim | {formatProjectName(slug)}</title>
          <meta name="description" content={`Details for ${formatProjectName(slug)} by Dennis Kim`} />
          <meta name="keywords" content="Single Project Page, Single Project, Project Detail, Project Overview, Web Developer, Front-End, Development, Web Development, Jr. Developer, HTML, CSS, JavaScript, WordPress, Portfolio" />
        </Helmet>
        <div className="banner-wrapper">
          <picture>
            <source srcSet={singleProjectData.bannerImg} media="(max-width: 600px)" />
            <img src={singleProjectData.bannerImg} alt={singleProjectData.title} className='banner-img' />
          </picture>
        </div>

        <h1 className="project-title">
          {singleProjectData.title}
        </h1>

        <div className="project-info">
          <div className="overview-wrapper">
            <h2 className="overview-heading">
              Overview
            </h2>

            <p className="overview-text">
              {singleProjectData.overview}
            </p>
          </div>

          <div className="tools-role-wrapper">
            <div className="tools-wrapper">
              <h4 className="heading">
                Tools
              </h4>
              <ul >
                {renderTools()}
              </ul>
            </div>
            <div className="role-wrapper">
              <h4 className="heading">
                Role
              </h4>
              <ul>
                {renderRoles()}
              </ul>
            </div>
          </div>

          <div className="links-wrapper">
            <a href={singleProjectData.liveUrl} className="btn-primary" target='_blank' rel='noreferrer'><span>Live Site</span></a>
            {
              singleProjectData.githubUrl ?
                <a href={singleProjectData.githubUrl} className="btn-primary" target='_blank' rel='noreferrer'><span>GitHub</span></a>
                :
                ''
            }
          </div>

          {
            singleProjectData.design !== '' ?
              <div className="design-wrapper">
                <h3 className="design-heading">
                  Design
                </h3>
                <p className="design-text">
                  {singleProjectData.design}
                </p>
              </div>
              :
              ''
          }

          {
            singleProjectData.development !== '' ?
              <div className="development-wrapper">
                <h3 className="development-heading">
                  Development
                </h3>
                <p className="development-text">
                  {singleProjectData.development}
                </p>
              </div>
              :
              ''
          }

          {
            singleProjectData.reflection !== '' ?
              <div className="reflection-wrapper">
                <h3 className="reflection-heading">
                  Reflection
                </h3>
                <p className="reflection-text">
                  {singleProjectData.reflection}
                </p>
              </div>
              :
              ''
          }

          {
            singleProjectData.screenshots ?
              <div className="project-screenshots">
                <CarouselContainer screenshots={singleProjectData.screenshots} />
              </div>
              :
              ''
          }
        </div>
      </section>
      <section className='prev-next'>
        <Link to={`/work${singleProjectData.prevLink}`} className="navigation-link">
          <GrFormPrevious />
          <p>
            Previous
          </p>
        </Link>
        <Link to={`/work${singleProjectData.nextLink}`} className="navigation-link" onClick={handleProjectLink()}>
          <p>
            Next
          </p>
          <GrFormNext />
        </Link>
      </section>
    </>
  )
}

export default SingleProject