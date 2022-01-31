import React from 'react'
import './Team.css';
import { teamData } from '../../data/teamData';
import shape7 from '../../images/shape/7.png'
import shape9 from '../../images/shape/9.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
const Team = () => {
    return (
        <div>
            <section className="team-section pt-100 ">
                <div className="container">
                    <div className="section-title"><span>Team</span>
                        <h3>Meet Our Team</h3>
                    </div>
                    <div className="row justify-content-center">
                        {
                            teamData.map((data, key) => {
                                return (
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="team-item-area">
                                            <div className="team-image"><img src={data.teamImg} height={data.size} alt="image1" /></div>
                                            <div className="team-content">
                                                <h3>{data.name}</h3><span>{data.role}</span>
                                                <ul className="team-social">
                                                    <li><a href={data.social.linkdn} target='_blank'><i><FaLinkedinIn /></i></a></li>
                                                    <li><a href={data.social.facebook} target='_blank'><i><FaFacebookF /></i></a></li>
                                                    <li><a href={data.social.twitter} target='_blank'><i><FaTwitter /></i></a></li>
                                                    <li><a href={data.social.insta} target='_blank'><i><FaInstagram /></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="team-animation">
                    <div className="shape-img1"><img src={shape7} alt="image1" /></div>
                    <div className="shape-img2"><img src={shape9} alt="image2" /></div>
                    <div className="shape-img3"><img src={shape7} alt="image3" /></div>
                    <div className="shape-img4"><img src={shape9} alt="image4" /></div>
                    <div className="shape-img5"><img src={shape9} alt="image5" /></div>
                </div>
            </section>
        </div>
    )
}

export default Team
