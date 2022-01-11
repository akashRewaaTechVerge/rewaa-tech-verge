import React from 'react'
import { About, Banner, ChooseUs,Features, Service, Boosting, Projects, Team, Testimonial, Analysis } from '../../components'

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
            <Analysis />
        </div>
    )
}

export default Main
