import { Link } from 'react-router-dom'
import nav from '../../img/logo/logo.png'
import "../../components/Header/Header.css"
function Header(){
    return(
        <>
        <div className="container-fluid text-bg-white p-2  sticky-top bg-white" >
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            
                <img src={nav} alt='logo' width="60" height="50" className='me-2'/><span className='fw-bold text-danger fs-4'>Shoe-</span><span className='text-dark fw-bold fs-4'>MAX</span>
            
        </a>
        <ul className=" nav col-12 col-lg-auto me-lg-auto mb-2  mb-md-0  justify-content-center ml-4 gap-4">
            <li><Link to="/" className="nav-link px-2 fw-semibold text-black">Home</Link></li>
            <li><Link to="/Men" className="nav-link px-2 fw-semibold text-black">Men</Link></li>
            <li><Link to="/Women" className="nav-link px-2 fw-semibold text-black">Women</Link></li>
            <li><Link to="/About" className="nav-link px-2 fw-semibold text-black">About</Link></li>
        </ul>
        
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search search input">
            <input
                type="search"
                className="form-control form-control-dark text-bg-white"
                placeholder="Search..."
                aria-label="Search"
            />
        </form>
        <div className="text-end">
            <button type="button" className="btn btn-outline-dark me-2">Login</button>
            <button type="button" className="btn" style={{background:"#ff7a2f",color:"white"}}>Sign-up</button>
        </div>
    </div>
    
</div>



        
        </>
    )
}
export default Header