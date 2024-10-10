import React from "react";
import HeroSection from "./Components/HeroSection";
import Trusted from "./Components/Trusted";
import Services from "./Components/Services";
import Contact from "./Contact";
import FeatureProducts from "./Components/FeatureProduct";
const Home = () => {

const data = {
    name:"Shoppers Store"
}

return(
<>
  <HeroSection mydata={data}/>
  <FeatureProducts/>
  <Services/>
  <Trusted/>
</>
)
}

export default Home;