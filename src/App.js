import React, {useState} from 'react' 
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './pages/home/Home';
import Apropos from './pages/Apropos/Apropos';
import Formation from './pages/formation/Formation';
import ContactPage from './pages/contact/ContactPage';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Pro from './pages/pro/Pro';
import Tourisme from './pages/tourisme/Tourisme';
import Faq from './pages/faq/Faq';



import ScrollToTop from './components/ScrollToTop';

import {FormationData} from './pages/formation/FormationData';
import {ProData} from './pages/pro/ProData';
import { QsjTxt } from './pages/home/HomeData';
import {TourismeData} from './pages/tourisme/TourismeData';




function App() {



  const [menuOpen, setMenuOpen] = useState(true)

  const toggleMenu = ()=>{
    setMenuOpen(!menuOpen)
  }


  return (
    
          <Router>
            <ScrollToTop/>
            <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu}/>
            <Menu menuOpen={menuOpen} toggleMenu={toggleMenu}/>
            <Switch>
              <Route exact path='/site-aurorescence' component={Home}/>
              <Route path='/site-aurorescence/formation'>
                <Formation {...FormationData} />
              </Route>
              <Route path='/site-aurorescence/contact' component={ContactPage} />
              <Route path='/site-aurorescence/apropos'>
                <Apropos {...QsjTxt}/>
              </Route>
              <Route path='/site-aurorescence/pro'>
                <Pro {...ProData} />
              </Route>
              <Route path='/site-aurorescence/tourisme'>
                <Tourisme {...TourismeData}/>
              </Route>
              <Route path="/site-aurorescence/faq" component={Faq}/>
            </Switch>
          </Router>
  );
}

export default App;
