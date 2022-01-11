import React from 'react'
import two from '../../images/shape/2.png'
import fourteen from '../../images/shape/14.png'
import fifteen from '../../images/shape/15.png'
import thirteen from '../../images/shape/13.svg'
import twel from '../../images/shape/12.svg'
import './Service.css'
import { serviceData } from '../../data/serviceData';
const Service = () => {
    return (
        <div>
            <section className="services-section pt-100 pb-70" id="service">
                <div className="container">
                    <div className="section-title"><span>Services</span>
                        <h3>How We Can Help?</h3>
                    </div>
                    <div className="row">
                        {
                            serviceData.map((data,key)=>{
                                return(
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className={`icon ${data.cartColor}`}><i>{data.serviceIcon}</i></div>
                                <h3><a href="single-service/index.html">{data.title}</a></h3>
                                <p>{data.desc}</p>
                            </div>
                        </div>
                                )
                            })
                        }
                        
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
