import React from 'react'
import './About.css';
import about_image from '../../images/about-image.svg'
const About = () => {
    return (
        <div>
            <div class="pb-100 mt-5">
                <section class="about-section">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-12">
                                <div class="about-image"><img src={about_image} alt="image1" /></div>
                            </div>
                            <div class="col-lg-6 col-md-12">
                                <div class="about-area-content"><span>About Us</span>
                                    <h3>Turning Digital Dreams Into Digital Reality</h3><strong>Rewaa Tech Verge is an organization established to completing best projects with a
                                        team of enthusiastic and impeccably experienced professionals from the industry.
                                        We determine to stick to certain goals such as quality of work, trust-worthiness,
                                        better speed and accuracy.</strong>
                                    <p>With our agile, collaborative approach, we have provided tailored domain-specific
                                        IT solutions that have successfully resolved different business issues. Our deep
                                        expertise in Web development, Mobile app development, Custom software
                                        development,Quality Assurance and many more has helped
                                        us retain numerous clients for years.</p>
                                    <p>Rewaatechverge is an ideal  company for your needs. Right from ideation to
                                        execution, we have consistently delivered the competitive edge in the form of
                                        robust, fore-sighted, and qualitative solutions. Partner with us, and rest assured,
                                        you’ll know the difference!</p>
                                </div>
                                {/* <div class="row">
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
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About
