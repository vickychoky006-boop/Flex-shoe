
import { Link } from "react-router-dom"
import { products } from "./WomenCardList";





function WomenCard(){
    return(
        <>
       <div className="container-fluid cont-bg">
        <div className="py-5">
        <h1>BEST SELLERS</h1>
        <p className="fs-5">Discover our best-selling collection,
Made for comfort and everyday style</p>
        </div>

  <div className="d-flex flex-wrap gap-4 justify-content-center">
     {products.map((item) => (
        <div className="men-card" key={item.id}>
      <div className="img-section">
        <span className="badge-trending">50%</span>
        <img
          src={item.image}
          alt={item.name}
          className="menCard-img"
        />
      </div>

      <div className="mencard-body mt-2">
        <h3>{item.name}</h3>

        <p>{item.desc}</p>

        <div className="bottom-section fw-bolder">
          <h4 className="fw-bold">₹{item.price}</h4>

<Link to={item.link} style={{textDecoration:"none"}}><button className="animated-button">
  <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
  <span className="text">ADD</span>
  <span className="circle"></span>
  <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
</button></Link>

        </div>
      </div>
    </div>
     ))}

   
    
    
    </div>
    </div>
      
        </>
    )

}
export default WomenCard