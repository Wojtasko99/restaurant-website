import React from 'react';
import images from '../../constants/images';
const SubHeading = (props) => (
  <div className='app__subheading'>
    <div className='app__subheading-container'>
        <h3 className="p__cormorant">{props.text}</h3>
        <img aria-disabled src={images.spoon} className="spoon__img"/>
    </div>
  </div>
);

export default SubHeading;
