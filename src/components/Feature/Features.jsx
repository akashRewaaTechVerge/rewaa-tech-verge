import React from 'react'
import './Features.css'
import eight from '../../images/shape/8.png'
import five from '../../images/shape/5.png'
import { FaAngular, FaLaptop, FaPlay } from 'react-icons/fa'
const Features = () => {
    return (
        <div>
            <section class="features-section">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-5 col-md-12">
                            <div class="features-content-area"><span>Care Features</span>
                                <h3>Create Awesome Service With Our Tools</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiod tempor incididunt ut
                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                    viverra maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry.</p>
                                <div class="features-btn"><a class="features-btn-one" href="features/index.html">More
                                    Details</a></div>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-12">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="single-features-item bg-f1eff8">
                                        <div class="icon"><i><FaPlay/></i></div>
                                        <h3>Seo Consultancy</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        </p>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="single-features-item bg-fbe6d4">
                                        <div class="icon"><i><FaAngular/></i></div>
                                        <h3>Competitor Analysis</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        </p>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="single-features-item bg-f0fffc">
                                        <div class="icon"><i><FaLaptop/></i></div>
                                        <h3>Social Media Marketing</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        </p>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="single-features-item bg-f8e1eb">
                                        <div class="icon"><i class="flaticon-analysis-1"></i></div>
                                        <h3>Competitor Analysis</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="features-animation">
                    <div class="shape-img1"><img src={eight} alt="image1" /></div>
                    <div class="shape-img2"><img src={five} alt="image1" /></div>
                </div>
            </section>
        </div>
    )
}

export default Features
