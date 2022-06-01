import { useState } from "react";
import { Link } from "react-router-dom";
import ProdCard from "./ProdCard";



const Product = (props) => {
    const {allProduct} = props;
   

    return (
        <div className="container ctn-body">
                <div className="Product product-border">
                    <div className="row g-0 title-category">
                        <span>All PRODUCT</span>
                    </div>

                    <div className="row row-cols-1 row-cols-md-4 g-4">
                                { allProduct.map((item) => (
                            <div key={item.id}>
                            
                                <ProdCard 
                                    id={item.id} 
                                    title={item.title}
                                    img={item.image} 
                                    price={item.price} 
                                    description={item.description}
                                />
                                
                        </div>
                        ))}   
                    </div>  
                    </div>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination ">
                            <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                            </li>
                        </ul>
                    </nav>
            </div>
    
        

    )
}
export default Product;