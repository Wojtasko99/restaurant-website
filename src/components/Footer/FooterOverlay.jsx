import React from 'react';

import './FooterOverlay.css';
import { images } from '../../constants';
const FooterOverlay = () => (
  <div className='app__footeroverlay section__padding'>
    <div className='app__footeroverlay-links'>
      <div className='app__footoverlay-group'>
        <h4>Contact Us</h4>
        <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
        <p className='p__opensans'>+1 212-344-1230</p>
        <p className='p__opensans'>+1 212-555-1230</p>
      </div>
      <div className='app__footoverlay-group'>
        <h1>Gerícht</h1>
        <p className='p__opensans app__footoverlay-group_p'>"The best way to find yourself is to lose yourself in the service of others.”</p>
        <img src={images.spoon} alt="" className='spoon__img' />
      </div>
      <div className='app__footoverlay-group'>
        <h4>Working Hours</h4>
        <p className='p__opensans'>Monday-Friday:</p>
        <p className='p__opensans'>08:00 am -12:00 am</p>
        <p className='p__opensans'>Saturday-Sunday</p>
        <p className='p__opensans'>7:00 am -11:00 pm</p>
      </div>
    </div>
    <p className='p__opensans'>2021 Gerícht. All Rights reserved.</p>
  </div>
);

export default FooterOverlay;
