import { Link } from 'react-router-dom';
import React from 'react';

const Order = () => {
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
                            <label className="form-check-label" for="inlineCheckbox1">Nam</label>
                        </div>
                        <div className="col-2 form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="inlineCheckbox2" value="option2"/>
                            <label className="form-check-label" for="inlineCheckbox2">Nữ</label>
                        </div>
                    </div>
                </div>
                <div className="row input-group flex-nowrap order-input">
                    <div className='col-6'>
                        <input type="text" className="form-control" placeholder="Nhập họ và tên" />
                    </div>
                    <div className='col-6'>
                        <input type="text" className="form-control" placeholder="Nhập số điện thoại" />
                    </div>
                </div>
                
            </div>
            <div className="row order-content">
                <h6>2. Địa chỉ nhận hàng:</h6>
                <div className="row input-group flex-nowrap order-input">
                    <div className='col'>
                        <input type="text" className="form-control" placeholder="Thành Phố/Tỉnh" />
                    </div>
                    <div className='col'>
                        <input type="text" className="form-control" placeholder="Quận/Huyện" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <input type="text" className="form-control" placeholder="Phường" />
                    </div>
                    <div className='col'>
                        <input type="text" className="form-control" placeholder="Số nhà, tên đường" />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col btn-order'>
                    <button type="button" className="btn btn-success">Đặt hàng</button>
                </div>
            </div>
                
        </div>

        </>  

    )
    
}
export default Order;