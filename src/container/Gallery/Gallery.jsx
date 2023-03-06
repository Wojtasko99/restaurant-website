import React from 'react';

import './Gallery.css';

import {SubHeading} from '../../components/index';
import images from '../../constants/images';

const Gallery = () => (
  <div className='app__galery'>
    <div className='app__galery-heading'>
      <SubHeading text="Instagram"/>
      <h1 className='headtext__cormorant'>Photo Gallery</h1>
      <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
      <button className='custom__button'>View More</button>
    </div>
    <div className='app__galery-galery'>
      <img src={images.gallery01} aria-aria-disabled />
      <img src={images.gallery02} aria-aria-disabled />
      <img src={images.gallery03} aria-aria-disabled />
      <img src={images.gallery04} aria-aria-disabled />
    </div>
  </div>
);

export default Gallery;
