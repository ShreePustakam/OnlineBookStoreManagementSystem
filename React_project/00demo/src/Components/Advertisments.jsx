import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imageLibrary from '../adsImagesArr';
import '../Styles/adsImagesStyle.css';

function Advertisments() {
  return (
    <Carousel fade>
        {
        imageLibrary.map((e) => {
            return(
            <Carousel.Item>
                <img className="ads-img" src={e.src} alt="" />
            </Carousel.Item>
            )
        })
        }
    </Carousel>
  );
}

export default Advertisments;