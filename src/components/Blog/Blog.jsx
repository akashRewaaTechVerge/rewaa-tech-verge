import React from 'react'
import './Blog.css'
import { blogData } from '../../data/blogData'
import { FaComment } from 'react-icons/fa'
const Blog = () => {
    return (
        <div>
            <section className="blog-section pt-100 pb-70">
            <div className="container">
                <div className="section-title"><span>Blog</span>
                    <h3>Read Our Latest Project</h3>
                </div>
                <div className="row justify-content-center">
                  {
                    blogData.map((data,key)=>{
                        return(
                            <div className="col-lg-4 col-md-6">
                            <div className="blog-item">
                                <div className="blog-image"><a href="single-blog/index.html"><img src={data.blogImg}
                                            alt="image1" /></a></div>
                                <div className="single-blog-item">
                                    <ul className="date">
                                        <li>{data.date}</li>
                                        <li>{data.month}</li>
                                    </ul>
                                    <ul className="blog-list">
                                        <li><a href="blog/index.html"><i className="fa fa-user-alt"></i> {data.roleBy}</a></li>
                                        <li><i><FaComment/></i>{data.comment} Comments</li>
                                    </ul>
                                    <div className="blog-content"><a href="single-blog/index.html">
                                            <h3>{data.contentTitle}</h3>
                                        </a>
                                        <p>{data.contentParg}</p>
                                    </div>
                                    <div className="blog-btn"><a className="blog-btn-one" href="single-blog/index.html">Read
                                            More</a></div>
                                </div>
                            </div>
                        </div>
                        )
                    })
                  }
                    {/* <div className="col-lg-4 col-md-6">
                        <div className="blog-item">
                            <div className="blog-image"><a href="single-blog/index.html"><img src="images/blog/2.png"
                                        alt="image" /></a></div>
                            <div className="single-blog-item">
                                <ul className="date">
                                    <li>03</li>
                                    <li>January</li>
                                </ul>
                                <ul className="blog-list">
                                    <li><a href="blog/index.html"><i className="fa fa-user-alt"></i> By admin</a></li>
                                    <li><i className="far fa-comments"></i> 3 Comments</li>
                                </ul>
                                <div className="blog-content"><a href="single-blog/index.html">
                                        <h3>How To Boost Your Digital Marketing Agency</h3>
                                    </a>
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                        praesentium voluptatum deleniti</p>
                                </div>
                                <div className="blog-btn"><a className="blog-btn-one" href="single-blog/index.html">Read
                                        More</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div class="blog-item">
                            <div class="blog-image"><a href="single-blog/index.html"><img src="images/blog/3.png"
                                        alt="image" /></a></div>
                            <div class="single-blog-item">
                                <ul class="date">
                                    <li>03</li>
                                    <li>January</li>
                                </ul>
                                <ul class="blog-list">
                                    <li><a href="blog/index.html"><i class="fa fa-user-alt"></i> By admin</a></li>
                                    <li><i class="far fa-comments"></i> 3 Comments</li>
                                </ul>
                                <div class="blog-content"><a href="single-blog/index.html">
                                        <h3>Creative solutions to improve your business!</h3>
                                    </a>
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                        praesentium voluptatum deleniti</p>
                                </div>
                                <div class="blog-btn"><a class="blog-btn-one" href="single-blog/index.html">Read
                                        More</a></div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        </div>
    )
}

export default Blog
