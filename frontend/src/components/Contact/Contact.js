import React from 'react';
import { Link } from 'react-router-dom';


export default function ContactScreen(){
    return <div className="contact">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="contact-info">
                            <h2>Our Office</h2>
                            <h3><i className="fa fa-map-marker" />So 1, Vo Van Ngan, Thu Duc</h3>
                            <h3><i className="fa fa-envelope" />Phu@gmail.com</h3>
                            <h3><i className="fa fa-phone" />+034-304-8571</h3>
                            <div className="social">
                            <Link to=""><i className="fab fa-twitter" /></Link>
                            <Link to=""><i className="fab fa-facebook-f" /></Link>
                            <Link to=""><i className="fab fa-linkedin-in" /></Link>
                            <Link to=""><i className="fab fa-instagram" /></Link>
                            <Link to=""><i className="fab fa-youtube" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact-info">
                            <h2>Our Store</h2>
                            <h3><i className="fa fa-map-marker" />So 155, Vo Van Ngan, Thu Duc</h3>
                            <h3><i className="fa fa-envelope" />phumap@gmail.com</h3>
                            <h3><i className="fa fa-phone" />+123-456-7890</h3>
                            <div className="social">
                                <Link to=""><i className="fab fa-twitter" /></Link>
                                <Link to=""><i className="fab fa-facebook-f" /></Link>
                                <Link to=""><i className="fab fa-linkedin-in" /></Link>
                                <Link to=""><i className="fab fa-instagram" /></Link>
                                <Link to=""><i className="fab fa-youtube" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="contact-form">
                            <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" className="form-control" placeholder="Your Email" />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows={5} placeholder="Message" defaultValue={""} />
                            </div>
                            <div><button className="btn" type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.480424582181!2d106.77006551488576!3d10.851017092270931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752763f23816ab%3A0x282f711441b6916f!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgcGjhuqFtIEvhu7kgdGh14bqtdCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1606146040864!5m2!1svi!2s" 
                        frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
  
}