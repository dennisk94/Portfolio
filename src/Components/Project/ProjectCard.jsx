import React from 'react'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import Skill from '../Skills/Skill';

const ProjectCard = ({ project }) => {
    const {
        technologies,
        thumbnailImg,
        title,
        slug,
        excerpt,
        liveUrl,
        githubUrl,
        moreInfo
    } = project;

    const renderSkills = () => {
        if (technologies) {
            return (
                technologies.map((skill, i) => <Skill skill={skill} key={i} />)
            )
        } else {
            return '';
        }
    }

    const featuredProject = {
        hidden: { x: '50px', opacity: 0 },
        show: {
            x: '0px',
            opacity: 1,
            transition: {
                delay: .5,
                x: { type: 'spring' },
                default: { duration: 1 }
            }
        },
    }

    return (
        <motion.div
            variants={featuredProject}
            initial='hidden'
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className='project-card'>
            <img src={thumbnailImg} alt={title} className='project-thumbnail' />
            <div className="project-info">
                <NavLink to={`/work/${slug}`} className='project-link'>
                    <h3 className="project-title">
                        {title}
                    </h3>
                </NavLink>

                <ul className="skills">
                    {
                        renderSkills()
                    }
                </ul>
                <div className="project-details">
                    <p>
                        {excerpt}
                    </p>
                    <div className='links'>
                        {
                            liveUrl ?
                                <a href={liveUrl} className="live-site btn-primary normal" target='_blank' rel='noreferrer'>
                                    <span>Live Site</span> <span className='link-icon'><BiLinkExternal /></span>
                                </a>
                                :
                                ''
                        }
                        {
                            githubUrl ?
                                <a href={githubUrl} className="github btn-primary normal" target='_blank' rel='noreferrer'>
                                    <span>GitHub</span> <span className='link-icon'><BsGithub /></span>
                                </a>
                                :
                                ''
                        }
                        {
                            moreInfo ?
                                <NavLink to={`/work/${slug}`} className='view-project btn-primary normal internal'>
                                    <span>View Project</span>
                                </NavLink>
                                :
                                ''
                        }

                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard