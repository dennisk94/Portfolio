import Particles from "react-tsparticles";
import { options } from "../data/tsparticlesOptions";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion"

const Banner = () => {

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const text = {
        hidden: { y: '100px', opacity: 0 },
        show: { y: '0px', 
                opacity: 1, 
                transition: { 
                                delay: 0,
                                x: { type: 'spring', stiffness: 50 },
                                default: { duration: .5 }  }},
    };

  return (
    <div className="banner">
    <Particles 
        id="tsparticles"
        className="banner__particles"
        init={particlesInit}
        options={ options }
    />
    <motion.div 
        variants={text}
        initial='hidden'
        animate='show'
        className="banner__text">
        <h1 className="banner__heading">
            Dennis Kim
        </h1>
        <div className="banner__sub-heading">
            Front-End Web Developer
        </div>
    </motion.div>
    </div>
)
}

export default Banner;