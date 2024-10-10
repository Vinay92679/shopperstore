import {useProductContext} from '../Context/productcontext';
import Product from './Product';
import './Common.css'

const FeatureProducts = () => {
 const {isLoading, featureProducts} = useProductContext()  // featureProducts hum useProductContext se le rhe hai

 if(isLoading){
    return(
      // <div className="page_loading">.....Loading</div>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    )
 }
return(
<>
  <div className='container-fluid featured_container'>
     <div className='container'>
      <div className='row'>
       <div className='intro-data'>Check Now!</div>
       <h3 className='feature_services'>Our Feature Services</h3>
       <div className='d-flex flex-wrap gap-5 justify-content-center justify-content-md-between'>
         {
           featureProducts.map((currItems)=>{
                 return <Product key={currItems.id} {...currItems}/> /*  yahan data as a object mil rha hai. React sirf primitive values (like string, number) ya phir React elements (JSX) ko render kar sakta hai, object nahi. */
             })
         }
       </div>
      </div>
     </div>
 </div>
</>
 )
}

export default FeatureProducts;