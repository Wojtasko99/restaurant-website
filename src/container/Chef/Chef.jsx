import React from 'react';

import './Chef.css';
import { images } from '../../constants';
import { SubHeading } from '../../components/index';
const Chef = () => (
  <div className='app__chef section__padding app__bg'>
      <div className='app__chef-container-image section__padding'>
        <img alt="chef" src={images.chef} />
      </div>
      <div className='app__chef-container-info section__padding'>
        <div className='app__chef-container-info-heading'>
          <SubHeading text="Chef’s Word" />
          <h1 className='headtext__cormorant'>What we believe in</h1>
        </div>
        <div className='app__chef-container-info-quote'>
          <p className='p__opensans'><span><img src={images.quote} alt="" /></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit. Aauctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
        </div>
        <div className='app__chef-container-info-chef'>
          <h3>Kevin Luo</h3>
          <p>Chef & Founder</p>
        </div>
        <div className='app__chef-container-info-sign'>
          <img src={images.sign} alt="" />
        </div>
      </div>
  </div>
);

export default Chef;
