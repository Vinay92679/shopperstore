
import "./Common.css"
import ImgSlider from "./ImgSlider";

const Trusted = () => {

 const CompImages = [
 'https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png',
 'https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png',
 'https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png',
 'https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png',
 'https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png'
 ] 

 return (
<>
<div className="brand-section text-center my-5 py-5">
   <div className="container">
      <h3 className="mb-5">Trusted By 1000+ Companies</h3>
      {/* <div className="brand-section-slider flex-wrap d-flex justify-content-around">
        <div className="slide">
           <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"/>
        </div>
        <div className="slide">
           <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"/>
        </div>
        <div className="slide">
           <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"/>
        </div>
        <div className="slide">
           <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"/>
        </div>
        <div className="slide">
           <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"/>
        </div>
     </div> */}
    <ImgSlider CompImages = {CompImages}/>
   </div>        
</div>
</>
)
}

export default Trusted;