import React from 'react';

import './Footer.css';
import { Newsletter, FooterOverlay } from '../../components';

const Footer = () => (
  <div className='app__footer app__bg'>
    <Newsletter />
    <FooterOverlay />
  </div>
);

export default Footer;
