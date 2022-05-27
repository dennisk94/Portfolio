import Banner from "../components/Banner";
import About from "../components/About";
import FeaturedProjects from "../components/FeaturedProjects";
import Contact from "../components/Contact";

const PageHome = ( { theme }) => {
  return (
    <div>
        <Banner theme={theme}/>
        <About />
        <FeaturedProjects />
        <Contact />
    </div>
  )
}

export default PageHome;