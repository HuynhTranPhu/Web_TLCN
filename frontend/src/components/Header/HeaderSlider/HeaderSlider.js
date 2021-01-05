import React,{ Component }  from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";


export default class HeaderSlider extends Component {
  render(){
    var settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="col-md-6">
            <div className="header-slider normal-slider">
                <Slider {...settings}>
                    <div className="header-slider-item">
                        <img src="img/slider-1.jpg" alt="Slider" />
                        <div className="header-slider-caption">
                            <p>SPRING OFFER 2021 COLLECTION</p>
                            <Link className="btn" to="/product-list"><i className="fa fa-shopping-cart"></i>Shop Now</Link>
                        </div>
                    </div>
                    <div className="header-slider-item">
                        <img src="img/slider-2.jpg" alt="Slider " />
                        <div className="header-slider-caption">
                            <p>SALE OFF 50%</p>
                            <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Shop Now</a>
                        </div>
                    </div>
                    <div className="header-slider-item">
                        <img src="img/slider-3.jpg" alt="Slider " />
                        <div className="header-slider-caption">
                            <p>SUMMER OFFER 2021 COLLECTION</p>
                            <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Shop Now</a>
                        </div>
                    </div>
                </Slider>
                
            </div>
        </div>
    );
  }
}
