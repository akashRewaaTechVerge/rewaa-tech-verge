import React from 'react'
import './Projects.css'
import { projectData } from '../../data/projectData'
const Projects = () => {
    return (
        <div>
            <section className="project-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title"><span>Projects</span>
                        <h3>Our Projects For Client</h3>
                    </div>
                    <div className="row">
                        {projectData.map((pro, key) => {
                            return (
                                <div  className="col-lg-4 col-sm-6">
                                    <div key={key} className="single-project-box"><a href="single-project/index.html"><img
                                        src={pro.image} alt="image1" /></a>
                                        <div className="project-hover-content">
                                            <h3><a href="single-project/index.html">{pro.title}</a></h3>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects