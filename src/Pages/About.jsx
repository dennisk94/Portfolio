import React from 'react'
import { Helmet } from "react-helmet";
import { motion } from 'framer-motion';
import Tool from '../Components/Toolkit/Tool';
import { toolkit } from '../Globals/Variables';

const About = () => {
  const renderToolkit = () => {
    return (
      toolkit.map((tool, i) => <Tool tool={tool} key={i} />)
    )
  }

  const aboutBio = {
    hidden: { y: '-55px', opacity: 0 },
    show: {
      y: '0px',
      opacity: 1,
      transition: {
        delay: 0,
        x: { type: 'spring', stiffness: 50 },
        default: { duration: 1.3 }
      }
    },
  }
  const aboutToolkit = {
    hidden: { y: '100px', opacity: 0 },
    show: {
      y: '0px',
      opacity: 1,
      transition: {
        delay: .5,
        x: { type: 'spring', stiffness: 50 },
        default: { duration: 1 }
      }
    },
  }

  return (
    <div className='about'>
      <Helmet>
        <title>Dennis Kim | About</title>
        <meta name="description" content="The about page for Dennis Kim's Portfolio." />
        <meta name="keywords" content="About, Web Developer, Front-End, Development, Web Development, Jr. Developer, HTML, CSS, JavaScript, WordPress, Portfolio" />
      </Helmet>
      <motion.div
        variants={aboutBio}
        initial='hidden'
        whileInView="show"
        viewport={{ once: true }}
        className="intro">
        <h1 className="heading">
          About
        </h1>
        <div className="about-details">
          <p>
            My name is Dennis Kim and I am currently working as a front-end developer based in Vancouver. I have experience building highly performant web experiences with a focus on user experience. The training and experience I gained at BCIT’s Front-End Web Developer Program have allowed me to further develop my curiosity and skill set. I enjoy working with all types of technologies, but in particular with React.js, Vue.js, Redux, WordPress and Sass.
          </p>
          <p>
            Graduating with a background in Sociology ( BA – University of Toronto ), I have honed a keen sense in understanding and fulfilling a client’s needs, while still building a high quality website/application.
          </p>
          <p>
            When I am not at my desk, you can usually find me getting a lift in at the gym or more recently, playing Age of Empires II.
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={aboutToolkit}
        initial='hidden'
        whileInView="show"
        viewport={{ once: true }}
        className="toolkit">
        <h2 className="toolkit-heading">
          Toolkit
        </h2>
        <ul className="tools">
          {renderToolkit()}
        </ul>
      </motion.div>
    </div>
  )
}

export default About