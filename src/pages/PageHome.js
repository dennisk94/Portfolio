import { Helmet } from "react-helmet";
import Banner from "../components/Banner";
import About from "../components/About";
import FeaturedProjects from "../components/FeaturedProjects";
import Contact from "../components/Contact";

const PageHome = ( { theme }) => {
  return (
    <div>
        <Helmet>
            <title>Dennis Kim | Web Developer</title>
            <meta name="description" content="The home page for Dennis Kim's Portfolio, a Front End Web Developer based out of Vancouver, BC. He enjoys development as well as design."/>
            <meta name="keywords" content="Home Page, Front End Web Developer, Web Developer, Front-End, Development, Web Development, Jr. Developer, HTML, CSS, JavaScript, Portfolio" />
        </Helmet>
        <Banner theme={theme}/>
        <About />
        <FeaturedProjects />
        <Contact />
    </div>
  )
}

export default PageHome;