import { Link, useParams } from 'react-router-dom';
import { BsFillStarFill, BsCartCheck } from 'react-icons/bs'
import { useDispatch } from 'react-redux';

import { useState } from 'react';

import ProdCard from '../Product/ProdCard';
import { addProduct } from "../../redux/productSlice";


const DetailProduct = (props) => {
  const {id} = useParams();
  const { allProduct } = props;
  
  const product = allProduct.find((product) => product.id == id);
  // const {id, title, img, price, description} = props;
  const [isAdded, setAdded] = useState(false);
  const [isQuantity, setQuantity] = useState(1)
  const dispatch = useDispatch();
  const handleClick = () => {
    setAdded(true);
    const newItems = {
        id: product.id,
        title: product.title,
        img: product.image,
        price: product.price,
        desc: product.description,
        quantity: isQuantity,
    };
    dispatch(addProduct(newItems));
};

  const increase = () => {
    if(isQuantity < 10)
    setQuantity((isQuantity) => isQuantity + 1);
  }
  const decrease = () => {
    if(isQuantity > 0)
    setQuantity((isQuantity) => isQuantity - 1);

  }


    return (
    <>
        <div className='container ctn-body'>
          <div className='row '>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Product</a></li>
              <li className="breadcrumb-item"><a href="#">Men</a></li>
              <li className="breadcrumb-item active" aria-current="page">Áo khoác Kaki</li>
            </ol>
          </nav>
          </div>
        
          <div className="row g-0">
                    <div className="col-6 col-md-4 detail-img-mobile">
              
              <div className='row detail-img'>
                <img src={product.image} />
  
              </div>
            </div>
            <div className="col-sm-6 col-md-8">
              <div className='row detail-title'>
                <p>{product.title}</p>
              </div>
              <div className='row detail-content'>
                <div className='row detail-complane'>
                  <div className='col-6'>
                    <a href='#' className='title-star'>
                      4.1
                    </a>
                    <BsFillStarFill className='icon-star star-active'/>
                    <BsFillStarFill className='icon-star star-active '/>
                    <BsFillStarFill className='icon-star star-active'/>
                    <BsFillStarFill className='icon-star star-active'/>
                    <BsFillStarFill className='icon-star'/>
                  </div>
                  <div className='col-6'>
                    <p className='grey-color detail-daban'>Đã bán: 1k</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-5 detail-price'>
                    <p>{product.price} VNĐ</p>
                  </div>  
                  <div className='col-7 detail-price-sale'>
                    <p>{product.price} VNĐ</p>
                  </div>  
                </div>
                <div className='row p-4'>
                  <div className='col-2'>
                    <p className='title-size'>Size</p>
                  </div>
                  <div className='col'>
                    <button className="btn btn-outline-dark btn-sm btn-cus" type="button">Size Nam</button>
                    <button className="btn btn-outline-dark btn-sm btn-cus" type="button">Size Nữ</button>
                  </div>
                </div>
                <div className='row p-4'>
                  <div className='col-4'>
                    <p className='title-size'>Số lượng</p>
                  </div>
                  <div className="col-2 btn-group quantity-input" role="group" >
                    <button type="button" className="btn  btn-quantity " onClick={decrease}>-</button>
                    <input className='quantity-value' type="text" value={isQuantity} />
                    <button type="button" className="btn  btn-quantity " onClick={increase}>+</button>
                  </div>
                  <div className='col detail-tonkho'>
                    <p className='grey-color'>5 sản phẩm có sẳn</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-6 btn-cart'>
                    {isAdded ? (

                      <button disabled type="button" className="btn btn-outline-primary btn-add-card"><BsCartCheck className='icon-add-card'/>Đã thêm</button>
                    ) : (
                      <button type="button" className="btn btn-outline-primary btn-add-card" onClick={handleClick}><BsCartCheck className='icon-add-card' />Thêm vào giỏ hàng</button>

                    )}
                </div>
                  <div className='col-6 btn-cart'>
                  <button type="button" className="btn btn-outline-primary btn-buy"><Link className='link-cart' to={"/Cart"}>Mua ngay</Link></button>
                  </div>
                </div>
              </div>
            </div>
            <div className='row horizontal-bar'>
              <hr></hr>
            </div>
            <div className='row'>
              <h5>Mô tả sản phẩm</h5>
            </div>
            <div className='row detail-descrip'>
              <p>
                  {product.description}
              </p>
            </div>



            
          
        </div>
      </div>
    </>  
    )
}
export default DetailProduct;