import hero1 from "../../img/HomeADD/HomeHero/slid-6.jfif"
import hero3 from "../../img/HomeADD/HomeHero/slid-5.jfif"
import hero4 from "../../img/HomeADD/HomeHero/ed-zavala-QSsdwK7xo7s-unsplash.jpg"

import "../../components/Heroes/Heroes.css"


function Heroes(){
    return(
        <>
        
       <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={hero1} className="d-block w-100 herobgImg" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Engineered for speed and performance</h5>
        <p>Lightweight running shoes with superior grip and responsive cushioning to help you push your limits</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={hero3} className="d-block w-100 herobgImg" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Walk all day without fatigue</h5>
        <p>Soft cushioning and breathable materials provide unmatched comfort for everyday wear</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={hero4} className="d-block w-100 herobgImg" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Step into fashion with confidence</h5>
        <p>Modern designs and premium finishes that perfectly match your lifestyle and personality    </p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


        
        
        </>
    )
}
export default Heroes