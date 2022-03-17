import React from 'react';
import { Zoom } from 'react-slideshow-image';
import '../css/style.css';


function Aboutslides() {

    const slideImages = [
        {
            url: 'https://res.cloudinary.com/archangel93/image/upload/c_scale,h_550/v1646914399/ABTS/Web/FLYER_1_wfggq3.png',
            caption: 'First Slide'
        },
        {
            url: 'https://res.cloudinary.com/archangel93/image/upload/c_scale,h_550,w_690/v1646914398/ABTS/Web/flyer_2_dqyfzg.png',
            caption: 'Second Slide'
        },
        {
            url: 'https://res.cloudinary.com/archangel93/image/upload/c_scale,h_550,w_690/v1646914398/ABTS/Web/FLYER_3_ny8kuw.png',
            caption: 'Third Slide'
        },
    ];


    return (
        <div className="slide-container">
            <Zoom>
                {slideImages.map((slideImage, index) => (
                    <div className="each-slide" key={index}>
                        <div className="image-container" style={{ position: 'absolute' }}>
                            <img src={slideImage.url} alt='slide images' />
                            <div className="bottom-left text-white">
                                <h2>{slideImage.caption}</h2>
                                <h4>{slideImage.text}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </Zoom>
        </div>
    )
}




export default Aboutslides