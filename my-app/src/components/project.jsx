const Project = (props) => {
    return (
       
           <div class="row">
            <div class="col-md-12 col-lg-6">
              <a href={props.url}> <img class="img-fluid port-image" src={props.image} width="350" alt={props.description}/> </a>
            </div>
            <div class="col-md-12 col-lg-6"> 
            <p class="pt-3"> 
            {
                props.description
            }
            </p>
            </div>
          </div>
       
    )
}
export default Project


