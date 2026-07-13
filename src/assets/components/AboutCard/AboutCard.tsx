import card1 from "../../img/About/delivery.png.jfif"
import card2 from "../../img/About/rating.png.jfif"
import card3 from "../../img/About/payment.png.jfif"
import card4 from "../../img/About/return.png.jfif"
import "../../components/AboutCard/AboutCard.css"

function AboutCard(){
    return(
        <>
         <div className="container-fluid  ">
            <div className="row justify-content-center ">
    <div className="card h-100 product-card abCard-bg mx-3 mt-2">
  <img src={card1} className=" abcardimg" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Free Shipping</h5>
    <p>Fast and reliable delivery across India.</p>
    
  </div>
</div>
<div className="card h-100 product-card abCard-bg mx-2 mt-2"  >
  <img src={card2} className="abcardimg " alt="..."/>
  <div className="card-body">
    <h5 className="card-title"> Premium Quality</h5>
    <p>Carefully selected products from trusted brands.</p>
    
  </div>
</div>
<div className="card h-100 product-card abCard-bg mx-2 mt-2" >
  <img src={card3} className="abcardimg" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Secure Payment</h5>
    <p>Safe and secure online transactions</p>

  </div>
</div>
<div className="card h-100 product-card abCard-bg mx-2 mt-2">
  <img src={card4} className="abcardimg" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Easy Returns</h5>
    <p>Hassle-free return and exchange policy</p>
    
  </div>
</div>
</div>
</div>

        
        



        
        
        </>
    )
}
export default AboutCard