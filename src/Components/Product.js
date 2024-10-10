import { NavLink } from "react-router-dom";
import './Common.css'
import FormatPrice from "../Helpers/FormatPrice";

const Product = (currItems) => {
  const {id, name, image, price, category} = currItems;
return(
 <>
 <div className="col feature_product_section">
  <NavLink to={`/singleproduct/${id}`}>
    <div className="card p-3 border-0">
    <div>
      <figure>
        <img src={image}/>
        <figcaption className="caption">{category}</figcaption>
      </figure>
    </div>

      <div className="card_data">
        <div className="d-flex justify-content-between py-2">
          <h5 className="m-0">{name}</h5>
          <p className="card_data_price m-0">
            <FormatPrice price = {price}/>   {/* yahan hum product ke price ko rupees me convert kr rhe hai ek alag component me */}
          </p>
        </div>
      </div>
   </div>
  </NavLink>
 </div>
 </>
 )
}
export default Product;