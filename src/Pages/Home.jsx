import React from 'react'
import { Helmet } from "react-helmet";
import { NavLink } from 'react-router-dom';
import Banner from '../Components/Banner/Banner'
import FeaturedProjects from '../Components/FeaturedProjects/FeaturedProjects'

const Home = () => {

  return (
    <div className='home'>
      <Helmet>
        <title>Dennis Kim | Web Developer</title>
        <meta name="description" content="The home page for Dennis Kim's Portfolio, a Front End Web Developer based out of Vancouver, BC. He enjoys development as well as design." />
        <meta name="keywords" content="Home Page, Front End Web Developer, Web Developer, Front-End, Development, Web Development, Jr. Developer, HTML, CSS, JavaScript, WordPress, Portfolio" />
      </Helmet>
      <Banner />
      <FeaturedProjects />
      <NavLink to={'/work'} className='btn-primary work-cta'><span>View My Work</span></NavLink>
    </div>
  )
}

export default Home