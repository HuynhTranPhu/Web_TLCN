import React,{ Component }  from "react";
import Slider from "react-slick";



export default class Review extends Component {
    render(){
      var settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
      };
      return (
            <div className="review">
                  <div className="container-fluid">
                        <div className="review-slider normal-slider">
                          <Slider {...settings}>
                            <div className="col-md-12">
                                <div className="review-slider-item">
                                    <div className="review-img">
                                        <img src="img/review-1.jpg" alt="review1" />
                                    </div>
                                    <div className="review-text">
                                        <h2>Pham To Bao</h2>
                                        <h3>Pho Chua</h3>
                                        <div className="ratting">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <p>
                                            The best chose when you would like to some clothes beautiful
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="review-slider-item">
                                    <div className="review-img">
                                        <img src="img/review-2.jpg" alt="review2" />
                                    </div>
                                    <div className="review-text">
                                        <h2>Phu Map</h2>
                                        <h3>Dev_Backend</h3>
                                        <div className="ratting">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <p>
                                            The best e-Commerce
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="review-slider-item">
                                    <div className="review-img">
                                        <img src="img/review-3.jpg" alt="review3" />
                                    </div>
                                    <div className="review-text">
                                        <h2>Kien Vu</h2>
                                        <h3>Dev_Frontend</h3>
                                        <div className="ratting">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <p>
                                            So Great ! The best e-Commerce
                                        </p>
                                    </div>
                                </div>
                            </div>
                          </Slider>
                        </div>
                  </div>
              </div>
      );
    }
  }