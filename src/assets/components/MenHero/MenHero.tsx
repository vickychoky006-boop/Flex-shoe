import "../../components/MenHero/MenHero.css"
import Shoe1 from "../../img/men/menHero/shoe1.jfif"
import Shoe2 from "../../img/men/menHero/shoe2.jfif"
import Shoe3 from "../../img/men/menHero/shoe3.jfif"
import Shoe4 from "../../img/men/menHero/shoe4.jfif"
import Shoe5 from "../../img/men/menHero/shoe5.jfif"
function MenHero(){
    return(
        <>
         <div className="container-fluid py-4 body-con">

      {/* Hero Section */}
      <div className="row g-3">

        <div className="col-lg-8">
          <div className="hero-card">

            <div className="hero-content">
              <div>
                <span className="arrival">
                  NEW ARRIVAL!
                </span>

                <h1>
                  AIR JORDAN 6 GX
                  <br />
                  EASTSIDE
                </h1>

                <p>
                  For urban style from the toe box to the heel
                  pull in a design that's sure easy.
                </p>

                <button className="dark-btn ">
                  View Product
                </button>
              </div>

              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                alt=""
                className="hero-img"
              />
            </div>

          </div>
        </div>

        <div className="col-lg-4">
          <div className="offer-card">

            <h2>
              DISC UP TO 50%
              <br />
              FOR SNEAKERS
              <br />
              FEST ID 2026
            </h2>

            <p>
              Join the sneakers fest and get exciting
              offers this month.
            </p>

            <button className="light-btn bg-black text-white">
              Event Details
            </button>

          </div>
        </div>

      </div>

     

      <div className="menproduct-section mt-4">

        <div className="heading-row">
          <h3>Today Best Deals!</h3>

          <span className="timer">
            Ends in 12:10:09
          </span>
        </div>

        <div className="menproducts-row">

       
            <div className="menproduct-card" >

              <div className="heart">♡</div>

              <img
                src={Shoe4}
                alt=""
                className="menproduct-img"
              />

              <h5>Puma ST Runner V4</h5>

              <small>
                ⭐ 4.8 • 400 Items Sold
              </small>

              <h4 className="fs-5">₹4,999</h4>

            </div>
             <div className="menproduct-card" >

              <div className="heart">♡</div>

              <img
                src={Shoe1}
                alt=""
                className="menproduct-img"
              />

              <h5>Puma Flyer Flex</h5>

              <small>
                ⭐ 4.9 • 400 Items Sold
              </small>

              <h4 className="fs-5">₹3,799</h4>

            </div>
             <div className="menproduct-card" >

              <div className="heart">♡</div>

              <img
                src={Shoe2}
                alt=""
                className="menproduct-img"
              />

              <h5>Puma Softride Enzo</h5>

              <small>
                ⭐ 4.7 • 400 Items Sold
              </small>

              <h4 className="fs-5">₹5,999</h4>

            </div>
             <div className="menproduct-card" >

              <div className="heart">♡</div>

              <img
                src={Shoe3}
                alt=""
                className="menproduct-img"
              />

              <h5>Puma R78 Trek</h5>

              <small>
                ⭐ 4.9 • 400 Items Sold
              </small>

              <h4 className="fs-5">₹4,299</h4>

            </div>
            <div className="menproduct-card" >

              <div className="heart">♡</div>

              <img
                src={Shoe5}
                alt=""
                className="menproduct-img"
              />

              <h5>Puma Flyer Flex</h5>

              <small>
                ⭐ 4.9 • 400 Items Sold
              </small>

              <h4 className="fs-5">₹3,799</h4>

            </div>
            
          

        </div>

      </div>

    </div>
        
        

        
        </>
    )
}
export default MenHero