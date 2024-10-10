import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Common.css'

const HeroSection = ({mydata}) => {

const {name} = mydata

return(
<>
<div className="container-fluid hero_section py-5">
  <div className="container">
     <div className="row text-light justify-content-between py-5">
       <div className="col-md-6">
          <p className="intro-data text-white">Welcome to</p>  
              <h1>{name}</h1>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <NavLink>
                <Button id="show_btn">
                   show now
                </Button>
              </NavLink>
       </div>
      {/*  <div className="col-md-4 hero-section-image">
           <div className="hero_images">
              <img src="images/hero.jpg" className='img-style' alt="heroImg"/>
              <div className="hero_img_effect"></div>
           </div>
       </div> */}
     </div>
 </div>
</div>
</>
)
}

export default HeroSection;