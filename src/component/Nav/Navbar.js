import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { BsBadgeAr } from "react-icons/bs";
import { useState } from "react";


const Navbar = () => {
    const [isActive, setActive] = useState(false)

    const handleClick = () => {
        if(isActive == false){
            setActive(true)
        }
        else{
            setActive(false )
        }
    }

    return (
    <>
        <div className="header-nav">
                <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark ">
                    <div className="container">
                        <Link className="navbar-brand" to={"/product"}><BsBadgeAr className="header-logo"/></Link>
                        <button className="navbar-toggler" type="button" onClick={handleClick} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded={isActive} aria-controls="navbarSupportedContent"  >
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                            <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li className="nav-item dropdown">
                            
                                <Link className="nav-link "  id="navbarDropdown" role="button" to={"/product"}>Product</Link>
                            
                            </li>
                            
                        </ul>
                        <div className="d-flex">
                            <Link to={"/cart"} >
                                <FaShoppingCart className="icon-cart"/>
                            </Link>
                            
                            <Link to={"/login"} className="nav-login">
                                
                                Đăng nhập
                            </Link>
                        </div>
                        </div>
                    </div>
                    </nav>

            </div>
    </>  
    )
}
export default Navbar;