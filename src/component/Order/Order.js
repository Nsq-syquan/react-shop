import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addOrder } from '../../firebase';



const Order = () => {

    const product = useSelector((state) => state.product.products);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // console.log(product)

    const [isTotal, setTotal] = useState(0)
    const [gender, setGender] = useState('')
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [thanhpho, setThanhPho] = useState('');
    const [quan, setQuan] = useState('');
    const [phuong, setPhuong] = useState('');
    const [soNha, setSoNha] = useState('');

    


    const handleOrder = () => {
        if(!username) alert("Vui lòng nhập thông tin!!!");
         product.slice(1).map((item) => {
            const infoProd = {
              id: item.id,
              price: item.price,
              quantity: item.quantity,
            }  
            const infoUser = {
                username: username,
                phone: phone,
                thanhpho: thanhpho,
                quan: quan,
                phuong: phuong,
                soNha: soNha,
            }
            const infoCart = {...infoProd, ...infoUser};

            addOrder(infoCart);
             
        })
        
        navigate("/product")  
      }



    return(
        <>
            <div className="container order-container">
                <div className="row">
                    <h2 className="order-title">NHẬP THÔNG TIN ĐƠN HÀNG</h2>
                </div>
                <div className="row order-content">
                    
                <h6>1. Thông tin người mua hàng:</h6>
                <div className='row'>
                    <div className='col'>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="inlineCheckbox1" value="option1"/>
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Nam</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="inlineCheckbox2" value="option2"/>
                            <label className="form-check-label" htmlFor="inlineCheckbox2">Nữ</label>
                        </div>
                    </div>
                </div>
                <div className="row input-group flex-nowrap order-input">
                    <div className='col-6'>
                        <input type="text" className="form-control" value={username} placeholder="Nhập họ và tên" onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className='col-6'>
                        <input type="text" className="form-control" placeholder="Nhập số điện thoại" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                </div>
                
            </div>
            <div className="row order-content">
                <h6>2. Địa chỉ nhận hàng:</h6>
                <div className="row input-group flex-nowrap order-input">
                    <div className='col'>
                        <input type="text" className="form-control" placeholder="Thành Phố/Tỉnh" value={thanhpho} onChange={(e) => setThanhPho(e.target.value)}/>
                    </div>
                    <div className='col'>
                        <input type="text" className="form-control" placeholder="Quận/Huyện" value={quan} onChange={(e) => setQuan(e.target.value)}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <input type="text" className="form-control" placeholder="Phường" value={phuong} onChange={(e) => setPhuong(e.target.value)}/>
                    </div>
                    <div className='col'>
                        <input type="text" className="form-control" placeholder="Số nhà, tên đường" value={soNha} onChange={(e) => setSoNha(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col btn-order'>
                    <button type="button" className="btn btn-success" onClick={handleOrder}>Đặt hàng</button>
                </div>
            </div>
                
        </div>

        </>  

    )
    
}
export default Order;