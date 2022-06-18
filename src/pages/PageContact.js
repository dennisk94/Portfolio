import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { IconGenerator } from "../utilities/IconGenerator";

const PageContact = () => {

    const linkedin = {
        hidden: { y: '50px', opacity: 0 },
        show: { 
            y: '0px',
            opacity: 1,
            transition: {
                        delay: .3,
                        duration: 1,
            }
        }
    }

    const github = {
        hidden: { y: '50px', opacity: 0 },
        show: { 
            y: '0px',
            opacity: 1,
            transition: {
                        delay: .8,
                        duration: 1,
            }
        }
    }

    const email = {
        hidden: { y: '50px', opacity: 0 },
        show: { 
            y: '0px',
            opacity: 1,
            transition: {
                        delay: 1.3,
                        duration: 1,
            }
        }
    }

  return (
    <div className="contact-page">
        <Helmet>
            <title>Contact Page</title>
            <meta name="description" content="The contact page for Dennis Kim's Portfolio."/>
            <meta name="keywords" content="Contact, Linkedin, GitHub, Email, Web Developer, Front-End, Development, Web Development, Jr. Developer, HTML, CSS, JavaScript, Portfolio" />
        </Helmet>
        <h1>
            Contact
        </h1>

        <div className="contact-page__links">
            <motion.div 
                variants={linkedin}
                initial='hidden'
                whileInView="show"
                viewport={{ once: true }}
                className="contact-page__linkedin">
                <h2>
                    Linkedin
                </h2>
                <a className="contact-page__anchor" href="https://www.linkedin.com/in/dennis-kim-61825b237" target="_blank" rel="noopener noreferrer">
                    { IconGenerator('linkedin') }    
                </a>
            </motion.div>

            <motion.div 
                variants={github}
                initial='hidden'
                whileInView="show"
                viewport={{ once: true }}
                className="contact-page__github">
                <h2>
                    GitHub
                </h2>
                <a className="contact-page__anchor" href="https://github.com/dennisk94?tab=repositories" target="_blank" rel="noopener noreferrer">
                { IconGenerator('github') }  
                </a>
            </motion.div>

            <motion.div 
                variants={email}
                initial='hidden'
                whileInView="show"
                viewport={{ once: true }}
                className="contact-page__email">
                <h2>
                    Email
                </h2>
                <a className="contact-page__anchor" href="mailto:dennis.kim@hotmail.com">
                { IconGenerator('email') }  
                </a>
            </motion.div>
        </div>
    </div>
  )
}

export default PageContact;