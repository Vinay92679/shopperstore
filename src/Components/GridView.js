import Product from "./Product";

const GridView = ({ products }) => {
 return(
 <>
  <div className="container">
    <div className="row d-flex justify-content-between flex-wrap text-center text-md-start">
     {
       products.map((currVal)=>{
              return <Product key={currVal.id} {...currVal}/>
      })
     }
    </div>
  </div>
 </>
 )
}

export default GridView;