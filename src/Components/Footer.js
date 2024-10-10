import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


import './Common.css'

const Footer = () =>{
return(
<>
<div className="footer_container">
  <section className="container footer">
  <div className="row">
    <div className="d-sm-flex text-center justify-content-between align-items-center p-4">
       <div className="colum_1">
          <h4>Ready to get started?</h4>
          <h4>Talk to us today</h4>
       </div>
       <div className="colum_2">
         <Button className="btn">
            <NavLink to='./contact' className="link">Get Started</NavLink>
         </Button>
       </div>
    </div>
  </div>
  </section>
 
  <section className="container-fluid footer_2 pt-5 border">
    <div className="container">
    <div className="row py-5">
      <div className="col-md-6 mb-5 d-sm-flex justify-content-between justify-content-md-around">
        <div className="col-sm-4 text-white">
           <h6>Shoppers Store</h6>
           <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
        </div>
        <div className="col-sm-4">
           <h6>Subscribes to get important updates</h6>
           <form action="#">
               <input type="email" placeholder="YOUR E-MAIL" className="p-1"/>
               <input type="submit" className="sbcrb_btn" value="Subscribe" />
           </form>
        </div>
     </div>
     <div className="col-md-6 d-sm-flex justify-content-between justify-content-md-around">
       <div className="col-sm-4 mb-5">
         <h6>Folow Us</h6>
             <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram className=" social_icon1"/>
             </a>
             <a href="https://www.youtube.com/" target="_blank">
              <FaYoutube className="social_icon2"/>
             </a>
       </div>
       <div className="col-sm-4">
          <h6>Call Us</h6>
          <a href="tel:12345678978">+91 12345678978</a>
       </div>
     </div>
   </div>
   </div>
   <div className="container footer_bottom mb-3">
     <hr className="text-white"/>
        <div className="row">
           <div className="col">
             <p>@{new Date().getFullYear()} Vinay Store. All Rights Reserved</p>
           </div> 
           <div className="col">
             <p className="m-0">Privacy</p>
             <p className="m-0">Term & condition</p>
           </div>
        </div>
   </div>
 </section>
</div>
</>
)
}

export default Footer;