import axios from 'axios';
import {createContext, useContext, useEffect, useReducer} from 'react'
import reducer from '../reducer/productReducer'

// const AppContext = React.createContext('light');   :== syntax

const AppContext = createContext();

// const value = useContext(AppContext)    :== syntax

const API = 'https://api.pujakaitem.com/api/products';

const initialState = {
 isLoading : false,
 isError : false,
 products : [],
 featureProducts: [],
 isSingleLoading: false,
 singleProduct: {}   // {} curly beacause single product ka data obj me aa rha hai
}
 

const AppProvider = ({children}) =>{   // children me <App/> component aa rha hai

      // creating reducer for manage states
    const [state, dispatch] = useReducer(reducer, initialState )

       // getting API data
        const getProduct = async(url) => {
              dispatch({type:"SET_LOADING"})  // ye dispatch reducer ke action ko trigger karega
          try {
               const res = await axios.get(url)
               const products = await res.data;
               dispatch({type:"SET_PRODUCTS", payload: products})
          } catch (error) {
               dispatch({type: "API_ERROR"})
          }
        }
        

        const getSingleProduct = async (url) => {
              dispatch({type:"SET_SINGLE_LOADING"});
          try {
              const res = await axios.get(url)
              const singleProduct = await res.data;
              dispatch({type:"SET_SINGLE_PRODUCT", payload: singleProduct})  // yahan payload se initialState m data store kra rhe h
          }catch(error){
              dispatch({type:"SET_SINGLE_ERROR"})
          }
        }

         useEffect(()=>{
          getProduct(API)
        }, [])

return( 
        <AppContext.Provider value={{...state, getSingleProduct}}> {/* ...state = initialState ki values */}
          {children}
        </AppContext.Provider>
 )
}


//custom hook
const useProductContext = () => {
 return(
     useContext(AppContext)
 )
};

export {AppProvider, AppContext, useProductContext}