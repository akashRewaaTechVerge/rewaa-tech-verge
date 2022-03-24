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
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Navbar = () => {
    const [windowDimension, setWindowDimension] = useState(null);
    useEffect(() => {
        setWindowDimension(window.innerWidth);
    }, []);


    const router = useLocation().hash;
    console.log(router);
    const pathName = useLocation().pathname;
    useEffect(() => {
        function handleResize() {
            setWindowDimension(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = windowDimension <= 640;

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
                                            <NavLink to="/#service" className={pathName === "#service" ? 'active' : 'inactive'} smooth={true} spy='true' duration={2000}>
                                                <MobileNavbar.Item>
                                                    <MobileNavbar.Icon>
                                                        <RiCustomerService2Line size={16} />
                                                    </MobileNavbar.Icon>
                                                    Service
                                                </MobileNavbar.Item>
                                            </NavLink>
                                            <Link to="/Contact" smooth={true} spy='true' duration={2000}>
                                                <MobileNavbar.Item>
                                                    <MobileNavbar.Icon>
                                                        <MdOutlineContactPage size={16} />
                                                    </MobileNavbar.Icon>
                                                    Contact
                                                </MobileNavbar.Item>
                                            </Link>
                                            <NavLink to="/#career" smooth={true} spy='true' duration={2000}>
                                                <MobileNavbar.Item>
                                                    <MobileNavbar.Icon>
                                                        <FiPocket size={16} />
                                                    </MobileNavbar.Icon>
                                                    Career
                                                </MobileNavbar.Item>
                                            </NavLink>
                                            <NavLink to="/#wrw" smooth={true} spy='true' duration={2000}>
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
                                    <nav className="navbar navbar-expand-md navbar-light"><NavLink className="navbar-brand" to="/#" style={{ display: 'inline-block' }}><img
                                        src={logo} alt="logo" style={{ width: 'auto', height: '60px', marginRight: '5px', float: 'left' }} /><span style={{ float: 'right', marginRight: '15px', marginTop: '5px', fontWeight: '600', fontSize: '2rem' }}>Rewaa<div style={{ float: 'revert', margin: '-10%', textAlign: 'center' }}>TechVerge</div></span></NavLink>
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav ">
                                                <li className="my-link"><NavLink to="/#" className={pathName === "/#" ? 'active' : 'inactive'} smooth={true} spy='true' duration={2000} > Home</NavLink></li>
                                                <li className="my-link"><NavLink to="/#service" className={router === "#service" ? 'active' : 'inactive'} smooth={true} spy='true' duration={2000} >Services </NavLink></li>
                                                <li className="my-link"><Link to="/Contact" className={pathName === "/Contact" ? 'active' : 'inactive'} smooth={true} spy='true' duration={2000} >Contact</Link></li>
                                                <li className="my-link"><NavLink to="/#career" className={router === "#career" ? 'active' : 'inactive'} smooth={true} spy='true' duration={2000} >Career</NavLink></li>
                                                <li className="my-link"><NavLink to="/#wrw" className={router === "#wrw" ? 'active' : 'inactive'} smooth={true} spy='true' duration={2000} >Who Are We</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='others-options'>
                                            <div className="burger-menu"><div className="banner-btn"><NavLink className="default-btn-one" to="/#boost">
                                                We Are Hiring</NavLink>
                                                {/* <div className="video-btn popup-youtube">Watch Video <i><FaPlay/></i></div> */}
                                            </div></div>
                                        </div>
                                        {/* <div className="others-options">
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
                                        </div> */}
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
