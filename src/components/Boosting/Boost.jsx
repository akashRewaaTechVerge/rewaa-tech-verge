import React, { useState } from 'react'
import { FaReact, FaSearch, FaApple, FaAndroid, FaPhp, FaNode } from 'react-icons/fa'

import { BiMessageCheck } from 'react-icons/bi'
import './Boost.css'
import { RiTeamLine } from 'react-icons/ri'
import tabShape from '../../images/tab/shape.png'
import { boostData } from '../../data/boostData'
import mern from '../../images/lang/big/mern_icon.png'
import { HashLink as Link } from 'react-router-hash-link'
const Boost = () => {
    const [activeTab, setActiveTab] = useState('ios');
    const tabId = {
        ios: 'ios',
        android: 'android',
        mernStack:'mern',
        php:'Php',
        quality:'quality',
        bde:'bde'
    }

    const TabContent = ({ activeTab }) => {
        const activeTabData = boostData.find(d => d.tabName === activeTab)

        return <div className="tab_content">
            {
                activeTabData ? <div id={activeTabData.tabName} className="tabs_item">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="tab-image"><img src={activeTabData.tab1Img} alt="image1" /></div>
                        </div>
                        <div className="col-lg-7">
                            <div className="content">
                                <h2>{activeTabData.title}</h2>
                                <p>{activeTabData.desc}</p>
                                <p>{activeTabData.desc1}</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="tab-text-content">
                                        <div className='list-skill' dangerouslySetInnerHTML={{ __html: activeTabData["leftDesc"] }}></div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="tab-text-content">
                                        <div className='list-skill' dangerouslySetInnerHTML={{ __html: activeTabData["rightDesc"] }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-btn"><a className="default-btn-one"
                                href={activeTabData.mailTo}>{activeTabData.btnTitle}</a></div>
                        </div>
                    </div>
                    <div className="tab-shape"><img src={tabShape} alt="tabFooter" /></div>
                </div>
                    : <div >
                        <p>No Tab Content Found</p>
                    </div>
            }

        </div>
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


                            <li className={activeTab===tabId.ios?"current":""} id={tabId.ios} onClick={() => setActiveTab(tabId.ios)} ><i><FaApple /></i><span>Ios</span></li>
                            <li className={activeTab===tabId.android?"current":"bg-eff7e9"} id={tabId.android} onClick={() => setActiveTab(tabId.android)}><i><FaAndroid /></i><span>Android</span></li>
                            <li className={activeTab===tabId.mernStack?"current":"bg-fff8f0"} id={tabId.mernStack} onClick={() => setActiveTab(tabId.mernStack)} ><img src='https://cutecdn.codingdojo.com/svg_images/curriculum/mern_icon.svg' alt='mern' width={50} height={50}></img><span>MERN Stack</span>
                            </li>
                            <li className={activeTab===tabId.php?"current":"bg-ecfaf7"} id={tabId.php} onClick={() => setActiveTab(tabId.php)} ><i><FaPhp /></i><span>Php</span></li>
                            <li className={activeTab===tabId.quality?"current":"bg-f2f0fb"} id={tabId.quality} onClick={() => setActiveTab(tabId.quality)} ><i><BiMessageCheck /></i><span>Quality Assurance</span></li>
                            <li className={activeTab===tabId.bde?"current":"bg-c5ebf9"} id={tabId.bde} onClick={() => setActiveTab(tabId.bde)} ><i><RiTeamLine /></i><span>BDE/BDM</span></li>


                        </ul>
                        <TabContent activeTab={activeTab} />

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Boost
