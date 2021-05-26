import Project from "./project"

const Portfolio = () => {
    return (
        <div class="container1">
    <main class="row">
      <div class="col-md-8"> 
        <article class="block">
          <h1 class="block-header">Portfolio</h1>
          <hr/>
        <Project description= "Release the Kringle" image = "/release.png" url= "http://releasethekringle.com/"/>
        <Project description= "MoviFeree" image = "/MoviFeree.png" url= "https://damon1v1.github.io/Movie-Recommender/index.html"/>
        <Project description= "Joyhunter" image = "/joyhunter.png" url= "https://fierce-island-98388.herokuapp.com/"/>
        </article>
      </div>
    </main>
  </div>
    )
}
export default Portfolio