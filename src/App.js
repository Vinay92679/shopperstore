import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Cart from "./Cart"
import Contact from "./Contact"
import Products from "./Products"
import SingleProduct from "./SingleProduct";
import PageNotFound from "./PageNotFound";
import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer";

const App = () => {
 
 

  return (

  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/product" element={<Products/>}></Route>
      <Route path="/singleproduct/:id" element={<SingleProduct/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>
    <Footer/>
  </Router>

)
};

export default App;
