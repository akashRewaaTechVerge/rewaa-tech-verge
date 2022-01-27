import React from 'react'
import './Banner.css'
import arrow from '../../images/saas-image/arrow.png'
import box1 from '../../images/saas-image/box1.png'
import boy1 from '../../images/saas-image/boy1.png'
import boy2 from '../../images/saas-image/boy2.png'
import boy3 from '../../images/saas-image/boy3.png'
import girl1 from '../../images/saas-image/girl1.png'
import girl2 from '../../images/saas-image/girl2.png'
import filter1 from '../../images/saas-image/filter1.png'
import filter2 from '../../images/saas-image/filter2.png'
import filter3 from '../../images/saas-image/filter3.png'
import seven from '../../images/saas-image/7.png'
import four from '../../images/saas-image/4.png'
import monitor from '../../images/saas-image/monitor.png'
import main_image from '../../images/saas-image/main-image.png'
import digital_screen from '../../images/saas-image/digital-screen.png'
import one from '../../images/shape/1.png'
import two from '../../images/shape/2.png'
import three from '../../images/shape/3.png'
import fourShape from '../../images/shape/4.png'
import five from '../../images/shape/5.png'
import six from '../../images/shape/6.png'
import ten from '../../images/shape/10.png'
import eleven from '../../images/shape/11.png'
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Banner = () => {
    return (
        <div>
            <div className="main-banner" id='/'>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="main-banner-content">
                                        <h1>"We Build A Better Future With Tech"</h1>
                                        <p>Want to work with us?</p>
                                        <div className="banner-btn"><NavLink className="default-btn-one" to="/#boost">
                                            We Are Hiring</NavLink>
                                            {/* <div className="video-btn popup-youtube">Watch Video <i><FaPlay/></i></div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="banner-image"><img src={arrow}
                                        className="animate__animated animate__fadeInLeft animate__delay-0.5s"
                                        alt="arrow" /><img src={box1}
                                            className="animate__animated animate__fadeInUp animate__delay-0.5s"
                                            alt="box1" /><img src={boy1}
                                                className="animate__animated animate__fadeInLeft animate__delay-0.5s"
                                                alt="boy1" /><img src={boy2}
                                                    className="animate__animated animate__zoomIn animate__delay-0.5s" alt="boy2" /><img
                                            src={boy3}
                                            className="animate__animated animate__bounceIn animate__delay-0.5s"
                                            alt="boy3" /><img src={digital_screen}
                                                className="animate__animated animate__fadeInDown animate__delay-0.5s"
                                                alt="digital-screen" /><img src={filter1}
                                                    className="animate__animated animate__zoomIn animate__delay-0.5s"
                                                    alt="filter1" /><img src={filter2}
                                                        className="animate__animated animate__fadeInUp animate__delay-0.5s"
                                                        alt="filter2" /><img src={filter3}
                                                            className="animate__animated animate__rotateIn animate__delay-0.5s"
                                                            alt="filter3" /><img src={girl1}
                                                                className="animate__animated animate__fadeInUp animate__delay-0.5s"
                                                                alt="girl1" /><img src={girl2}
                                                                    className="animate__animated animate__zoomIn animate__delay-0.5s" alt="girl2" /><img
                                            src={monitor}
                                            className="animate__animated animate__fadeInRight animate__delay-0.5s"
                                            alt="monitor" /><img src={four}
                                                className="animate__animated animate__zoomIn animate__delay-0.5s" alt="4" /><img
                                            src={seven}
                                            className="animate__animated animate__zoomIn animate__delay-0.5s" alt="7" /><img
                                            src={main_image}
                                            className="animate__animated animate__zoomIn animate__delay-0.5s"
                                            alt="main-image1" /></div>
                                </div>
                            </div>
                            {/* <div className="banner-bg-text">SEO</div> */}
                        </div>
                    </div>
                </div>
                <div className="shape-img1"><img src={one} alt="image1" /></div>
                <div className="shape-img2"><img src={two} alt="image2" /></div>
                <div className="shape-img3"><img src={three} alt="image3" /></div>
                <div className="shape-img4"><img src={fourShape} alt="image4" /></div>
                <div className="shape-img5"><img src={five} alt="image5" /></div>
                <div className="shape-img6"><img src={six} alt="image6" /></div>
                <div className="shape-img7"><img src={two} alt="image7" /></div>
                <div className="shape-img8"><img src={ten} alt="image8" /></div>
                <div className="shape-img9"><img src={seven} alt="image9" /></div>
                <div className="shape-img10"><img src={five} alt="image10" style={{ marginTop: "55%" }} /></div>
                <div className="shape-img11"><img src={eleven} alt="image11" /></div>
            </div>
        </div>
    )
}

export default Banner
