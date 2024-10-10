import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../Context/cart_context";
import "./Common.css"

const AddToCart = ({ product }) => {

  const {addToCart} = useCartContext()
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setamount] = useState(1)

  const setIncrease = () => {
     amount < stock ? setamount(amount + 1) : setamount(stock)
 }
 const setDecrease = () => {
     amount > 1 ? setamount(amount - 1) : setamount(1)
 }
  return (
    <>
      <p className="d-flex align-items-center">
        Colors:
        {colors.map((currColor, index) => {
          return (
            <button
              key={index}
              style={{ backgroundColor: currColor, borderRadius:"50%", height:"20px", width:"20px", border:"none", marginLeft:"5px" }}
              className={color === currColor ? "btnStyle active" : "btnStyle"}
              onClick={()=>setColor(currColor)}
            >
              {color === currColor ? <FaCheck style={{color:"gray", width:"12px", margin:"0px 0px 8px -2px"}}/> : null}
            </button>
          );
        })}
      </p>

      <div className="add_to_cart">
          <CartAmountToggle amount={amount} setIncrease={setIncrease} setDecrease={setDecrease} />
      </div>

      <NavLink to="/cart" onClick={()=>addToCart(id, color, amount, product)}> {/* product me single product aa rha h */}
         <button className="AddtoCart_btn">Add to cart</button>
     </NavLink>
    </>
  );
};
export default AddToCart;
