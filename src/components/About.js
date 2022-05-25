import { motion } from "framer-motion"

const About = () => {

    const container = {
        hidden: { opacity: 0 },
        show: { 
            opacity: 1,
            transition: {
                        duration: .4,
            }
        }
    }

    const heading = {
        hidden: { y: '50px', opacity: 0 },
        show: { y: '0px', 
                opacity: 1, 
                transition: { 
                                delay: 0.5,
                                x: { type: 'spring', stiffness: 50 },
                                default: { duration: .5 }  }},
    };
    
    const text = {
        hidden: { y: '50px', opacity: 0 },
        show: { y: '0px', 
                opacity: 1, 
                transition: { 
                                delay: 1,
                                x: { type: 'spring', stiffness: 50 },
                                default: { duration: .8 }  }},
    };

  return (
    <motion.div 
        variants={container}
        initial='hidden'
        whileInView="show"
        viewport={{ once: true }}
        className="about">
        <div className="about__text">
            <motion.h2
                variants={heading}
                initial='hidden'
                whileInView="show"
                viewport={{ once: true }}
            >Reach for the Stars</motion.h2>
            <motion.p
                variants={text}
                initial='hidden'
                whileInView="show"
                viewport={{ once: true }}
            >
                I am a dedicated Front-End Web Developer with hands-on experience designing and developing websites from the ground up. 
            </motion.p>
        </div>
    </motion.div>
  )
}

export default About;