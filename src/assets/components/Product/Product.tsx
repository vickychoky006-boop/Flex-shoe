

import shoe1 from "../../img/HomeADD/HomeProduct/shoe-1.jfif"
import shoe2 from "../../img/HomeADD/HomeProduct/shoe-2.jfif"
import shoe3 from "../../img/HomeADD/HomeProduct/shoe-3.jfif"
import shoe4 from "../../img/HomeADD/HomeProduct/shoe-4.jfif"

function Product(){
    return(
        <>
 
          
        {/* </section> */}

<div className="container mt-4" style={{width:"70%"}}>
  <div className="row align-items-center ">

    <div className="col-lg-6">
      <div className="row g-3">
        <div className="col-6">
          <img src={shoe3} className="img-fluid"/>
        </div>

        <div className="col-6">
          <img src={shoe4} className="img-fluid h-100"/>
        </div>

        <div className="col-6">
          <img src={shoe1} className="img-fluid"/>
        </div>
        <div className="col-6">
          <img src={shoe2} className="img-fluid"/>
        </div>
      </div>
    </div>

    <div className="col-lg-6">
      <h6>ABOUT US</h6>
      <h2>We provide high quality shoes.</h2>
      <p>We offer premium quality shoes that combine comfort, performance, and style. From casual wear to sports footwear, Shoe-MAX helps you step forward with confidence.</p>
      <button className="btn btn-dark">Explore More</button>
    </div>

  </div>
</div>

        



        
        </>
    )
}
export default Product