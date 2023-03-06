import React from 'react';

import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';

const Newsletter = () => (
  <div className='app__newsletter'>
    <SubHeading text="Newsletter"/>
    <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
    <p className='p__opensans'>And never miss latest Updates!</p>
    <div className='app__newsletter-form'>
      <input className='p__cormorant' type="text" name="" id="" placeholder='Email Adress'/>
      <button className='custom__button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
