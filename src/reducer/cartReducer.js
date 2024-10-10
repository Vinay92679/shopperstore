const cartReducer = (state, action) => {
// console.log("cart values", state)
   if(action.type === "ADD_TO_CART"){
       let {id, color, amount, product} = action.payload

      // tackle the existing product

      let existingProduct = state.cart.find(
        (currItems) => currItems.id === id + color
      );

      if(existingProduct){
          let updatedProduct = state.cart.map((curElem)=>{
            if(curElem.id === id + color){
              let newAmount = curElem.amount + amount

              if(newAmount >= curElem.max){   // yahan hum handle kar rahe hai ki product stock se jyada na ho paye
                  newAmount = curElem.max
              }

              return {
                ...curElem,
                amount: newAmount,
              }
            } else {
              return curElem
            }
          });
        return {
          ...state, 
          cart : updatedProduct,
        }

      }else{
       let cartProduct;
       
       cartProduct = {
         id: id + color,   /* product ki id same ho but hme wahi product diffrnt color m cahiye isiliye yahan hm ek unique id bna rhe h */
         name: product.name,
         amount,
         color, // key and value same h isiliye only color
         image: product.image[0].url,  /* yahan hame ek hi image cahiye isiliye */
         price : product.price,
         max: product.stock
       }
  
       return{
       ...state,
       cart: [...state.cart, cartProduct]  /* yahan cartProduct se (...state.cart) me ek ek karke store hote rahengay jisse product ek ke niche ek add hote chale jayengay page par */
       }
    }
}

// to set the increment and decrement toggle

  if(action.type === "SET_DECREASE"){

     let updatedProduct = state.cart.map((curElem)=>{
      if(curElem.id === action.payload){
        let decAmount = curElem.amount - 1;

        if(decAmount <= 1){  // means toggle 1 ke niche kabhi jayega hi nhi
          decAmount = 1
        }

        return {
        ...curElem,
        amount: decAmount
      }
    }else{
        return curElem;
    }
   })
   return {                           // map ke bad yahan return krana jaruri h
        ...state, 
        cart: updatedProduct
  }
  }

    if(action.type === "SET_INCREASE"){

     let updatedProduct = state.cart.map((curElem)=>{
      if(curElem.id === action.payload){
        let incAmount = curElem.amount + 1;

        if(incAmount >= curElem.max){  // means toggle krne pr value api ke product ki max se upar nhi jayegi
          incAmount = curElem.max
        }

        return {
        ...curElem,
        amount: incAmount
      }
    }else{
        return curElem;
    }
   })
   return {                           // map ke bad yahan return krana jaruri h
        ...state,
        cart: updatedProduct
  }
  }
//

     if(action.type === "REMOVE_ITEMS"){
       let updateCart = state.cart.filter(
              (currItems) => currItems.id !== action.payload
       );
       return{
       ...state,
       cart: updateCart,
       }
     }

// for clear the cart
     if(action.type === "CLEAR_CART"){
       return{
       ...state,
       cart: []
       }
     }

// total number of cart items
  if(action.type === "CART_TOTAL_ITEMS"){
    let updatedItemVal = state.cart.reduce((initialVal, curElem)=>{
      let {amount} = curElem;

      initialVal = initialVal + amount;
      return initialVal;
    }, 0)
    return{
      ...state,
      total_item : updatedItemVal,
    }
 }

// total cart price
  if(action.type === "CART_TOTAL_PRICE"){
    let subtotal_price = state.cart.reduce((initialVal, curElem)=>{
    let {price, amount} = curElem

    initialVal = initialVal + price * amount;

    return initialVal;
 }, 0)

   return{
    ...state,
    total_price: subtotal_price
  }
 }

       return state;
}

export default cartReducer;