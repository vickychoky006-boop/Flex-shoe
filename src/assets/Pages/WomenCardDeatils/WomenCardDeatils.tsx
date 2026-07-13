import card1 from"../../img/Women/card/puma1.avif"
import img1 from"../../img/Product-Details/Women/card1/img1.avif"
import img2 from"../../img/Product-Details/Women/card1/img2.avif"
import img3 from"../../img/Product-Details/Women/card1/img3.avif"
import img4 from"../../img/Product-Details/Women/card1/img4.avif"
import img5 from"../../img/Product-Details/Women/card1/img5.avif"
import "../../Pages/productDeatils/productDeatils.css"
import { useState } from "react";
function WomenCardDeatils(){
  const [mainImg, setMainImg] = useState(card1);
            const [size, setSize] = useState(7);
    return(
        <>
        <div className="container py-5">
  <div className="row">

   
    <div className="col-lg-1">
      <div className="thumb-list">
       <img src={img1} className="thumb-img" onClick={() => setMainImg(img1)} />
        <img src={img2} className="thumb-img" onClick={() => setMainImg(img2)} />
        <img src={img3} className="thumb-img" onClick={() => setMainImg(img3)}/>
        <img src={img4} className="thumb-img" onClick={() => setMainImg(img4)}/>
        <img src={img5} className="thumb-img" onClick={() => setMainImg(img5)}/>
      </div>
    </div>

  
    <div className="col-lg-6">
      <div className="main-image-box">
        <img src={mainImg} className="main-image" />
      </div>
    </div>

  
    <div className="col-lg-5">

      <div className="product-details">

  <h1 className="product-title">
 Puma Caven 2.0
  </h1>

  <div className="price-section">
    <span className="mrp">MRP: ₹6,999</span>
    <span className="sale-price">₹4,999</span>
    <span className="discount">30% OFF</span>
  </div>
   <div className="d-flex gap-3 mb-4">
        <span className="color black"></span>
        <span className="color brown"></span>
      </div>

  <p className="tax-text">
    Price inclusive of all taxes
  </p>

  <h5 className="size-title text-black">
    Size (UK): {size}
  </h5>

  <div className="size-container">
     <button   className={`size-btn ${size === 7 ? "active" : ""}`}
  onClick={() => setSize(7)}>7</button>
    <button   className={`size-btn ${size === 8 ? "active" : ""}`}
  onClick={() => setSize(8)}>8</button>
    <button   className={`size-btn ${size === 9 ? "active" : ""}`}
  onClick={() => setSize(9)}>9</button>
    <button   className={`size-btn ${size === 10 ? "active" : ""}`}
  onClick={() => setSize(10)}>10</button>
    <button   className={`size-btn ${size === 11 ? "active" : ""}`}
  onClick={() => setSize(11)}>11</button>
    <button   className={`size-btn ${size === 12 ? "active" : ""}`}
  onClick={() => setSize(12)}>12</button>
  </div>



  <div className="delivery-box">
    <label>Select Delivery Location</label>

    <div className="d-flex">
      <input
        type="text"
        placeholder="###001"
        className="pincode-input"
      />

      <button className="check-btn">
         Coupon Code
      </button>
    </div>
  </div>

  <button className="cart-btn">
    ADD TO CART ✚
  </button>

</div>

      
       

    </div>

  </div>
</div>
        
        </>
    )
}
export default WomenCardDeatils