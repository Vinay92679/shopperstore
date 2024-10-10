const ProductReducer = (state, action) => {
//    if(action.type === 'SET_LOADING') {
//      return{
//        ...state,
//        isLoading: true,
//     }
//  }
//    if(action.type === 'API_ERROR') {
//      return{
//        ...state, 
//        isLoading: false,
//        isError: true
//     }
//  }


 switch(action.type){
   case "SET_LOADING":
     return{
       ...state,
       isLoading: true,
     };

   case "SET_PRODUCTS":
     const featureData = action.payload.filter((currVal) => {
       return currVal.featured === true; // yaha api me jiski featured = true hogi wo return kra rhe hai
     })
   
     return {
       ...state,
       isLoading: false,
       products: action.payload,  // yaha hum product me data add kr rhe hai jo pehle initially blank [] tha
       featureProducts: featureData  // yaha hum filter kre hue data ko add kra rha hai
     }
 
   case "API_ERROR":
     return{
         ...state, 
        isLoading: false,
        isError: true
     }

   case "SET_SINGLE_LOADING":
     return {
         ...state,
        isSingleLoading: true
     };

   case "SET_SINGLE_PRODUCT":
     return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload
     }
 
   case "SET_SINGLE_ERROR":
     return{
         ...state, 
        isSingleLoading: false,
        isError: true
     }  

   default: 
   return state;

 }
}

export default ProductReducer;