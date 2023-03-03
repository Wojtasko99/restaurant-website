import React from 'react';
import images from '../../constants/images';
import './Header.css';
import {SubHeading} from '../../components/index';

const Header = () => (
  <div className='app__header'>
    <div className='app_header-container'>
      <div className='app_header-container-side-text'>
        <p>#Bar</p>
        <p>#Gericht</p>
      </div>
      <div className='app_header-container-header'>
        <SubHeading />
        <h1>The key to Fine dining</h1>
        <p>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
        <button type='button'>Explore Menu</button>
      </div>
      <div className='app_header-container-image'>
        <img alt="img-welcome" src={images.welcome}/>
      </div>
    </div>
  </div>
);

export default Header;
