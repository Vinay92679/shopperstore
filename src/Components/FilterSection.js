import { useFilterContext } from "../Context/FilterContext";
import {FaCheck} from "react-icons/fa"
import FormatPrice from "../Helpers/FormatPrice"
import "./Common.css";

const FilterSection = () => {
 
   const {filters:{text, category, color, price, maxPrice, minPrice}, updateFilterValue, all_products, clearFilters} = useFilterContext();


// To get the unique data from each fields (cetogories wise)
   const getUniqueData = (data, property) => {
      let newVal = data.map((currVal)=>{
            return currVal[property]
      });

      if(property === "colors"){
            newVal = newVal.flat();  /* yahan hum color ko display karane ke liye unique colors nikal rhe hai sare repeated colors me se */
         }

      return (newVal = ["all", ...new Set(newVal)]);  /*  new set() hme array se hme unique values nikal kar deta hai for category buttons, repeated value nhi */
   }
   
   const CategoryOnlyData = getUniqueData(all_products, "category");   /* category = api me category wali property */
   const CompanyData = getUniqueData(all_products, "company")
   const colorsData = getUniqueData(all_products, "colors")     /* api se sare color nikalne ke liye */
   // console.log(colorsData)   /* yahan ab unique color ek new array hi milengay because of functionality */
 
 return(
  <>
    <div className="col-6 col-md-10 my-5">
      <form onSubmit={(e)=> e.preventDefault()}>
         <input className="w-100 p-1 shadow-sm border-1" type="text" name="text" value={text} onChange={updateFilterValue} placeholder="SEARCH"/>
      </form>
    </div>

    <div className="category_section mb-5">
       <h5>Category</h5>
       <div>
         {
            CategoryOnlyData.map((currVal, index)=>{
               return (
                  <button key={index} className={`d-block ${currVal === category ? "active": ""}`} type="button" name="category" value={currVal} onClick={updateFilterValue}>
                  {currVal}
                  </button>
               )
            })
         }
      </div>
    </div>

    <div className="campany_filter mb-5">
       <h5>Company</h5>
      <form action="#">
         <select name="company" id="company" className="" onClick={updateFilterValue} style={{width:"100px"}}>
            {
               CompanyData.map((currVal, index)=>{
                  return <option key={index} value={currVal} name="company">{currVal}</option>  /* idhar name=company isiliye bcs api me prperty company h or isi ke base par wo aage ise set karega (filtercontext comp me name=e.target.value hmne define kar rakha hai) */
               })
            }
         </select>
      </form>
    </div>

    <div className="colors_filter d-none mb-5">
      <h5>Colors</h5>
      <div className="d-flex align-items-center gap-2">
         {
            colorsData.map((currColor, index)=>{
               if(currColor === "all"){
               return (
                  <button 
                     type="button" 
                     className=""
                     value={currColor}
                     name="color"  /* name initial state jo name diya hai usse match hona chiye */
                     key={index}
                     onClick={updateFilterValue}
                  >
                  All
                  </button>
                );
               }
               return (
                  <button 
                     type="button" 
                     className={color === currColor ? "btnStyle active" : "btnStyle"}
                     value={currColor}
                     style={{backgroundColor: currColor, color:"gray", padding:"10px", borderRadius:"50%"}}
                     name="color"  /* name initial state jo name diya hai usse match hona chiye */
                     key={index}
                     onClick={updateFilterValue}
                  >
                     {color === currColor ? <FaCheck className="" /> : null}
                  </button>
               )
            })
         }
      </div>
   </div>

    <div className="price_range_filter mb-5">
       <h5>Price</h5>
         <p>
            <FormatPrice price={price} />
         </p>
         <input 
            type="range" 
            name="price"
            min={minPrice} 
            max={maxPrice} 
            value={price}
            onChange={updateFilterValue} 
         />
    </div>

    <div className="clear_filter_button">
       <button onClick={clearFilters} >Clear Filters</button>
    </div>
  </>
 )
}

export default FilterSection;