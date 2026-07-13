import men from "../../img/HomeADD/Categories/men.jfif"
import women from "../../img/HomeADD/Categories/women1.jpeg"
import kid from "../../img/HomeADD/Categories/kid.jfif"
import "../../components/Categories/Categories.css"
import { Link } from "react-router-dom"

function Categories(){
    return(
        <>
        <hr></hr>
        <div className="container">
        <div className="container py-5">
    <div className="categories-header">
      <h1>Categories</h1>
      <p>Discover premium footwear collections for everyone</p>
    </div>

  </div>

  <div className="row g-4">
<div className="col-md-4">
      <div className="catecard border-0">
        <img src={men} className="img-fluid shadow"/>
        <div className="hero-content">
        <Link to="/Men" style={{textDecoration:"none",color:"black"}}><h1 className="categories-fs">Men</h1></Link>
  </div>

      </div>
    </div>

    <div className="col-md-4">
      <div className="catecard border-0">
        <img src={women} className="img-fluid shadow"/>
          <div className="hero-content">
        <Link to="/Men" style={{textDecoration:"none",color:"black"}}><h1 className="categories-fs">Women</h1></Link>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="catecard border-0">
        <img src={kid} className="img-fluid shadow"/>
        <div className="hero-content">
        <Link to="/Men" style={{textDecoration:"none",color:"black"}}><h1 className="categories-fs">Kid</h1></Link>
        </div>
      </div>
    </div>

  </div>

</div>
        
        
        </>
    )
}
export default Categories