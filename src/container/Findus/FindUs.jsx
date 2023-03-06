import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants';
import './FindUs.css';

const FindUs = () => (
  <div className='app__findus section__padding app__bg'>
    <div className='app__findus-text'>
      <div className='app__findus-text-header'>
        <div className='app__findus-text-header-heading'>
          <SubHeading text="Contact" />
          <h1 className='headtext__cormorant'>Find Us</h1>
          <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        </div>
        <div className='app__findus-text-header-openhours'>
          <h3>Opening hous</h3>
          <p className='p__opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
          <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
      </div>
      <button className='custom__button'>Visit Us</button>
    </div>
    <div className='app__findus-gallery app__wrapper_img'>
      <img src={images.findus} aria-disabled />
    </div>
  </div>
);

export default FindUs;
