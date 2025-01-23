import React from 'react';
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {

  const socialContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.28
      }
    }
  };

  const socialIcon = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 100 },
        default: { duration: .7 }
      }
    },
  };

  return (
    <div className='contact'>
      <Helmet>
        <title>Dennis Kim | Contact</title>
        <meta name="description" content="The contact page for Dennis Kim's Portfolio." />
        <meta name="keywords" content="Contact, Linkedin, GitHub, Email, Web Developer, Front-End, Development, Web Development, Jr. Developer, HTML, CSS, JavaScript, WordPress, Portfolio" />
      </Helmet>
      <h1 className="contact-heading">
        Let's Connect!
      </h1>
      <motion.div
        variants={socialContainer}
        initial="hidden"
        animate="visible"
        className="social-links">
        <motion.a
          variants={socialIcon}
          whileTap={{ scale: 1, transition: { duration: .05 } }}
          href='mailto:denniskim.dev@outlook.com' target='_blank' rel="noreferrer" title="Email">
          <HiOutlineMail className='email' />
        </motion.a>
        <motion.a
          variants={socialIcon}
          whileTap={{ scale: 1, transition: { duration: .05 } }}
          href="https://github.com/dennisk94" target='_blank' rel="noreferrer" title="GitHub">
          <BsGithub />
        </motion.a>
        <motion.a
          variants={socialIcon}
          whileTap={{ scale: 1, transition: { duration: .05 } }}
          href="https://www.linkedin.com/in/dennis-kim-bk/" target='_blank' rel="noreferrer" title="Linkedin">
          <BsLinkedin />
        </motion.a>
      </motion.div>
    </div>
  )
}

export default Contact