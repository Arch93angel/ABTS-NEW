import React, { useState } from 'react';
import './contact.css';


function Contact() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()


    return (
        <div>
            <div className='contact-card row'>
                <div className='col-lg-6 col-md-5 col-sm-12 left-contact px-2 py-2'>
                    <span className='get-in-touch mx-4 my-5'>
                        Get in touch with us...
                    </span>
                    <div className='py-5 d-flex justify-content-center'>
                        <lottie-player
                            src='https://assets5.lottiefiles.com/packages/lf20_sxk2ofvv.json'
                            background='transparent'
                            speed='1'
                            style={{ width: '300px', height: '300px' }}
                            loop
                            autoplay
                        ></lottie-player>

                    </div>
                </div>
                <div className='col-lg 6 col-md-5 col-sm-12 my-auto'>
                    <div className='d-flex flex-column card-contact-right'>
                        <div className='input-group my-3 d-flex flex-column'>
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder='Enter your name'
                                className='input-group'
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value)
                                }} />
                        </div>
                        <div className='input-group my-3 d-flex flex-column'>
                            <label>Email</label>
                            <input
                                type="text"
                                placeholder='your@email.com'
                                className='input-group'
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }} />
                        </div>
                        <div className='input-group my-3 d-flex flex-column'>
                            <label>Message</label>
                            <textarea
                                type="text"
                                placeholder='Write your message'
                                className='input-group'
                                value={message}
                                onChange={(e) => {
                                    setMessage(e.target.value)
                                }} />
                        </div>
                        <div className='input-group my-3 d-flex flex-column'>
                            <button className='btn btn-success'>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact