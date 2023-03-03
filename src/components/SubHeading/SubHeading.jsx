import React from 'react';
import images from '../../constants/images';
import './SubHeading.css';
const SubHeading = () => (
  <div className='app__subheading'>
    <div className='app__subheading-container'>
        <h3>Chase the new Flavour</h3>
        <img aria-disabled src={images.spoon}/>
    </div>
  </div>
);

export default SubHeading;
