import Aboutimg from "../../img/About/AboutImg.jfif"

function AboutHero(){
    return(
        <>

<div className="container my-5">
  <div className="row align-items-center">

    <div className="col-lg-6">
      <img
        src={Aboutimg}
        alt="About Shoe-Max"
        className="img-fluid rounded"
      />
    </div>

    <div className="col-lg-6">
      <h2 className="fw-bold mb-3">Our Story</h2>
      <p className="fs-5 text-secondary">
        Founded with a passion for fashion and comfort, Shoe-Max brings
        together the latest sneaker trends and premium-quality footwear.
        Our mission is to provide stylish and affordable shoes for everyone,
        whether you're an athlete, a trendsetter, or someone who values
        everyday comfort.
      </p>
    </div>

  </div>
</div>



        
        
        



        
        
        </>
    )
}
export default AboutHero