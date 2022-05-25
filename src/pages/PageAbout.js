import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import TechStack from "../components/TechStack";

const PageAbout = () => {

    const biography = {
        hidden: { y: '-50px', opacity: 0 },
        show: { y: '0px', opacity: 1,
                transition: {
                                delay: 0.2,
                                duration: .5
                }
        },
    }

    const tech = {
        hidden: { y: '100px', opacity: 0 },
        show: { y: '0px', opacity: 1,
                transition: {
                                delay: .9,
                                duration: .5
                }
        },
    }

  return (
    <div className="about-page">
        <Helmet>
            <title>About Page</title>
            <meta name="description" content="The about page for Dennis Kim's Portfolio."/>
            <meta name="keywords" content="About, Web Developer, Front-End, Development, Web Development, Jr. Developer, HTML, CSS, JavaScript, Portfolio" />
        </Helmet>
        <motion.div 
            variants={biography}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className="about-page__biography">
            <h1>
                Hello There!
            </h1>

            <p>
            My name is Dennis Kim and I am a recent graduate of the Front-end Developer program at BCIT. I am based out of Vancouver, BC, and my passion for development stems from finding solutions to problems. With a genuine curiosity for code and design paired with a background in Sociology ( BA – University of Toronto ), my aim is to make the web experience come alive.
            </p>
        </motion.div>
        <motion.div 
            variants={tech}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className="about-page__tech-stack">
            <h2>
                Tools and Skills
            </h2>
            <TechStack />
        </motion.div>
    </div>
  )
}

export default PageAbout;