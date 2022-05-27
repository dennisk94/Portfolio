import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion"

const Banner = ( { theme }) => {

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

    let backgroundColor = '';

    if ( theme === 'light' ) {
        backgroundColor = '#92B4EC';
    } else {
        backgroundColor = '#000000';
    }
    
  return (
    <div className="banner">
    <Particles 
        id="tsparticles"
        className="banner__particles"
        init={particlesInit}
        options={ {
            "fullScreen": {
                "enable": false,
                "zIndex": 1
            },
            "particles": {
                "number": {
                    "value": 160,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle"
                },
                "opacity": {
                    "value": 1,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0,
                        "sync": false
                    }
                },
                "size": {
                    "value": 4,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 4,
                        "size_min": 0.3,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 600
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 250,
                        "size": 0,
                        "duration": 1,
                        "opacity": 0,
                        "speed": 5
                    },
                    "repulse": {
                        "distance": 80,
                        "duration": 2
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "background": {
                "color": backgroundColor,
            }
        } }
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