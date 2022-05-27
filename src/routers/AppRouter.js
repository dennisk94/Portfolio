import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from '../components/Footer';
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
import PageContact from "../pages/PageContact";
import PageProjects from "../pages/PageProjects";
import PageSingleProject from "../pages/PageSingleProject";

function App() {

  const [ theme, setTheme ] = useState('dark');
  const [ checked, setChecked ] = useState(false);

  useEffect( () => {
    const theme = localStorage.getItem('theme');
    
    if ( !theme ) {
      localStorage.setItem('theme', 'dark');
    } else {
      const selectedTheme = localStorage.getItem('theme');
      setTheme(selectedTheme);
      if ( selectedTheme === 'light' ) {
        setChecked(true);
      }
    }
  }, [checked]);

  const toggleTheme = () => {
    if ( theme === 'dark' ) {
      localStorage.setItem('theme', 'light');
      setChecked(true);
    } else if ( theme === 'light') {
      localStorage.setItem('theme', 'dark');
      setChecked(false);
    }
  }

  return (
      <div className="App" id={theme}>
        <Header toggleTheme={toggleTheme} checked={checked} theme={theme}/>
          <main className="main">
        <Routes>
          <Route index element={<PageHome theme={theme}/>}/>
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
