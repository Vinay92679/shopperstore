import { useCartContext } from "../Context/cart_context";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash} from "react-icons/fa"

const CartItems = ({id, name, image, color, price, amount}) => {
// console.log(price)
// console.log(amount)

const { removeItem, setDecrease, setIncrease } = useCartContext()

return(
<div className="container">
   <div className="row text-center">
     <div className="col d-sm-flex gap-1 gap-md-3">
       <div className="">
          <figure>
              <img className="img-fluid" src={image} alt={id} style={{minWidth:"60px"}} />
          </figure>
       </div>
       <div className="text-start">
         <p className="m-0 mb-sm-2">{name}</p>
       <div className="d-flex align-items-center gap-2">
            <p className="m-0 ">Colors:</p>
            <div 
              className="color_style" 
              style={{backgroundColor: color, color: color, width:"18px", 
              height:"18px", 
              borderRadius:"50%"}}>
            </div>
       </div>
       </div>
     </div>

{/* price */}
     <div className="col d-none d-md-inline">
        <p>
           <FormatPrice price={price} />
        </p>
     </div>

{/* quantity */}
     <div className="col d-flex justify-content-center align-items-start">
        <CartAmountToggle 
         amount={amount} 
         setIncrease={() => setIncrease(id)} 
         setDecrease={() => setDecrease(id)}
        />
     </div>

{/* Subtotal */}
     <div className="col d-none d-md-inline">
       <p>
          <FormatPrice price={price * amount} />
       </p>
     </div>

{/* delete items */}
     <div className="col">
        <FaTrash className="" onClick={()=> removeItem(id)}/>
     </div>
   </div>
   <hr className="mb-3 mt-0"/>
</div>
)
}

export default CartItems;