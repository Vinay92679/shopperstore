import {FaMinus, FaPlus} from "react-icons/fa"
import "./Common.css"

const CartAmountToggle = ({amount, setIncrease, setDecrease}) => {
return(
<>
  <div className="cart_button justify-content-center gap-1 gap-sm-3" style={{width:"80px"}}>
     <button onClick={()=>setDecrease()}><FaMinus/></button> 
      <div className="quantity">{amount}</div>
     <button onClick={()=>setIncrease()}><FaPlus/></button>
  </div>
</>
)
}

export default CartAmountToggle;