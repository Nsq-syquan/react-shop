import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Home from './component/Home/Home';
import Product from './component/Product/Product';
import Cart from './component/Cart/Cart';
import Navbar from './component/Nav/Navbar';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import DetailProduct from './component/DetailProduct/DetailProduct';
import Order from './component/Order/Order';
import Login from './component/User/Login/Login';
import Register from './component/User/Register/Register';



function App() {
  const [allProduct, setProduct] = useState([]);

  useEffect(() => {
    async function getProduct(){
      const res = await axios.get("https://62820e0d9fac04c6540e43fe.mockapi.io/shopping_app/products");
      return res;
   }
   getProduct().then((res) => setProduct(res.data));
   getProduct().catch((err) => console.log(err));
 },[]);





  return (

      <Router>
        <Navbar />
        <Header />
        <div className='body-page'>
          <Routes>
            <Route path='/' element={<Home  />} />
            <Route path='/product' element={<Product allProduct={allProduct}   />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product-:id' element={<DetailProduct allProduct={allProduct} />} />
            <Route path='/order' element={<Order />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            
          </Routes>
        </div>
        <Footer />
      </Router>
    // {/* </CartContext.Provider> */}
  );
}

export default App;
