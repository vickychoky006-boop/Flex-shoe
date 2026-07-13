
import logo from "../../img/logo/logo.png"
function Footer(){
    return(
        <>
        <div className="container-fluid">
    <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div className="col mb-3">
            
            <p className="text-body-secondary"></p>
           
            <img src={logo} alt='logo' width="100%" height="180" className='me-2'/><span className='fw-bold text-danger fs-4'>Shoe-</span><span className='text-dark fw-bold fs-4'>MAX</span>
        </div>
        <div className="col mb-3"></div>
        <div className="col mb-3">
            <h5>Quick Links</h5>
            <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
            </ul>
        </div>
        <div className="col mb-3">
            <h5>Categories</h5>
            <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Men</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Women</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Kid</a></li>
           
            </ul>
        </div>
        <div className="col mb-3">
            <h5>Customer Service</h5>
            <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Shipping Policy</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Returns & Refunds</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Track Order</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Privacy Policy</a></li>
               
            </ul>
        </div>


    </footer>
</div>

        
        
        
        </>
    )
}
export default Footer