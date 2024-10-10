import React from "react";
import FilterSection from "./Components/FilterSection";
import Sort from "./Components/Sort";
import ProductList from "./Components/ProductList";
// import { useFilterContext } from "./Context/FilterContext";

const Products = () => {
  return( 
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="">
            <FilterSection/>
          </div>
        </div>
        <div className="col-md-9">
          <div className="">
            <Sort/>
          </div>
          <div className="">
            <ProductList/>
          </div>
        </div>
      </div>
    </div>
)
};

export default Products;
