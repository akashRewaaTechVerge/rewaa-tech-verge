import React from 'react'

const Sidebar = () => {
    return (
        <div>
            <div className="sidebar-modal ">
            <div className="sidebar-modal-inner">
                <div className="sidebar-about-area">
                    <div className="title">
                        <h2>About Us</h2>
                        <p>We believe brand interaction is key to communication. Real innovations and positive customer
                            experience are the heart of successful communication. No fake products and services. The
                            customer is king, their lives and needs are the inspiration.</p>
                    </div>
                </div>
                <div className="sidebar-instagram-feed">
                    <h2>Instagram</h2>
                    <ul>
                        <li><a href="https://www.instagram.com/" ><img src="images/instagram-image/1.jpg"
                                    alt="image1" /></a></li>
                        <li><a href="https://www.instagram.com/" ><img src="images/instagram-image/2.jpg"
                                    alt="image1" /></a></li>
                        <li><a href="https://www.instagram.com/" ><img src="images/instagram-image/3.jpg"
                                    alt="image1" /></a></li>
                        <li><a href="https://www.instagram.com/" ><img src="images/instagram-image/4.jpg"
                                    alt="image1" /></a></li>
                        <li><a href="https://www.instagram.com/" ><img src="images/instagram-image/5.jpg"
                                    alt="image1" /></a></li>
                        <li><a href="https://www.instagram.com/" ><img src="images/instagram-image/6.jpg"
                                    alt="image1" /></a></li>
                        <li><a href="https://www.instagram.com/" ><img src="images/instagram-image/7.jpg"
                                    alt="image1" /></a></li>
                        <li><a href="https://www.instagram.com/" ><img src="images/instagram-image/8.jpg"
                                    alt="image1" /></a></li>
                    </ul>
                </div>
                <div className="sidebar-contact-area">
                    <div className="contact-info">
                        <div className="contact-info-content">
                            <h2><span className="info">+088 130 629 8615</span><span className="or">OR</span><span
                                    className="info"><a href="cdn-cgi/l/email-protection.html" className="__cf_email__"
                                        data-cfemail="afc6c1c9c0efc1cacac2c081ccc0c2">[email&#160;protected]</a></span>
                            </h2>
                            <ul className="social">
                                <li><a href="https://twitter.com/" ><i className="fab fa-twitter"></i></a>
                                </li>
                                <li><a href="https://www.youtube.com/" ><i
                                            className="fab fa-youtube"></i></a></li>
                                <li><a href="https://www.facebook.com/" ><i
                                            className="fab fa-facebook-f"></i></a></li>
                                <li><a href="https://www.linkedin.com/" ><i
                                            className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="https://www.instagram.com/" ><i
                                            className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div><span className="close-btn sidebar-modal-close-btn"><i className="fas fa-times"></i></span>
            </div>
        </div>
        </div>
    )
}

export default Sidebar
