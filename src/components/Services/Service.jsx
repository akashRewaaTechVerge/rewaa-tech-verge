import React from 'react'
import two from '../../images/shape/2.png'
import fourteen from '../../images/shape/14.png'
import fifteen from '../../images/shape/15.png'
import thirteen from '../../images/shape/13.svg'
import twel from '../../images/shape/12.svg'
import './Service.css'
const Service = () => {
    return (
        <div>
            <section className="services-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title"><span>Services</span>
                        <h3>How We Can Help?</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-faddd4"><i className="flaticon-landing-page"></i></div>
                                <h3><a href="single-service/index.html">Search Engine Optimization</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu
                                    labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-cafbf1"><i className="flaticon-goal"></i></div>
                                <h3><a href="single-service/index.html">Social Media Strategy</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu
                                    labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-ddd5fb"><i className="flaticon-contract"></i></div>
                                <h3><a href="single-service/index.html">Real Time and Data</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu
                                    labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-fcdeee"><i className="flaticon-application"></i></div>
                                <h3><a href="single-service/index.html">Online Media Management</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu
                                    labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-c5ebf9"><i className="flaticon-seo"></i></div>
                                <h3><a href="single-service/index.html">Reporting &amp; Analysis</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu
                                    labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-f8fbd5"><i className="flaticon-data-recovery"></i></div>
                                <h3><a href="single-service/index.html">Penalty Recovery</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu
                                    labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="default-animation">
                    <div className="shape-img1"><img src={twel} alt="image1" /></div>
                    <div className="shape-img2"><img src={thirteen} alt="image2" /></div>
                    <div className="shape-img3"><img src={fourteen} alt="image3" /></div>
                    <div className="shape-img4"><img src={fifteen} alt="image4" /></div>
                    <div className="shape-img5"><img src={two} alt="image5" /></div>
                </div>
            </section>
        </div>
    )
}

export default Service
