import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from '../components/Footer';
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
import PageContact from "../pages/PageContact";
import PageProjects from "../pages/PageProjects";
import PageSingleProject from "../pages/PageSingleProject";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dennis Kim Portfolio</title>
        <meta name="description" content="Portfolio website for Dennis Kim, a Front-End Web Developer."/>
        <meta name="keywords" content="Web Developer, Front-End, Development, Web Development, Jr. Developer, HTML, CSS, JavaScript, Portfolio" />
        <meta name="author" content="Dennis Kim" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://denniskim.codes/" />
      </Helmet>
      <Header />
        <main className="main">
      <Routes>
        <Route index element={<PageHome />}/>
        <Route path='/about' element={<PageAbout />}/>
        <Route path='/contact' element={<PageContact />}/>
        <Route path='/projects' element={<PageProjects />} />
        <Route path='/project/:slug' element={<PageSingleProject />} />
      </Routes>
        </main>
      <Footer />
    </div>
  );
}

export default App;
