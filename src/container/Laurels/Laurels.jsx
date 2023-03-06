import React from 'react';

import './Laurels.css';
import images from '../../constants/images';
import { SubHeading } from '../../components/index';

const Laurels = () => (
  <div className='app__laurels app__bg'>
    <img className='app__laurels-image' src={images.logo} aria-disabled />
    <div className='app__laurels-container section__padding'>
      <div className='app__laurels-container-text'>
        <div className='app__laurels-container-text-heading'>
          <SubHeading text="Awards & Recognition" />
          <h1 className='headtext__cormorant'>Our Laurels</h1>
        </div>
        <div className='app__laurels-container-text-awards'>
          <div className='award'>
            <div className='app__laurels-container-text-awards-img'>
              <img src={images.award01} alt="img-award" />
            </div>
            <div className='app__laurels-container-text-awards-text'>
              <p>Bib Gourmond</p>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
          <div className='award'>
            <div className='app__laurels-container-text-awards-img'>
              <img src={images.award02} alt="img-award" />
            </div>
            <div className='app__laurels-container-text-awards-text'>
              <p>Rising Star</p>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
          <div className='award'>
            <div className='app__laurels-container-text-awards-img'>
              <img src={images.award03} alt="img-award" />
            </div>
            <div className='app__laurels-container-text-awards-text'>
              <p>AA Hospitality </p>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
          <div className='award'>
            <div className='app__laurels-container-text-awards-img'>
              <img src={images.award05} alt="img-award" />
            </div>
            <div className='app__laurels-container-text-awards-text'>
              <p>Outstanding Chef</p>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.laurels} alt="laurels-photo" />
      </div>
    </div>
  </div>
);

export default Laurels;
