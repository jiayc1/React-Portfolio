import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Header from "./components/header"
import Footer from "./components/footer"
import Contact from "./components/contactus"



function App() {
  return (
    <Router>
      <div>
       <Header/>

      
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
