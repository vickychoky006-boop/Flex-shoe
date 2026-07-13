import shoe1 from "../../img/men/MenBrand/Adidas/Adidas1.jfif"
import shoe2 from "../../img/men/MenBrand/Adidas/Adidas2.jfif"
import shoe3 from "../../img/men/MenBrand/Adidas/Adidas3.jfif"
import shoe4 from "../../img/men/MenBrand/Adidas/Adidas4.jfif"
import shoe5 from "../../img/men/MenBrand/Puma/puma1.jfif"
import shoe6 from "../../img/men/MenBrand/Puma/puma2.jfif"
import shoe7 from "../../img/men/MenBrand/Puma/puma3.jfif"
import shoe8 from "../../img/men/MenBrand/Puma/puma4.jfif"
import shoe9 from "../../img/men/MenBrand/Nike/Nike1.jfif"
import shoe10 from "../../img/men/MenBrand/Nike/Nike2.jfif"
import shoe11 from "../../img/men/MenBrand/Nike/Nike3.jfif"
import shoe12 from "../../img/men/MenBrand/Nike/Nike4.jfif"
import hero from "../../img/Women/Hero/hero2.png"
import "../../components/MenProduct/MenProduct.css"




function Menproduct() {
  return (
    <>
    <img src={hero}/>
    <section className="container-fluid py-5 brandbg">

  {/* Heading */}
  <div className="text-center mb-5">
    <h1 className="fw-bold">
      The Official Store Of The Amazing Brand
    </h1>

    <p className="text-secondary">
      We work together with high quality and famous brands
      around the world.
    </p>
  </div>

  <div className="row">

    {/* Brand 1 */}
    <div className="col-lg-4">
      <div className="brand-box brandset p-2">

        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="mt-3">
            <h4>Adidas</h4>
            <p className="text-muted mb-0">
              4.9 ⭐ | 7.2M Followers
            </p>
          </div>

          <button className="btn btn-outline-dark">
            Visit
          </button>
        </div>

        <div className="row g-2">
          <div className="col-6">
            <img src={shoe1} className="img-fluid shoe-img" />
          </div>

          <div className="col-6">
            <img src={shoe2} className="img-fluid shoe-img" />
          </div>

          <div className="col-6">
            <img src={shoe3} className="img-fluid shoe-img" />
          </div>

          <div className="col-6">
            <img src={shoe4} className="img-fluid shoe-img" />
          </div>
        </div>

      </div>
    </div>

    {/* Brand 2 */}
    <div className="col-lg-4">
      <div className="brand-box  brandset p-2">

        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="mt-3">
            <h4>Puma</h4>
            <p className="text-muted mb-0">
              4.8 ⭐ | 5M Followers
            </p>
          </div>

          <button className="btn btn-outline-dark ">
            Visit
          </button>
        </div>

        <div className="row g-2">
          <div className="col-6"><img src={shoe5} className="img-fluid shoe-img"/></div>
          <div className="col-6"><img src={shoe6} className="img-fluid shoe-img"/></div>
          <div className="col-6"><img src={shoe7} className="img-fluid shoe-img"/></div>
          <div className="col-6"><img src={shoe8} className="img-fluid shoe-img"/></div>
        </div>

      </div>
    </div>

    {/* Brand 3 */}
    <div className="col-lg-4">
      <div className="brand-box  brandset p-2 ">

        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="mt-3">
            <h4>Nike</h4>
            <p className="text-muted mb-0">
              4.9 ⭐ | 20M Followers
            </p>
          </div>

          <button className="btn btn-outline-dark">
            Visit
          </button>
        </div>

        <div className="row g-2">
          <div className="col-6"><img src={shoe9} className="img-fluid shoe-img"/></div>
          <div className="col-6"><img src={shoe10} className="img-fluid shoe-img"/></div>
          <div className="col-6"><img src={shoe11} className="img-fluid shoe-img"/></div>
          <div className="col-6"><img src={shoe12} className="img-fluid shoe-img"/></div>
        </div>

      </div>
    </div>

  </div>
</section>
    
    </>
   
  )
}

export default Menproduct;