import "../../components/MenHero/MenHero.css"
import Shoe1 from "../../img/Women/Hero/Shoe1.jfif"
import Shoe2 from "../../img/Women/Hero/Shoe2.jfif"
import Shoe3 from "../../img/Women/Hero/Shoe3.jfif"
import Shoe4 from "../../img/Women/Hero/Shoe4.jfif"
import Shoe5 from "../../img/Women/Hero/Shoe6.jfif"
import mainshoe from "../../img/Women/Hero/shoe5.jpeg"
function WomenHero(){
    return(
        <>
         <div className="container-fluid py-4 body-con">

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
                src={mainshoe}
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

              <h5>Nike Air Max SC</h5>

              <small>
                ⭐ 4.8 • 499 Items Sold
              </small>

              <h4 className="fs-5">₹6,999</h4>

            </div>
             <div className="menproduct-card" >

              <div className="heart">♡</div>

              <img
                src={Shoe1}
                alt=""
                className="menproduct-img"
              />

              <h5>Nike Revolution</h5>

              <small>
                ⭐ 4.9 • 380 Items Sold
              </small>

              <h4 className="fs-5">₹4,799</h4>

            </div>
             <div className="menproduct-card" >

              <div className="heart">♡</div>

              <img
                src={Shoe2}
                alt=""
                className="menproduct-img"
              />

              <h5>Puma Flyer Runner</h5>

              <small>
                ⭐ 4.7 • 500 Items Sold
              </small>

              <h4 className="fs-5">₹4,999</h4>

            </div>
             <div className="menproduct-card" >

              <div className="heart">♡</div>

              <img
                src={Shoe3}
                alt=""
                className="menproduct-img"
              />

              <h5>Puma Trekfire</h5>

              <small>
                ⭐ 4.9 • 400 Items Sold
              </small>

              <h4 className="fs-5">₹6,299</h4>

            </div>
            <div className="menproduct-card" >

              <div className="heart">♡</div>

              <img
                src={Shoe5}
                alt=""
                className="menproduct-img"
              />

              <h5>Puma Trekfire</h5>

              <small>
                ⭐ 4.9 • 400 Items Sold
              </small>

              <h4 className="fs-5">₹6,299</h4>

            </div>
          

        </div>

      </div>

    </div>
              
        </>
    )
}
export default WomenHero