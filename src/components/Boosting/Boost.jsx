import React from 'react'
import { FaAngular, FaDigitalOcean, FaDigitalTachograph, FaFacebook, FaHandHoldingUsd, FaSearch, FaVoicemail } from 'react-icons/fa'
import './Boost.css'
import tabShape from '../../images/tab/shape.png'
import { boostData } from '../../data/boostData'
const Boost = () => {
    return (
        <div>
            <section className="tab-section">
                <div className="container">
                    <div className="section-title"><span>Boosting</span>
                        <h3>Outstanding Digital Experience</h3>
                    </div>
                    <div className="tab boosting-list-tab">
                        <ul className="tabs">
                            <li className="current"><i><FaAngular/></i><span>Real-Time-Analytics</span></li>
                            <li className="bg-eff7e9"><i><FaHandHoldingUsd/></i><span>Pay-Per-Click</span></li>
                            <li className="bg-fff8f0"><i><FaDigitalOcean/></i><span>Online Marketing</span>
                            </li>
                            <li className="bg-ecfaf7"><i><FaVoicemail/></i><span>Email Marketing</span></li>
                            <li className="bg-f2f0fb"><i><FaFacebook/></i><span>Social Marketing</span></li>
                            <li className="bg-c5ebf9"><i><FaDigitalTachograph/></i><span>Digital Marketing</span></li>
                        </ul>
                        <div className="tab_content">
                            {
                                boostData.map((data,ket)=>{
                                    return(
                                        <div id="tab1" className="tabs_item">
                                        <div className="row align-items-center">
                                            <div className="col-lg-5">
                                                <div className="tab-image"><img src={data.tab1Img} alt="image1" /></div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="content">
                                                    <h2>{data.title}</h2>
                                                    <p>{data.desc}</p>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="tab-text-content"><i><FaSearch/></i>
                                                            <p>{data.leftDesc}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="tab-text-content"><i><FaSearch/></i>
                                                            <p>{data.rightDesc}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-btn"><a className="default-btn-one"
                                                    href="single-service/index.html">{data.btnTitle}</a></div>
                                            </div>
                                        </div>
                                        <div className="tab-shape"><img src={tabShape} alt="image1" /></div>
                                    </div>
                                    )
                                })
                            }
                            {/* <div id="tab1" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image"><img src={tab} alt="image1" /></div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="content">
                                            <h2>Real-Time Analytics</h2>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered alteration in some form, by injected humour, or
                                                randomised words which don&#x27;t look even slightly believable. If you are
                                                going to use a passage of Lorem Ipsum, you need to be sure there isn&#x27;t
                                                anything embarrassing hidden in the middle of text.</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content"><i><FaSearch/></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content"><i><FaSearch/></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-btn"><a className="default-btn-one"
                                            href="single-service/index.html">Discover More</a></div>
                                    </div>
                                </div>
                                <div className="tab-shape"><img src={tabShape} alt="image" /></div>
                            </div>
                            <div id="tab2" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image"><img src="images/tab/2.jpg" alt="image" /></div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="content">
                                            <h2>Pay-Per Click</h2>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered alteration in some form, by injected humour, or
                                                randomised words which don&#x27;t look even slightly believable. If you are
                                                going to use a passage of Lorem Ipsum, you need to be sure there isn&#x27;t
                                                anything embarrassing hidden in the middle of text.</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content"><i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content"><i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-btn"><a className="default-btn-one"
                                            href="single-service/index.html">Discover More</a></div>
                                    </div>
                                </div>
                                <div className="tab-shape">
                                    <div className="tab-shape"><img src="images/tab/shape.png" alt="image" /></div>
                                </div>
                            </div>
                            <div id="tab3" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image"><img src="images/tab/3.jpg" alt="image" /></div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="content">
                                            <h2>Online Marketting</h2>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered alteration in some form, by injected humour, or
                                                randomised words which don&#x27;t look even slightly believable. If you are
                                                going to use a passage of Lorem Ipsum, you need to be sure there isn&#x27;t
                                                anything embarrassing hidden in the middle of text.</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content"><i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content"><i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-btn"><a className="default-btn-one"
                                            href="single-service/index.html">Discover More</a></div>
                                    </div>
                                </div>
                                <div className="tab-shape"><img src="images/tab/shape.png" alt="image" /></div>
                            </div>
                            <div id="tab4" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image"><img src="images/tab/4.jpg" alt="image" /></div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="content">
                                            <h2>Email Marketting</h2>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered alteration in some form, by injected humour, or
                                                randomised words which don&#x27;t look even slightly believable. If you are
                                                going to use a passage of Lorem Ipsum, you need to be sure there isn&#x27;t
                                                anything embarrassing hidden in the middle of text.</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content"><i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content"><i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-btn"><a className="default-btn-one"
                                            href="single-service/index.html">Discover More</a></div>
                                    </div>
                                </div>
                                <div className="tab-shape"><img src="images/tab/shape.png" alt="image" /></div>
                            </div>
                            <div id="tab5" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image"><img src="images/tab/5.jpg" alt="image" /></div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="content">
                                            <h2>Social Marketting</h2>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered alteration in some form, by injected humour, or
                                                randomised words which don&#x27;t look even slightly believable. If you are
                                                going to use a passage of Lorem Ipsum, you need to be sure there isn&#x27;t
                                                anything embarrassing hidden in the middle of text.</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content"><i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content"><i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-btn"><a className="default-btn-one"
                                            href="single-service/index.html">Discover More</a></div>
                                    </div>
                                </div>
                                <div className="tab-shape"><img src="images/tab/shape.png" alt="image" /></div>
                            </div>
                            <div id="tab6" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image"><img src="images/tab/6.jpg" alt="image" /></div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="content">
                                            <h2>Digital Marketting</h2>
                                            <p>There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered alteration in some form, by injected humour, or
                                                randomised words which don&#x27;t look even slightly believable. If you are
                                                going to use a passage of Lorem Ipsum, you need to be sure there isn&#x27;t
                                                anything embarrassing hidden in the middle of text.</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content"><i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content"><i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                        eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-btn"><a className="default-btn-one"
                                            href="single-service/index.html">Discover More</a></div>
                                    </div>
                                </div>
                                <div className="tab-shape"><img src={tabShape} alt="image" /></div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Boost
