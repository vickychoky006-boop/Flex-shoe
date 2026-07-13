import puma1 from "../../img/HomeADD/puma1.avif"
import puma2 from "../../img/HomeADD/puma2.avif"
import puma3 from "../../img/HomeADD/puma3.avif"

import Nike1 from "../../img/HomeADD/puma4.avif"
import Nike2 from "../../img/HomeADD/puma5.avif"
import Nike3 from "../../img/HomeADD/puma6.avif"
import offer from "../../img/HomeADD/offer/offer.jpeg"

import "../../components/HomeCard/HomeCrad.css"

function HomeCard(){
    return(
        <>
       
        <div className="mt-3">
            <div className="py-5">
        <h1>BEST SELLERS⚡</h1>
        <h5>Explore our top-rated footwear,
Perfect for every step you take</h5>
        </div>
        </div>
        <div className="container py-4">
  <div className="row g-5">

    <div className="col-lg-4 col-md-6 col-12">
      <div className="offcard border-0">
        <img src={puma1} className="card-img-top product-img" alt=""/>
        <div className="card-body px-0">
          <h5 className="card-title mb-1">Puma Smashic</h5>
          <p className="text-secondary small mb-1">Retro style with modern comfort</p>
          <p className="text-secondary small">1 Colour</p>

          <div className="d-flex justify-content-end">
            <span className="fw-bold fs-5 font-adj mb-2">₹3,999</span>
          </div>
        </div>
      </div>
    </div>

   
    <div className="col-lg-4 col-md-6 col-12">
      <div className="offcard border-0">
        <img src={puma2} className="card-img-top product-img" alt=""/>
        <div className="card-body px-0">
          <h5 className="card-title mb-1">Puma Caven 2.0</h5>
          <p className="text-secondary small mb-1">Basketball-inspired street fashion</p>
          <p className="text-secondary small">2 Colours</p>

          <div className="d-flex justify-content-end">
            <span className="fw-bold fs-5 font-adj mb-2">₹4,499</span>
          </div>
        </div>
      </div>
    </div>

    
    <div className="col-lg-4 col-md-6 col-12">
      <div className="offcard border-0">
        <img src={puma3} className="card-img-top product-img" alt=""/>
        <div className="card-body px-0">
          <h5 className="card-title mb-1">Adidas Runfalcon 5</h5>
          <p className="text-secondary small mb-1">Perfect for active lifestyles</p>
          <p className="text-secondary small">1 Colour</p>

          <div className="d-flex justify-content-end">
            <span className="fw-bold fs-5 font-adj mb-2">₹4,999</span>
          </div>
        </div>
      </div>
    </div> 

      <div className="col-lg-4 col-md-6 col-12">
      <div className="offcard border-0">
        <img src={Nike1} className="card-img-top product-img" alt=""/>
        <div className="card-body px-0">
          <h5 className="card-title mb-1">Nike Dunk Low</h5>
          <p className="text-secondary small mb-1">Classic comfort for everyday wear</p>
          <p className="text-secondary small">1 Colour</p>

          <div className="d-flex justify-content-end">
            <span className="fw-bold fs-5 font-adj mb-2">₹8,999</span>
          </div>
        </div>
      </div>
    </div>

      <div className="col-lg-4 col-md-6 col-12">
      <div className="offcard border-0">
        <img src={Nike2} className="card-img-top product-img" alt=""/>
        <div className="card-body px-0">
          <h5 className="card-title mb-1">Adidas Duramo SL</h5>
          <p className="text-secondary small mb-1">Lightweight and breathable design</p>
          <p className="text-secondary small">1 Colour</p>

          <div className="d-flex justify-content-end">
            <span className="fw-bold fs-5 font-adj mb-2">₹5,999</span>
          </div>
        </div>
      </div>
    </div>


      <div className="col-lg-4 col-md-6 col-12">
      <div className="offcard border-0" >
        <img src={Nike3} className="card-img-top product-img" alt=""/>
        <div className="card-body px-0">
          <h5 className="card-title mb-1">Nike Air Max 90</h5>
          <p className="text-secondary small mb-1">Classic comfort for everyday wear</p>
          <p className="text-secondary small">1 Colour</p>

          <div className="d-flex justify-content-end">
            <span className="fw-bold fs-5 font-adj mb-2">₹9,999</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<img src={offer}/>


        
        
        </>
    )
}
export default HomeCard