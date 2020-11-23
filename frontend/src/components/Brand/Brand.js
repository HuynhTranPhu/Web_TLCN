import React,{ Component }  from "react";
import Slider from "react-slick";


export default class Brand extends Component {
  render(){
    var settings = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: false,
    arrows: false,
    dots: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 300,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
    };
    return (
      <div>
        <div className="brand">
          <div className="container-fluid">
            <Slider {...settings}>
                    <div className="brand-item"><img src="/images/brand-1.png" alt="" /></div>
                    <div className="brand-item"><img src="/images/brand-2.png" alt="" /></div>
                    <div className="brand-item"><img src="/images/brand-3.png" alt="" /></div>
                    <div className="brand-item"><img src="/images/brand-4.png" alt="" /></div>
                    <div className="brand-item"><img src="/images/brand-5.png" alt="" /></div>
                    <div className="brand-item"><img src="/images/brand-6.png" alt="" /></div>     
            </Slider>
          </div>
        </div>
      </div> 
    );
  }
}
