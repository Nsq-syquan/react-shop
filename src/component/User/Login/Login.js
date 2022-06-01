import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {  logInWithEmailAndPassword, logout } from "../../../firebase";




const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleLogin = () => {
        if (!email) alert("Please enter username");
        logInWithEmailAndPassword( email, password);
        navigate("/");
    }

    const handleLogout = () => {
        logout()
    }


    return(
        <>
            <div className="container">
                <div className="row input-group flex-nowrap order-input login-form">
                    <div className='col-6'>
                        <div className="row login-title">
                            <h4>Đăng nhập</h4>
                        </div>
                        <div className="row">
                            <input type="text" value={email} className="form-control login-input" placeholder="Tên đăng nhập" onChange={(e)=> setEmail(e.target.value)} />
                            <input type="text" value={password} className="form-control login-input" placeholder="Mật khẩu" onChange={(e)=> setPassword(e.target.value)}/>
                        </div>
                        <div className="row btn-login">
                            <div className="col">
                                <button type="button" className="btn btn-primary" onClick={handleLogin}>Đăng nhập</button>
                            </div>
                            <div className="col">
                                <button type="button" className="btn btn-primary" onClick={handleLogout}>Đăng xuất</button>
                            </div>
                            <div className="col">
                                <Link to={"/register"}>
                                    <button type="button" className="btn btn-success" >Đăng ký</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
            <div></div>
        </>
    )
}
export default Login;