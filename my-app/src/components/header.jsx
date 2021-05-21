import {
    Link
  } from "react-router-dom";

const Header= () => {
    return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="index.html" id="logo">Jessica Chen</a> 
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
      
          <li class="nav-item active">
          <Link className ="Nav-link" to="/About">About</Link>
          </li>
          <li class="nav-item">
          <Link className ="Nav-link" to="/Portfolio">Portfolio</Link>
          </li>
          <li class="nav-item active">
          <Link className ="Nav-link" to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      )
    }
    export default Header