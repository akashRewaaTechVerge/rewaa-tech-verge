import React from 'react'
import logo from '../../images/logoRound.jpg'
import './Navbar.css';
import { FaPlus, FaSearch } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div>
            <div id="navbar" className="navbar-area is-sticky">
                <div className="neemo-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light"><a className="navbar-brand"  href="index.html" style={{display:'inline-block'}}><img
                                src={logo} alt="logo" style={{width:'auto',height:'60px',marginRight:'5px', float:'left'}} /><span style={{float:'right',marginRight:'10px',marginTop:'5px',fontWeight:'900'}}>Rewaa<div style={{float:'revert',margin:'-10%',textAlign:'center'}}>TechVerge</div></span></a><button
                                className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation"><span
                                    className="icon-bar top-bar"></span><span className="icon-bar middle-bar"></span><span
                                        className="icon-bar bottom-bar"></span></button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><a className="nav-link" href="index.html">Home </a></li>
                                    <li className="nav-item"><a className="nav-link" href="index.html#">Services </a>
                                       
                                       </li>
                                       <li className="nav-item"><a className="nav-link" href="contact/index.html">Contact</a></li>
                                    <li className="nav-item"><a className="nav-link" href="about-us/index.html">Career</a></li>
                                   
                                    <li className="nav-item"><a className="nav-link" href="index.html#">Who Are We</a>
                                    </li>
                                   
                                  
                                  
                                </ul>
                            </div>
                            <div className="others-options">
                                <div className="option-item"><i className="search-btn" style={{ display: 'block' }}><FaSearch /></i><i
                                    className="close-btn fa fa-times "></i>
                                    <div className="search-overlay search-popup" style={{ display: 'none' }}>
                                        <div className="search-box">
                                            <form className="search-form"><input type="text" className="search-input" name="search"
                                                placeholder="Search" /><button className="search-button" type="submit"><i><FaSearch /></i></button></form>
                                        </div>
                                    </div>
                                </div>
                                <div className="burger-menu"><span></span><span></span><span></span></div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
