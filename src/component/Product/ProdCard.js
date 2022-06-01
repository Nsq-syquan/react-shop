import { useState } from "react";
import { Link } from "react-router-dom";
// import { CartContext } from "../../Contexts/CartContext";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/productSlice";


const ProdCard = (props) => {
    const {id, title, img, price, description} = props;
    const [isAdded, setAdded] = useState(false);
    const [isQuantity, setQuantity] = useState(1);
    
    // const {addToCart} = useContext(CartContext);
    // const [isId, setId] = useState(0)

    // const product = useSelector((state)=> state.product);
    const dispatch = useDispatch();

    const handleAdd = () => {
        setAdded(true);
        const newItems = {
            id: id,
            title: title,
            img: img,
            price: price,
            desc: description,
            quantity: isQuantity,
        };
        dispatch(addProduct(newItems));

    };

    

    
    return (
    <>
    <div className="col" >
        <div className="card" key={id}>
            <img src={img} className="img-fluid product-img" />
            <div className="card-body">
                
                <Link to={`/product-${id}`} className="link-product" >
                    <h5 className="card-title">{title}</h5> 
                </Link>
                <input hidden className='quantity-value' type="text" value={isQuantity} />
                
                <p className="card-text">{description}</p>
                {isAdded ? (
                    <button disabled type="button" className="btn btn-success btn-add-product">Đã thêm</button>
                ) : (
                    <button type="button" className="btn btn-success btn-add-product" onClick={handleAdd}>Thêm vào giỏ hàng</button>
                )}
            </div>
        </div>
        </div>
    </>  
    )
}
export default ProdCard;