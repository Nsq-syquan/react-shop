import { useState } from 'react';
import { BsX } from 'react-icons/bs'
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../redux/productSlice";

const Cart = () => {
  const [isQuantity, setQuantity] = useState(1);
  const product = useSelector((state) => state.product.products)
  const [isTotal, setTotal] = useState(0)
  const dispatch = useDispatch();
  
  const increase = () => {
    if(isQuantity < 10)
    setQuantity((isQuantity) => isQuantity + 1);
  }
  const decrease = () => {
    if(isQuantity > 0)
    setQuantity((isQuantity) => isQuantity - 1);

  }

  
  
  function handleDelete(item) {
   
    dispatch(deleteProduct(item));
  }

    return (
    <>
        <div className='container ctn-body'>
          <div className='row'>
            <div className='row title-category'>
              <h5>Giỏ hàng</h5>
            </div>
            <div className='row cart-title'>
              <div className='col-5'>
                <span>Sản phâm</span>
              </div>
              <div className='col-2'>
                <span>Đơn giá</span>
              </div>
              <div className='col-2'>
                <span>Số lượng</span>
              </div>
              <div className='col-2'>
                <span>Số tiền</span>
              </div>
              <div className='col-1'>
                <span>Thao tác</span>
              </div>
            </div>
            
             
                    <div className='row cart-body'>
              { product.slice(1).map((item, index) => (
                    <div className='row cart-body-container' key={index}>
                      <div className='col-1 cart-body-img'>
                        <input type="checkbox" />
                        <img className='cart-img' src={item.img} />
                      </div>
                      <div className='col-4'>
                        <Link className='cart-body-title2' to={`/product-${item.id}`}>{item.title}</Link>
                      </div>
                      <div className='col-2 cart-price-2'>
                        <span>{item.price} $</span>
                      </div>
                      <div className="col-1 btn-group quantity-input" role="group" >
                        <button type="button" className="btn  btn-quantity " onClick={decrease}>-</button>
                        <input className='quantity-value' type="text" value={item.quantity} />
                        <button type="button" className="btn  btn-quantity " onClick={increase}>+</button>
                      </div>
                      <div className='col-2 cart-price'>
                        <span>{item.price*item.quantity} $</span>
                      </div>
                      <div className='col-1 cart-delete' onClick={() => handleDelete(item)}>
                        <BsX />
                      </div>
                    </div>
                    
              )
            )}
            </div>  
          </div>
          {/* cart mobile */}
          
              {product.slice(1).map((item, index) => (
              <div className='row cart-mobile'>
                
                <div className='col-3 cart-body-mobile' key={index}>
                  <img className='cart-img' src={item.img} />
                </div>
                <div className='col-8'>
                  <div className='row'>
                    <a href='#' className='cart-body-title2'>{item.title}</a>
                  </div>
                  <div className='row price-mobile'>
                    <span>x {item.price} $</span> 
                  </div>
                </div>
                <div className='col-1 cart-delete' onClick={() => handleDelete(item)}>
                  <BsX />
                </div>
              </div>  
                
            )
          )}

          
          
          
          


          <div className='row'>
            <div className='col btn-order'>
              <Link to={'/order'}>
                <button type="button" className="btn btn-success">Tiếp tục</button>
              </Link>

            </div>
          </div> 
          {/* Button mobile */}
          <div className='row fixed-bottom btn-cart-mobile'>
            <button type="button" className="btn btn-success">Tiết tục</button>
          </div>  
        </div>
    </>  
    )
}
export default Cart;