import React from 'react'
import './About.css';
import about_image from '../../images/about-image.svg'
const About = () => {
    return (
        <div>
             <div class="pb-100">
            <section class="about-section">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-12">
                            <div class="about-image"><img src={about_image} alt="image1" /></div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="about-area-content"><span>About Us</span>
                                <h3>We are Dynamic Team of SEO Agency</h3><strong>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna
                                    aliqua.</strong>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                    gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem Ipsum is
                                    simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 col-6 col--6">
                                    <div class="single-fun-facts">
                                        <h3>1,165<span class="sign-icon">+</span></h3>
                                        <p>Project Completed</p>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-6 col-6">
                                    <div class="single-fun-facts">
                                        <h3>2,665<span class="sign-icon">+</span></h3>
                                        <p>Satisfied Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
    )
}

export default About
