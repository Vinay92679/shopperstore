import {BsFillGridFill, BsList} from 'react-icons/bs'
import { useFilterContext } from '../Context/FilterContext';
import "./Common.css"

const Sort = () => {
 const {grid_view, setGridView, setListView, Filter_products, sorting} = useFilterContext()
return(
 <>
<div className="container sorting_section my-5">
  <div className="row justify-content-sm-between align-items-center gap-3">
    <div className="col-sm-3 d-flex">
      <button onClick={setGridView} className={grid_view ? "active grid_buttons " : "grid_buttons"}>
        <BsFillGridFill className='icon'/>
      </button>
      <button onClick={setListView} className={!grid_view ? "active grid_buttons" : "grid_buttons"}>
        <BsList className='icon'/>
      </button>
    </div>
    <div className="col-sm-3 text-sm-center">
      {`${Filter_products.length} Product avilable`}
    </div>
    <div className="col-sm-3 text-sm-end">
       <form action='#'>
        <label htmlFor='sort'></label>
        <select name='sort' id='sort' onClick={sorting}>
          <option value="lowest">Price lowest</option>
          <option value="highest">Price highest</option>
          <option value="a-z">Price A - Z</option>
          <option value="z-a">Price Z - A</option>
        </select>
       </form>
    </div>
 </div>
</div>
 </>
)
}

export default Sort;