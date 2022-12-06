

import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Feedback from "./components/feedback/Feedback";
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/menu";
import "./App.scss"
import { useState } from "react";




function App() {

  const [menuOpen, setMenuOpen]=useState(false)
  return (
    <div className="app">
     <Topbar menuOpen ={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen ={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
      <Intro />
      <Portfolio />
      <Feedback/>
      <Contact/>
      

     </div>
    </div>
  );
}

export default App;
