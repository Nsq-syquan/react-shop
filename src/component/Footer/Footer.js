import { Link } from "react-router-dom";

const Footer = () => {
    return (
    <>
        <div className="container-fluid footer-bar">
                <div className="container ">
                    <div className="row align-items-end">
                        <div className="col">
                            <h1>Contact</h1>
                        </div>
                        <div className="col order-5">
                            <h1>About</h1>
                        </div>
                        <div className="col order-1">
                            <h1>Product</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <ul className="list-group">
                                    <li className="list-group-item"><a href="#" className="link-footer">Facebook</a></li>
                                    <li className="list-group-item"><a href="#" className="link-footer">Instagram</a></li>
                                    <li className="list-group-item"><a href="#" className="link-footer">Tiktok</a></li>                         
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="list-group">
                            <li className="list-group-item"><Link className="link-footer" to={"/"}>MEN</Link></li>                         
                            <li className="list-group-item"><Link className="link-footer" to={"/"}>WOMEN</Link></li>                         
                                                     

                            </ul>
                        </div>
                        <div className="col">
                            <ul className="list-group">
                            <li className="list-group-item"><Link className="link-footer" to={"/"}>News</Link></li>                         
                            <li className="list-group-item"><Link className="link-footer" to={"/"}>Careers</Link></li>  
                            <li className="list-group-item"><Link className="link-footer" to={"/"}>Inventors</Link></li> 
                            </ul>
                        </div>
                    </div>
                </div>
               
            </div>
    </>  
    )
}
export default Footer;