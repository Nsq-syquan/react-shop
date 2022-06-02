
const Header = () => {

    return (
    <>
        <div className="header-img header-body">
                    <img src="https://img3.thuthuatphanmem.vn/uploads/2019/10/14/anh-lookbook-thoi-trang_113854100.jpg" className="img-fluid img" alt="..." />
                    </div>
                    <div className="container header-bottom">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container">
                                <div className="collapse navbar-collapse">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                    <li className="nav-item">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                        <label className="form-check-label" htmlFor="inlineCheckbox1">Nam</label>
                                    </li>
                                    <li className="nav-item">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                        <label className="form-check-label" htmlFor="inlineCheckbox1">Nữ</label>
                                    </li>
                                    <li className="nav-item">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                        <label className="form-check-label" htmlFor="inlineCheckbox1">Trẻ em</label>
                                    </li>
                                    
                                </ul>
                                <div className="d-flex">
                                    <button className="btn btn-outline-success" type="submit">Xem tất cả</button>
                                </div>
                                </div>
                            </div>
                            </nav>
                    </div>
    </>  
    )
}
export default Header;