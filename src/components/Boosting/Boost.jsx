import React, { useState } from 'react'
import { FaReact, FaSearch, FaApple, FaAndroid, FaPhp, FaNode } from 'react-icons/fa'

import { BiMessageCheck } from 'react-icons/bi'
import './Boost.css'
import { RiTeamLine } from 'react-icons/ri'
import tabShape from '../../images/tab/shape.png'
import { androidData, boostData, iosData } from '../../data/boostData'
import { HashLink as Link } from 'react-router-hash-link'
const Boost = () => {
    const [tab, setTab] = useState('Ios');
    const handleClick = (e) => {
        setTab({
            tab: e.target.id
        })
    }

    return (
        <div>
            <section className="tab-section" id='boost'>
                <div className="container">
                    <div className="section-title"><span>We Are Hiring</span>
                        <h3>Join Our Squad</h3>
                    </div>
                    <div className="tab boosting-list-tab">
                        <ul className="tabs">
                            <li className="current"><Link to="/#ios"><i><FaApple /></i><span>Ios</span></Link></li>
                            <li className="bg-eff7e9"><Link to="/#android"><i><FaAndroid /></i><span>Android</span></Link></li>
                            <li className="bg-fff8f0"><i><FaNode /></i><span>MERN Stack</span>
                            </li>
                            <li className="bg-ecfaf7"><i><FaPhp /></i><span>Php</span></li>
                            <li className="bg-f2f0fb"><i><BiMessageCheck /></i><span>Quality Assurance</span></li>
                            <li className="bg-c5ebf9"><i><RiTeamLine /></i><span>BDE/BDM</span></li>
                        </ul>
                        <div className="tab_content">
                            {
                                iosData.map((data, key) => {
                                    return (
                                        <>
                                            <div id="android" className="tabs_item">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-5">
                                                        <div className="tab-image"><img src={data.tab1Img} alt="image1" /></div>
                                                    </div>
                                                    {console.log(tab+"tab")}
                                                    <div className="col-lg-7">
                                                        <div className="content">
                                                            <h2>{data.title}</h2>
                                                            <p>{data.desc}</p>
                                                            <p>{data.desc1}</p>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6">
                                                                <div className="tab-text-content">
                                                                    <div className='list-skill' dangerouslySetInnerHTML={{ __html: data["leftDesc"] }}></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6">
                                                                <div className="tab-text-content">
                                                                    <div className='list-skill' dangerouslySetInnerHTML={{ __html: data["rightDesc"] }}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tab-btn"><a className="default-btn-one"
                                                            href="single-service/index.html">{data.btnTitle}</a></div>
                                                    </div>
                                                </div>
                                                <div className="tab-shape"><img src={tabShape} alt="image1" /></div>
                                            </div>
                                        </>

                                    )
                                })
                            }
                            
                            {
                                androidData.map((data, key) => {
                                    return (
                                        <>
                                            <div id={data.tabName} className="tabs_item">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-5">
                                                        <div className="tab-image"><img src={data.tab1Img} alt="image1" /></div>
                                                    </div>
                                                    {console.log(tab+"tab")}
                                                    <div className="col-lg-7">
                                                        <div className="content">
                                                            <h2>{data.title}</h2>
                                                            <p>{data.desc}</p>
                                                            <p>{data.desc1}</p>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6">
                                                                <div className="tab-text-content">
                                                                    <div className='list-skill' dangerouslySetInnerHTML={{ __html: data["leftDesc"] }}></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6">
                                                                <div className="tab-text-content">
                                                                    <div className='list-skill' dangerouslySetInnerHTML={{ __html: data["rightDesc"] }}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tab-btn"><a className="default-btn-one"
                                                            href="single-service/index.html">{data.btnTitle}</a></div>
                                                    </div>
                                                </div>
                                                <div className="tab-shape"><img src={tabShape} alt="image1" /></div>
                                            </div>
                                        </>

                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Boost
