import React from 'react';

import './MenuItem.css';

const MenuItem = (props) => (
  <div className='app__menuitem'>
    <div className='app__menuitem-container'>
      <div className='app__menuitem-item-name'>
        <p>{props.name}</p>
        <div className='app__menuitem-stripe' />
        <p>{props.price}</p>
      </div>
      <p>{props.type}</p>
    </div>
  </div>
);

export default MenuItem;
