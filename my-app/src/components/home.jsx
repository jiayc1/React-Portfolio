import React from 'react'

function Home() {

    return (
    <div className="card" >
 <div img className="card-img-top"  alt="Card image cap">
  <div className="card-body ">
    <h5 className="card-title"></h5>
    <img src="jess.jpeg" id="about-image"/>
    <p className="card-text"> My name is Jess! I am a product manager who knows how to code!  </p>
    <p><strong>TechStacks</strong></p>
    <p>React, Express, Node.JS, Javascript, MySQL, MongoDB, HTML, CSS, Agile Framework, Azure Devops</p>
    <a href="/About" className="btn btn-primary">Click here for more info</a>
  </div>
</div>
</div> 
    )
}

export default Home
