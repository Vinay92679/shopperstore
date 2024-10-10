const FilterReducer = (state, action) => {

switch(action.type){

 case "LOAD_FILTER_PRODUCTS":
  let priceArr = action.payload.map((curElem) => curElem.price);
  let maxPrice = Math.max(...priceArr)
  // console.log(maxPrice)
   return{
     ...state,
     Filter_products : [...action.payload], // ...spread operator isliye because ye main array ki copy bna leta hai
     all_products : [...action.payload],
     filters: {...state.filters, maxPrice, price: maxPrice}
   }

 case "SET_GRIDVIEW":
   return{
     ...state,
     grid_view: true
   }

 case "SET_LISTVIEW":
   return{
     ...state,
     grid_view: false
   }

  case "GET_SORT_VALUE":
      // let userSortValue = document.getElementById("sort")
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value; /* select box se agar selected value nikalni h toh */
      // // console.log(sort_value)
    return{
     ...state,
    sorting_value: action.payload
   }
 
  case "SORTING_PRODUCTS":
    let newSortData;
    // let tempSortProduct = [...action.payload] /* spread oprator ki help hum copy data store kra rha hai */

    const {Filter_products, sorting_value} = state
    let tempSortProduct = [...Filter_products]

    const sortingProducts = (a, b) => {
       if(sorting_value === "lowest"){
        return a.price - b.price
      }

      if(sorting_value === "highest"){
           return b.price - a.price
      }

      if(sorting_value === "a-z"){
            return a.name.localeCompare(b.name) // yahan hum alphabetwise compare kra rha hai compare kra 
      }

      if(sorting_value === "z-a"){
          return b.name.localeCompare(a.name)
      }
      }

      newSortData = tempSortProduct.sort(sortingProducts)  /* hum is tarah bhi sort kra sakte hai */
   
      return{
        ...state,
      Filter_products: newSortData
      }

      case "SEARCH_FILTER_VALUES":
        const {name, value} = action.payload
        return{
        ...state,
        filters: {
          ...state.filters,
          [name]: value
        }
      }

      case "SEARCH_PRODUCTS":
        let {all_products} = state
        let tempFilterProduct = [...all_products]

        const {text, category, company, price } = state.filters

        if(text){
          tempFilterProduct = tempFilterProduct.filter((currVal)=>{
            return currVal.name.toLowerCase().includes(text)    /* yahan name se matlab h jo api me product ka name h usse */
        })
        }

        if(category !== "all"){
          tempFilterProduct = tempFilterProduct.filter(
            (currVal)=> currVal.category === category
        );
        }

        if(company !=="all"){
          tempFilterProduct = tempFilterProduct.filter(
            (currVal)=> currVal.company === company.toLowerCase()
        );
        }

        // if(color !=="all"){
        //   tempFilterProduct = tempFilterProduct.filter((currVal)=> 
        //     // console.log(currVal.includes(color))
        //     // currVal.colors.find(color)
        //     console.log(curr)
        //   )
        // } 

        if(price === 0){
          tempFilterProduct = tempFilterProduct.filter(
            (currVal)=> currVal.price === price
          )          
        }
        else{
          tempFilterProduct = tempFilterProduct.filter(
            (currVal)=> currVal.price <= price
          )
        }

        return{
          ...state,
        Filter_products: tempFilterProduct
        }

        
    case "CLEAR_FILTERS":
      return{
        ...state,
        filters: {
        ...state.filters,
        text: "",
        category: "all",
        company: "all",
        color: "all",
        maxPrice: 0,
        price: state.filters.maxPrice,
        minPrice: state.filters.maxPrice,
        },
      };
 default:
   return state
}
}

export default FilterReducer;