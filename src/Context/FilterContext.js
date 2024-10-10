import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/FilterReducer"

const FilterContext = createContext()
const initialState = {
  Filter_products: [],
  all_products: [],
  grid_view : true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    maxPrice: 0,
    price: 0,
    minPrice: 0
  },
}

const FilterContextProvider = ({children}) => {
  const {products} = useProductContext()  // yahan ProductContext se hum products ka data la rhe hai ( initialState = {products:[]} )
//   console.log(products)

  const [state, dispatch] = useReducer(reducer, initialState)

// grid view function
  const setGridView = () => {
     return dispatch({type: "SET_GRIDVIEW"})
  }
 
// list view funtion
  const setListView = () => {
     return dispatch({type: "SET_LISTVIEW"})
  }

// sorting function
  const sorting = (event) => {
    let userValue = event.target.value
    dispatch({type:"GET_SORT_VALUE", payload: userValue})
 }

// updates the search filter values
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    // console.log(name, value)

    return dispatch({type:"SEARCH_FILTER_VALUES", payload:{name, value}})
  }

// clear the filter
  const clearFilters = () => {
    dispatch({type: "CLEAR_FILTERS"})
 }

//Sort the products
  useEffect(()=>{
    dispatch({type:"SEARCH_PRODUCTS"})
    dispatch({type:"SORTING_PRODUCTS"})
  }, [products,state.sorting_value, state.filters])

 useEffect(()=>{
   dispatch({type: "LOAD_FILTER_PRODUCTS", payload: products})
 },[products])


return(
<>
<FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue, clearFilters}}>
   {children}
</FilterContext.Provider>
</>
)
}

export const useFilterContext = () => {
 return useContext(FilterContext)
}

export default FilterContextProvider;