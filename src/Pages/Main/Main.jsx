import React from 'react'
import { About, Banner, ChooseUs, Features, Service, Boosting, Projects, Team, Testimonial, Contact } from '../../components'
import Work from '../../components/Work/Work'


const Main = () => {
    return (
        <div>

            <Banner />
            {/* <Features /> */}
            <About />
            <Service />
            <ChooseUs />
            <Boosting />
            <Projects />
            <Team />
            {/* <Testimonial /> */}
            <Contact />
  
        </div>
    )
}

export default Main
