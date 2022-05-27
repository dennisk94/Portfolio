import { motion } from 'framer-motion';
import { IconGenerator } from './IconGenerator';

const Contact = () => {

    const contact = {
        hidden: { opacity: 0 },
        show: { 
            opacity: 1,
            transition: {
                        duration: 1,
            }
        }
    }

  return (
    <motion.div 
        variants={contact}
        initial='hidden'
        whileInView="show"
        viewport={{ once: true }}
        className="contact">
        <h3>
            Let's Connect
        </h3>
        <p>
            I'm excited for any challenge or opportunity. You can reach me via email or linkedin.
        </p>
        <div className="contact__links">
            <a href="mailto:dennis.kim@hotmail.com" className='contact__email'>
                { IconGenerator('email') }
            </a>

            <a href="https://www.linkedin.com/in/dennis-kim-61825b237/" className='contact__linkedin' target="_blank" rel="noopener noreferrer">
                { IconGenerator('linkedin') }
            </a>
        </div>
    </motion.div>
  )
}

export default Contact;