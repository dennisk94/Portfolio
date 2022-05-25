import { Helmet } from "react-helmet";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import AccordionContainer from '../components/Accordion';
import CarouselContainer from '../components/Carousel';

const PageSingleProject = () => {

    const [ singleProject, setSingleProject ] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        const project = projectsData.find(singleProject => singleProject.slug === slug);
        setSingleProject( project );
    }, [slug]);
    
    if ( !singleProject) {
        return
    }

    return (
        <div className="single-project">
            <Helmet>
                <title>Single Project Page</title>
                <meta name="description" content="The Single Project page for Dennis Kim's Portfolio."/>
                <meta name="keywords" content="Single Project Page, Single Project, Project Detail, Project Overview, Web Developer, Front-End, Development, Web Development, Jr. Developer, HTML, CSS, JavaScript, Portfolio" />
            </Helmet>
        <div className="single-project__banner">
            <img src={singleProject.bannerImg} alt={singleProject.title} />
        </div>

        <h1>
            { singleProject.title }
        </h1>

        <div className="single-project__links">
            <a href={singleProject.liveUrl} target="_blank" rel="noopener noreferrer">Live Site</a>
            <a href={singleProject.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div className="single-project__overview-wrapper">
            <div className="single-project__wrapper-inner"> 
                <div className="single-project__overview">
                    <h2>
                        Overview
                    </h2>

                    <p>
                        { singleProject.overview }
                    </p>
                </div>

                <div className="single-project__details">
                    <div className="single-project__team">
                        <h3>
                            Team
                        </h3>
                        <ul>
                            {
                                singleProject.team.map( (member, i) => <li key={i}>{ member }</li>)
                            }
                        </ul>
                    </div>
                    <div className="single-project__roles">
                        <h3>
                            Roles
                        </h3>
                        <ul>
                        {
                                singleProject.roles.map( (role, i) => <li key={i}>{ role }</li>)
                        }
                        </ul>
                    </div>
                    <div className="single-project__skills">
                        <h3>
                            Tools
                        </h3>
                        <ul>
                        {
                                singleProject.tech.map( (oneTech, i) => <li key={i}>{ oneTech }</li>)
                        }
                        </ul>
                    </div>
                </div>

                <AccordionContainer  
                    research={singleProject.research} 
                    design={singleProject.design}
                    reflection={singleProject.reflection}
                />
                <CarouselContainer 
                    carouselImg={singleProject.carouselImg}
                />
            </div>
        </div>    
    </div>
    );
}

export default PageSingleProject;