import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

import './Common.css'
const Services = () => {
  return (
  <>
      <div className="Service_section container">
         <div className="row">
         <div className="d-md-flex justify-content-between align-items-center gap-4">
              <div className="col-12 col-md-4 d-flex justify-content-center align-items-center services_1">
                  <div className="service_inner text-center">
                      <LiaShippingFastSolid className="service_icons"/>
                      <p>Super Fast Free Delivery</p>
                  </div>
              </div>

              <div className="services_2 col-12 col-md-4 my-4">
                 <div className="services-colum-2 d-flex justify-content-center align-items-center text-center mb-4">
                    <div className="inner_service_2">
                     <MdOutlineSecurity className="service_icons"/>
                     <p>Non-contact Shipping</p>
                    </div>
                 </div>
                 <div className="services-colum-2 d-md-flex justify-content-center align-items-center text-center">
                    <div className="inner_service_2">
                     <GiReceiveMoney className="service_icons"/>
                     <p>Money Back Guaranteed</p>
                    </div>
                 </div>
              </div>

              <div className="col-md-4 col-12 services_3 d-md-flex justify-content-center align-items-center">
                 <div className="service_inner text-center">
                      <RiSecurePaymentLine className="service_icons"/>
                      <p>Super secure Payment System</p>
                 </div>
              </div>
          </div>
         </div>
      </div>
  </>
)
}


export default Services;