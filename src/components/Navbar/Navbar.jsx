import React from 'react'
import logo from '../../images/logoRound.jpg'
import './Navbar.css';
import { FaSearch } from 'react-icons/fa'
import { MdOutlineContactPage } from 'react-icons/md'
import { RiCustomerService2Line, RiHome2Line } from 'react-icons/ri'
import { FiPocket, FiInfo } from 'react-icons/fi'
import { useState, useEffect } from 'react';
import { CSSReset, MobileNavbar, Styles } from '../../components/Mobile/Mobile';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [windowDimension, setWindowDimension] = useState(null);
    useEffect(() => {
        setWindowDimension(window.innerWidth);
    }, []);

    useEffect(() => {
        function handleResize() {
            setWindowDimension(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = windowDimension <= 640;
    const active={
        color:'#2babe3'
    }

    return (
        <Styles.Wrapper>
            <CSSReset />
            <div>
                <div id="navbar" className="navbar-area is-sticky">
                    <div className="neemo-nav">
                        <div className="container">
                            {
                                isMobile ?
                                    <MobileNavbar.Wrapper>
                                        <MobileNavbar.Items>
                                            <NavLink to="/#" smooth={true} spy='true' duration={2000}>
                                                <MobileNavbar.Item>
                                                    <MobileNavbar.Icon>
                                                        <RiHome2Line size={16} />
                                                    </MobileNavbar.Icon>
                                                    Home
                                                </MobileNavbar.Item>
                                            </NavLink>
                                            <NavLink to="/#service" smooth={true} spy='true' duration={2000}>
                                                <MobileNavbar.Item>
                                                    <MobileNavbar.Icon>
                                                        <RiCustomerService2Line size={16} />
                                                    </MobileNavbar.Icon>
                                                    Service
                                                </MobileNavbar.Item>
                                            </NavLink>
                                            <NavLink to="/#Contact" smooth={true} spy='true' duration={2000}>
                                            <MobileNavbar.Item>
                                                <MobileNavbar.Icon>
                                                    <MdOutlineContactPage size={16} />
                                                </MobileNavbar.Icon>
                                                Contact
                                            </MobileNavbar.Item>
                                            </NavLink>
                                            <NavLink to="/Career" smooth={true} spy='true' duration={2000}>
                                            <MobileNavbar.Item>
                                                <MobileNavbar.Icon>
                                                    <FiPocket size={16} />
                                                </MobileNavbar.Icon>
                                                Career
                                            </MobileNavbar.Item>
                                            </NavLink>
                                            <NavLink to="/#WhoAreWe" smooth={true} spy='true' duration={2000}>
                                            <MobileNavbar.Item>
                                                <MobileNavbar.Icon>
                                                    <FiInfo size={16} />
                                                </MobileNavbar.Icon>
                                                WhoAreWe
                                            </MobileNavbar.Item>
                                            </NavLink>
                                        </MobileNavbar.Items>
                                    </MobileNavbar.Wrapper>
                                    :
                                    <nav className="navbar navbar-expand-md navbar-light"><a className="navbar-brand" href="index.html" style={{ display: 'inline-block' }}><img
                                        src={logo} alt="logo" style={{ width: 'auto', height: '60px', marginRight: '5px', float: 'left' }} /><span style={{ float: 'right', marginRight: '15px', marginTop: '5px', fontWeight: '600', fontSize: '2rem' }}>Rewaa<div style={{ float: 'revert', margin: '-10%', textAlign: 'center' }}>TechVerge</div></span></a>
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav ">
                                                <li className="nav-link "><NavLink to="/#" activeClassName='nav-item' activeStyle={active} smooth={true} spy='true' duration={2000} > Home</NavLink></li>
                                                <li className="nav-link "><NavLink to="/#service" activeClassName='nav-item' smooth={true} spy='true' duration={2000} >Services </NavLink></li>
                                                <li className="nav-link"><NavLink to="/#Contact" activeClassName='nav-item' smooth={true} spy='true' duration={2000} >Contact</NavLink></li>
                                                <li className="nav-link"><NavLink to="/Career" activeClassName='nav-item' smooth={true} spy='true' duration={2000} >Career</NavLink></li>
                                                <li className="nav-link"><NavLink to="/#wrw" activeClassName='nav-item' smooth={true} spy='true' duration={2000} >Who Are We</NavLink>
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
                            }

                        </div>
                    </div>
                </div>
            </div>
        </Styles.Wrapper>
    )
}

export default Navbar
