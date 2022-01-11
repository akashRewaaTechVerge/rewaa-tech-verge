import React from 'react'
import './Testimonial.css'
import OwlCarousel from 'react-owl-carousel2';
import { MdFormatQuote } from 'react-icons/md'
import one from '../../images/client-image/4.jpg'
import { testimonialData } from '../../data/testimonialData';
const Testimonial = () => {
    const options = {
        items: 1,
        nav: false,
        rewind: true,
        loop: false,
        autoplay: true,
        dots: true,
        responsiveClass: true

    };
    return (
        <div>
            <section className="testimonial-section ptb-100" >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="testimonial-content-area"><span>Testimonial</span>
                                <h3>What Our Client Say</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                    viverra maecenas accumsan lacus.Lorem is simply dummy text of the printing and
                                    typesetting industry.</p>
                            </div>

                        </div>
                    </div>
                
                </div>
            </section>
            <div className="col col-md-4">

<OwlCarousel options={options} className="owl-theme">
    <div className='testimonial-slides'>
        {testimonialData.map((data, key) => {
            return (
                <div className="testimonial-single-item">
                    <div className='testimonial-image'>
                        <img src={data.profileImg} alt='myImage' />
                    </div>
                    <div className='testimonial-content-text'>
                        <h3>{data.name}</h3>
                        <span>{data.role}</span>
                        <div className='icon'>
                            <i><MdFormatQuote /></i>
                            <p>{data.desc}</p>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
</OwlCarousel>


</div>
        </div>
    )
}

export default Testimonial
