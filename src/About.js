import { useContext } from "react"
import HeroSection from "./Components/HeroSection"
import { AppContext, useProductContext } from "./Context/productcontext"

function About(){

const data = {
    name: "Shoppers Ecommerce"
}

 return(
<>
  <HeroSection mydata={data}/>
</>
)
}

export default About