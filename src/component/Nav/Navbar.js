import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineSplitCells } from "react-icons/ai"
import { BsBadgeAr, BsPersonCircle } from "react-icons/bs";
import { useState, useEffect } from "react";
import { currentUser, useAuth, logout } from "../../firebase";


const Navbar = () => {

    const currentUser = useAuth();

    const handleLogout = () => {
        logout()
    }

    
    
    return (
    <>
        <div className="header-nav">
                <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light ">
                    <div className="container">
                        <Link className="navbar-brand" to={"/product"}><BsBadgeAr className="header-logo"/></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-expanded="false" aria-controls="navbarSupportedContent"  >
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            
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
                            {!currentUser && 
                            <>
                                <Link to={"/login"} className="nav-login">
                                    Đăng nhập
                                </Link>
                            </>
                            }

                            {currentUser &&
                                <>
                                    <ul className="nav-login nav-login--has-dropdown"><BsPersonCircle /> {currentUser?.email} 
                                        <div class="dropdown-profile" >
                                            <li><button class="dropdown-item" type="button">Profile</button></li>
                                            <li><button class="dropdown-item" type="button">Đổi mật khẩu</button></li>
                                            <li><button class="dropdown-item" type="button" onClick={handleLogout}>Đăng xuất <AiOutlineSplitCells /></button></li>
                                        </div>
                                    </ul>
                                    {/* <div>
                                        <AiOutlineSplitCells className="icon-logout" onClick={handleLogout}/>
                                    </div>
                                */}
                                </>
                            }
                            
                            

                            
                            
                        </div>
                        </div>
                    </div>
                    </nav>

            </div>
    </>  
    )
}
export default Navbar;