import React from 'react'
import { NavLink } from 'react-router-dom';
import { Helmet } from "react-helmet";

const PageNotFound = () => {

  return (
    <div className='page-not-found'>
      <Helmet>
        <title>Dennis Kim | About</title>
        <meta name="description" content="The 404 page for Dennis Kim's Portfolio." />
        <meta name="keywords" content="404, Page Not Found, Web Developer, Front-End, Development, Web Development, Jr. Developer, HTML, CSS, JavaScript, WordPress, Portfolio" />
      </Helmet>

      <div className="error-404">
        <div className="description">
          <h1 className='heading-404'>
            Error 404
          </h1>

          <p className="text-404">
            Sorry, the page you're looking for doesn't exist.
          </p>
        </div>

        <NavLink to='/' className='btn-primary'>
          <span>Return to Homepage</span>
        </NavLink>
      </div>
    </div>
  )
}

export default PageNotFound