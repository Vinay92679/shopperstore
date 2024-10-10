import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImgSlider = ({CompImages}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

return(
<>
    <Slider {...settings}>
      {CompImages.map((imageUrl, index) => (
        <div key={index} className='d-flex flex-column justify-content-center align-items-center text-center'>
          <img src={imageUrl} style={{ width:"175px", maxWidth:"100%", height:"auto"}} alt={`slide-${index}`} />
        </div>
      ))}
    </Slider>
</>
)
}

export default ImgSlider;