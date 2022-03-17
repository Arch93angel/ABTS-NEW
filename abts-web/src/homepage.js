import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import './App.css';
import Production from './objectives/production';
import Business from './objectives/business';
import Management from './objectives/management';
import Marketing from './objectives/marketing';
import Contact from './contact';
import Mainslides from './slides/mainslides';
import Features from './features';
import Aboutslides from './slides/aboutslides';
import { Link } from 'react-router-dom';




function Homepage() {
    const [production, setProduction] = useState(true);
    const [business, setBusiness] = useState(false);
    const [management, setManagement] = useState(false);
    const [marketing, setMarketing] = useState(false);

    function SetAllFalse() {
        setProduction(false);
        setBusiness(false);
        setManagement(false);
        setMarketing(false);
    }

    function ChangeState(function1, state1) {
        SetAllFalse();
        function1(state1);
    }

    return (
        <div className="App">

            <div className='App-main px-10 py-5'>
                <nav className='d-flex flex-row justify-content-between' id='home'>
                    <div className='logo'>
                        <img src="https://res.cloudinary.com/archangel93/image/upload/v1646815446/ABTS/logo/balance_of_trade_pqrrzs.png" alt="ABTS" height={"50px"} width={'150px'} />
                    </div>
                    <div className='logo'>
                        <img src="https://res.cloudinary.com/archangel93/image/upload/v1646814133/ABTS/logo/immilogo-removebg-preview_xprmws.png" alt="IMMI" height={"50px"} width={'50px'} />
                    </div>
                    <div className='logo'>
                        <img src="https://res.cloudinary.com/archangel93/image/upload/v1646815443/ABTS/logo/Craft_f9zvrz.png" alt="CRATF" height={"50px"} width={'50px'} />
                    </div>
                    <div className='logo'>
                        <img src="https://res.cloudinary.com/archangel93/image/upload/v1646815443/ABTS/logo/morocco_wflhyc.png" alt="KOM" height={"50px"} width={'50px'} />
                    </div>
                    <div className='logo'>
                        <img src="https://res.cloudinary.com/archangel93/image/upload/v1646815443/ABTS/logo/fee_min_of_trade_ay48nl.png" alt="FMOT" height={"50px"} width={'50px'} />
                    </div>
                    <span className='brand-name'></span>
                    <div className='d-flex flex-row px-2 py-1'>
                        <a href="#home" className='mx-4 nav-items'>Home</a>
                        <a href="#aboutus" className='mx-4 nav-items'>About Us</a>
                        <a href="#objectives" className='mx-4 nav-items'>Objectives</a>
                        <a href="#features" className='mx-4 nav-items'>Partners</a>
                        <a href="#blog" className='mx-4 nav-items'>Blog</a>
                        <a href="#contact" className='mx-4 nav-items'>Contact Us</a>
                    </div>
                </nav>
                <div className='App-main-2 row justify-content-center'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='d-flex flex-column justify-content-center Main-text-section'>
                            <span className='Main-text'>
                                Welcome to
                            </span>
                            <span className='name-Main-text py-2'>African Balance of Trade Summit </span>
                            <span className='Main-text-subtitle'>
                                Delivering a strategic platform for Africa business<br />"MAXIMIZING TRADE INFORMATION IN <b>AFCTA</b> OPERATIONS"

                            </span>
                            <div className='d-flex flex-row justify-content-center mt-5'>

                                <Popup trigger={<button className='btn-get-magazine'>
                                    <Link to={'/login'}>
                                        SIGN IN
                                    </Link>
                                </button>} position="left center">

                                </Popup>
                                <Popup trigger={<button className='btn-get-started'>
                                    <Link to={'/register'}>
                                        GET STARTED
                                    </Link>
                                </button>} position="right center">
                                </Popup>

                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='d-flex justify-content-center custom-div-outer-img carousel-item'>
                            <Mainslides />
                        </div>
                    </div>
                    <br />
                    <br />


                </div>
            </div>
            <div className='about-section about-inside my-5'>
                <div className='d-flex flex-column'>
                    <span className='about-text' id='aboutus'>About Us</span>
                    <span className='why-text'>Why Us..?</span>
                    <div className='row justify-content-center shadow-lg my-3'>
                        <div className='col-lg-6 col-md-6 col-sm-12 d-flex align-item-center justify-content-center'>
                            <Aboutslides />

                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column'>
                            <span className='some-text-about'>
                                We are pleased to introduce the <span className='some-text-about-title'>African Balance of Trade Summit</span> to you. It is a special event where African Trade and export agencies meet with African private sector players on a common ground to review and explore opportunities in expanding windows of engagement towards expanding Intra African Trade.
                            </span>
                            <span className='few-highlights'>
                                <span className='few-text'>EVENTS FEATURES.</span>
                                <span className='few-list'>
                                    <ul>
                                        <li>The Award of Fellowship of the institute</li>
                                        <li>Partnership and Collaboration with</li>
                                        <li>Digital Marketing</li>
                                        <li>Workshops for blah</li>
                                        <li>Data Management Workshop</li>
                                        <li>Some Points</li>
                                    </ul>
                                </span>
                                <button className='btn-more-info'>More Info</button>
                            </span>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>

            <div className='objective-outer-section d-flex flex-column'>
                <span className='about-text' id='objectives'>Objectives</span>
                <span className='why-text'>Our Core Objectives...</span>
                <div className='objective-section d-flex flex-row' style={{ width: '70%', marginInline: 'auto', height: '400px' }}>
                    <div className='col-lg-4 col-md-4 objective-left-section d-flex  px-0 shadow-lg flex-row'>
                        <div className='d-flex flex-column bg-new text-white'>
                            <span className='icon-span'>
                                <i class="fa-solid fa-tractor fa-beat"></i>{""}
                            </span>
                            <span className='icon-span'>
                                <i class="fa-solid fa-briefcase fa-beat"></i>{""}
                            </span>
                            <span className='icon-span'>
                                <i class="fa-solid fa-bars-progress fa-beat"></i>{""}
                            </span>
                            <span className='icon-span'>
                                <i class="fa-solid fa-bullhorn fa-beat"></i>{""}
                            </span>
                        </div>
                        <div className="d-flex flex-column">
                            <span className={production === false ? "objective-item" : "selected objective-item"} onClick={() => {
                                ChangeState(setProduction, true);
                            }} >Production{""}</span>
                            <span className={business === false ? "objective-item" : "selected objective-item"} onClick={() => {
                                ChangeState(setBusiness, true);
                            }} >Business{""}</span>
                            <span className={management === false ? "objective-item" : "selected objective-item"} onClick={() => {
                                ChangeState(setManagement, true);
                            }} >Management{""}</span>
                            <span className={marketing === false ? "objective-item" : "selected objective-item"} onClick={() => {
                                ChangeState(setMarketing, true);
                            }} >Marketing{""}</span>
                        </div>
                    </div>
                    <div className='col-lg-12 col-md-12 objective-right-section'>
                        {production === true && <Production />}
                        {business === true && <Business />}
                        {management === true && <Management />}
                        {marketing === true && <Marketing />}
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className='features-part my-5'>
                <div className='feature-inner-section d-flex flex-column'>
                    <span className='about-text' id='features'>Partners</span>
                    <span className='why-text'>We are featured by...</span>
                    <Features />
                </div>
            </div>
            <br />
            <br />
            <div className='contact-outer-section'>
                <div className='relative-bg'></div>
                <div className='contact-inner-section d-flex flex-column'>
                    <span className='about-text' id='contact'>Contact Us</span>
                    <span className='why-text mb-5'>For inquiry kindly leave us a message...</span>
                    <Contact />
                </div>
            </div>
            <div className='feature-outer-section d-flex flex-column'>
                <span className='about-text' id='blog'>Blog</span>
                <span className='why-text'>Latest Updates...</span>
                <br />
                <br />
            </div>
            <br />
            <br />
            <br />
            <div className='footer-outer-section d-flex flex-column justify-content-center footer-bg'>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className='office-address col-lg-6 col-md-6 col-sm-12'>
                    <span className='d-flex flex-column'>
                        <span className='address-icon-span'>Office address :</span>
                        <span className='address-icon-span'>Mail Box :</span>
                        <span className='address-icon-span'>Email :</span>
                        <span className='address-icon-span'>Phone Number :</span>
                    </span>
                </div>
                <div className='social-media d-flex flex-row justify-content-center text-white'>
                    <span className='social-media-name'><i class="fa-brands fa-facebook-square fa-beat"></i>Facebook</span>
                    <span className='social-media-name'><i class="fa-brands fa-twitter fa-beat"></i>Twitter</span>
                    <span className='social-media-name'><i class="fa-brands fa-instagram-square fa-beat"></i>Instagram</span>
                    <span className='social-media-name'><i class="fa-brands fa-linkedin fa-beat"></i>LinkedIn</span>
                </div>
                <div className='copy-right text-white'>
                    <span> <span className='copy-right-icon'>&copy;</span>African Balance of Trade Summit..</span>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
