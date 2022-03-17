import React from 'react'
import './features.css';

function Features() {
  const features = [
    {
      url: 'https://res.cloudinary.com/archangel93/image/upload/v1646904531/ABTS/Slides/IMG_4921_gozcia.jpg',
      text: 'lorem ipsom ipsom lorem lorem ipsom ipsom lorem lorem ipsom ipsom lorem lorem ipsom ipsom lorem lorem ipsom ipsom lorem lorem ipsom ipsom lorem',
      caption: 'Information Marketing & Management Institute(IMMI)',
    },
    {
      url: 'https://res.cloudinary.com/archangel93/image/upload/v1646904605/ABTS/Slides/IMG_4957_jklotc.jpg',
      text: 'lorem ipsom ipsom lorem lorem ipsom ipsom lorem lorem ipsom ipsom lorem lorem ipsom ipsom lorem lorem ipsom ipsom lorem lorem ipsom ipsom lorem',
      caption: 'Centre for Research in African Trade Facilitation(CRAFT)',
    },
    {
      url: 'https://res.cloudinary.com/archangel93/image/upload/v1646904725/ABTS/Slides/IMG_4904_ngev9p.jpg',
      text: 'lorem ipsom ipsom lorem lorem ipsom ipsom lorem lorem ipsom ipsom lorem lorem ipsom ipsom lorem lorem ipsom ipsom lorem lorem ipsom ipsom lorem',
      caption: 'Federal Ministry of Trade & Investment(FMTI))',
    },
    {
      url: 'https://res.cloudinary.com/archangel93/image/upload/v1646184633/cld-sample.jpg',
      text: 'lorem ipsom ipsom lorem lorem ipsom ipsom lorem lorem ipsom ipsom lorem lorem ipsom ipsom lorem lorem ipsom ipsom lorem lorem ipsom ipsom lorem',
      caption: 'Kingdom of Morocco',
    },
  ];

  return <>
    <div>
      <div className='row mx-5'>
        {features.map((value) => {
          return <div className='col-lg-3 col-sm-12 col-md-6 my-3'>
            <div className='d-flex flex-column card-shadow feature-card'>
              <div className='partners-img justify-content-center'><img src={value.url} alt='Partners' height={'200px'} width={'270px'} /></div>
              <span className='description'>{value.text}</span>
              <span className='name'><h4>{value.caption}</h4></span>
            </div>

          </div>;
        })}

      </div>
    </div>
  </>
    ;


  // (

  //     // <div>
  //     //   <div className='row mx-5'>
  //     //     {features.map((feature) => {
  //     //       <div className='col-lg-4 col-sm-12 col-md-6'>
  //     //       <div className='card-shadow feature-card d-flex flex-column'>
  //     //         <span className='description'>{feature.text}</span>
  //     //         <span className='name'>
  //     //           <h2>{feature.caption}</h2>
  //     //         </span>
  //     //       </div>
  //     //       </div>
  //     //       })}
  //     //   </div>
  //     // </div>

  //   );
}


export default Features