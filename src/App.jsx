import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contacts from './components/contact/Contact';
// import Works from './components/works/Works';
import About from './components/about/About';
import ButtonTop from './components/button/ButtonTop.jsx'
import './app.scss';
import {useState, Suspense} from 'react'
import Menu from './components/menu/Menu';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Suspense fallback="loading">
      <ButtonTop/>
      <div className="app">

        <Topbar   menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections">
          <Intro  />
          <About/>
          <Portfolio/>
          {/* <Works/> */}
          <Testimonials/>
          <Contacts/>
          
        </div>
      </div>
     
    </Suspense>
  );
}

export default App;
