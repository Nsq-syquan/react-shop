import { useState } from "react";
import { Link } from "react-router-dom";
import {  registerWithEmailAndPassword } from "../../../firebase";

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    // const [isLoaded, setLoaded] = useState(false)
    // const [isError, setError] = useState('')

    
    

    const handleSubmit = () => {
        if (!username) alert("Please enter username");
            registerWithEmailAndPassword(username, email, password);
    }

    return(
        <>
            <div className="container">
                <div className="row input-group flex-nowrap order-input login-form">
                    <div className='col-4'>
                        <div className="row login-title">
                            <h4>Đăng ký</h4>
                        </div>
                        <div className="row">
                            
                                <input type="text" value={username} className="form-control login-input" placeholder="Tên đăng nhập" onChange={(e) => setUsername(e.target.value)}/>
                                <input type="text" value={email} className="form-control login-input" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                                <input type="text" value={password} className="form-control login-input" placeholder="Mật khẩu" onChange={(e) => setPassword(e.target.value)}/>
                                <input type="text" value={passwordConfirmation} className="form-control login-input" placeholder="Nhập lại mật khẩu" onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                            
                        </div>
                        <div className="row">
                            <div className="col btn-register">
                                <Link to={""}>
                                    <button type="submit" className="btn btn-success btn-login" onClick={handleSubmit} >Đăng ký</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </>
    )
}
export default Register;