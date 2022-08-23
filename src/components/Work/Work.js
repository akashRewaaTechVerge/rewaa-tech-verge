import React from 'react'
import zylo from '../../images/workfolio/zylo.png'
import myOffice from '../../images/workfolio/myOffice.png'
import weDance from '../../images/workfolio/weDance.png'
import foodStuff from '../../images/workfolio/foodStuff.png'
import petCure from '../../images/workfolio/petCure.png'
import ViewCaseStudy from '../commonButton/ViewCaseStudy'
import HeadingBar from '../../images/workfolio/heading.png'
import './Work.css'
function Work() {
    return (
        <div >
            <div className='container mt-100' style={{ background: 'white' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '60%', marginBottom: '20px' }}>
                        <img src={HeadingBar} alt="heading"/>
                    </div>
                    <div className='img_container'>
                        <img src={zylo} className='mb-50' alt="zylo" />
                        <ViewCaseStudy link="https://rewaatechverge.com/work/Ecommerce.pdf" color="#8B0300" />
                    </div>
                    <div className='img_container'>
                        <img src={myOffice} className='mb-50' alt="office" />
                        <ViewCaseStudy link="https://rewaatechverge.com/work/MyOffice.pdf" color="#1362DE" />
                    </div>
                    <div className='img_container'>
                        <img src={weDance} className='mb-50' alt="weDance" />
                        <ViewCaseStudy color="#F1023D" link="https://rewaatechverge.com/work/WeDance.pdf" />
                    </div>
                    <div className='img_container'>
                        <img src={foodStuff} className='mb-50' alt="food" />
                        <ViewCaseStudy color="#8B0300" link="https://rewaatechverge.com/work/FoodApp.pdf" />
                    </div>
                    <div className='img_container'>
                        <img src={petCure} className='mb-50'  alt="petcure"/>
                        <ViewCaseStudy color="#0938DF" link="https://rewaatechverge.com/work/PetCure.pdf" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Work