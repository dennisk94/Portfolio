import React from 'react'
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import bannerImg from '../../Assets/globals/avatar.webp';


const Banner = () => {

  const banner = {
    hidden: { y: '100px', opacity: 0 },
    show: {
      y: '0px',
      opacity: 1,
      transition: {
        delay: .15,
        x: { type: 'spring', stiffness: 50 },
        default: { duration: 1 }
      }
    },
  };

  return (
    <motion.div
      variants={banner}
      initial='hidden'
      animate='show'
      className='banner'>
      <img src={bannerImg} alt="" className='banner-img' />
      <div className="banner-info">
        <h1 className="banner-title">
          Hi, my name is Dennis
        </h1>
        <p className="banner-intro">
          I help bring your ideas to life and achieve success.
        </p>
        <div className="banner-cta">
          <NavLink to={'/work'} className='btn-primary'><span>View My Work</span></NavLink>
        </div>
      </div>
    </motion.div>
  )
}

export default Banner