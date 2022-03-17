import React from 'react';
import { Slide } from 'react-slideshow-image';
import '../css/style.css';


function Mainslides() {

  const slideImages = [
    {
      url: 'https://res.cloudinary.com/archangel93/image/upload/c_scale,h_500,w_660/v1646904531/ABTS/Slides/IMG_4921_gozcia.jpg',
      text: 'some beautiful words describing the image',
      caption: 'First Slide'
    },
    {
      url: 'https://res.cloudinary.com/archangel93/image/upload/c_scale,h_500,w_660/v1646904479/ABTS/Slides/IMG_4930_nxtghj.jpg',
      text: 'some beautiful words describing the image',
      caption: 'Second Slide'
    },
    {
      url: 'https://res.cloudinary.com/archangel93/image/upload/c_scale,h_500,w_660/v1646904507/ABTS/Slides/IMG_4940_upeqqq.jpg',
      text: 'some beautiful words describing the image',
      caption: 'Third Slide'
    },
    {
      url: 'https://res.cloudinary.com/archangel93/image/upload/c_scale,h_500,w_660/v1646904504/ABTS/Slides/IMG_4941_km2jf7.jpg',
      text: 'some beautiful words describing the image',
      caption: 'Fourth Slide'
    },
    {
      url: 'https://res.cloudinary.com/archangel93/image/upload/c_scale,h_500,w_660/v1646904568/ABTS/Slides/IMG_4959_yr4gjd.jpg',
      text: 'some beautiful words describing the image',
      caption: 'Fifth Slide'
    },
    {
      url: 'https://res.cloudinary.com/archangel93/image/upload/c_scale,h_500,w_660/v1646904690/ABTS/Slides/IMG_4962_ymk4a5.jpg',
      text: 'some beautiful words describing the image',
      caption: 'Sixth Slide'
    },
    {
      url: 'https://res.cloudinary.com/archangel93/image/upload/c_scale,h_500,w_660/v1646904574/ABTS/Slides/IMG_4954_upkhjt.jpg',
      text: 'some beautiful words describing the image',
      caption: 'Seventh Slide'
    },
    {
      url: 'https://res.cloudinary.com/archangel93/image/upload/c_scale,h_500,w_660/v1646904513/ABTS/Slides/IMG_4950_o2r83p.jpg',
      text: 'some beautiful words describing the image',
      caption: 'Eighth Slide'
    },
  ];


  return (
    <div className="slide-container">
      <Slide>
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
      </Slide>
    </div>
  )
}




export default Mainslides