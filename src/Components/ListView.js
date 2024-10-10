import { NavLink } from 'react-router-dom'
import FormatPrice from '../Helpers/FormatPrice'
import './Common.css'
const ListView = ({products}) => {
 return(
 <>
  <div className="container">
    <div className="feature_product_section">
       {
        products.map((currVal)=>{
              const {id , name, image, price, description} = currVal
              return(
                <>
                   <div className="d-md-flex border my-4 p-3 gap-5">
                    <div className='mb-3'>
                     <figure>
                        <img src={image} alt={name}/>
                     </figure> 
                    </div> 

                    <div>
                     <h3>{name}</h3>
                      <p>
                         <FormatPrice price={price}/>
                      </p>
                      <p>
                         {description.slice(0, 90)}.....
                      </p>
                      <NavLink to={`/singleproduct/${id}`}>
                            <button>Read more</button>
                      </NavLink>
                     </div>
                   </div>
                </>
              )
         })
      }
    </div>
 </div>
 </>
 )
}

export default ListView;