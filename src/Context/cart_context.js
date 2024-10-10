import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";


const CartContext = createContext();

const getLocalCartData = () => {
   let localCartData = localStorage.getItem("MyCart")

   if(localCartData == []){
      return [];
   }else{
      return JSON.parse(localCartData)
   }
}

const initialState = {
//   cart: [], // isme data ek ek karke push karengay
  cart: getLocalCartData() || [],
  total_item: "",
  total_price: "" ,
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

// increment and decrement product botton
const setDecrease = (id) => {
    dispatch({type: "SET_DECREASE", payload: id})
}

const setIncrease = (id) => {
    dispatch({type: "SET_INCREASE", payload: id})
}

// to remove indivisual items from cart
  const removeItem = (id) => {
    dispatch({type: "REMOVE_ITEMS", payload: id})
}

// to clear cart
const clearCart = () => {
    dispatch({type: "CLEAR_CART"})
 }

// to add the cart data in localStprage
// get and set

  useEffect(()=>{
     dispatch({type:"CART_TOTAL_ITEMS"})
     dispatch({type:"CART_TOTAL_PRICE"})
     localStorage.setItem("MyCart", JSON.stringify(state.cart))
 },[state.cart])

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setDecrease, setIncrease }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
